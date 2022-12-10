import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import RouteUtils from '../utils/route-utils';
import DrawerInitiator from '../utils/drawer-initiator';
import { createDashboardTemplate } from './templates/templates-creator';
import LocalStorageUtils from '../utils/local-storage-utils';
import LogoutInitiator from '../utils/logout-initiator';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];

    if (RouteUtils.notCommonUrl(url)) {
      if (url === '/login') {
        // Login page
        document.body.innerHTML = await page.render();
        await page.afterRender();
      } else {
        // Dashboard page
        const userStorage = LocalStorageUtils.getUserStorage();
        const user = JSON.parse(userStorage);

        document.body.innerHTML = '<div class="dashboard-wrapper"></div>';
        const dashboardWrapperElement = document.querySelector('.dashboard-wrapper');
        dashboardWrapperElement.innerHTML = createDashboardTemplate(user);

        const mainContentDashboardElement = document.querySelector('#mainContentDashboard');
        mainContentDashboardElement.innerHTML = await page.render();

        await page.afterRender(user);

        LogoutInitiator.init({
          button: document.querySelectorAll('#logoutButton'),
        });
      }
    } else {
      this._content.innerHTML = await page.render();
      await page.afterRender();
    }
  }
}

export default App;
