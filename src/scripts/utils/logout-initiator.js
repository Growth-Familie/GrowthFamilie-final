import LocalStorageUtils from './local-storage-utils';
import RouteUtils from './route-utils';

const LogoutInitiator = {
  init({ button }) {
    this._button = button;

    this._clickButton();
  },

  _clickButton() {
    this._button.addEventListener('click', (event) => {
      event.stopPropagation();
      LocalStorageUtils.removeUserStorage();
      RouteUtils.redirectToLogin();
    });
  },
};

export default LogoutInitiator;