import AccountUtils from '../../utils/account-utils';
import LocalStorageUtils from '../../utils/local-storage-utils';
import RouteUtils from '../../utils/route-utils';
import { createUserAccountFormTemplate } from '../templates/templates-creator';

const Account = {
  async render() {
    if (!LocalStorageUtils.checkUserStorage()) {
      return RouteUtils.redirectToLogin();
    }

    return createUserAccountFormTemplate();
  },

  async afterRender(user) {
    if (!RouteUtils.isUserAccountUrl(user.username)) return;

    // Account utils
    AccountUtils.init({
      user,
      form: document.querySelector('#userForm'),
      username: document.querySelector('#usernameInput'),
      name: document.querySelector('#nameInput'),
      email: document.querySelector('#emailInput'),
      oldPassword: document.querySelector('#oldPasswordInput'),
      newPassword: document.querySelector('#newPasswordInput'),
    });
  },
};

export default Account;