import ArticlesUtils from '../../utils/articles-utils';
import LocalStorageUtils from '../../utils/local-storage-utils';
import RouteUtils from '../../utils/route-utils';
import {
  createArticlesListTemplate,
} from '../templates/templates-creator';

const Dashboard = {
  async render() {
    if (!LocalStorageUtils.checkUserStorage()) {
      RouteUtils.redirectToLogin();
    }

    return createArticlesListTemplate();
  },

  async afterRender(user) {
    if (!RouteUtils.isDashboardUrl()) return;

    // Add article button
    const goToAddArticleButtonElement = document.querySelector('#goToAddArticleButton');
    goToAddArticleButtonElement.addEventListener('click', (event) => {
      event.stopPropagation();
      RouteUtils.redirectToAddArticle(user.username);
    });

    // Refresh button
    const refreshButtonElement = document.querySelector('#refreshButtonMainDashboard');
    refreshButtonElement.addEventListener('click', (event) => {
      event.stopPropagation();
      window.location.reload();
    });

    // Dashboard home - articles table
    ArticlesUtils.init({
      table: document.querySelector('#articleList'),
    });
  },
};

export default Dashboard;