import LocalStorageUtils from '../../utils/local-storage-utils';
import LoginUtils from '../../utils/login-utils';
import RouteUtils from '../../utils/route-utils';
import { createLoginFormTemplate } from '../templates/templates-creator';

const Login = {
  async render() {
    if (LocalStorageUtils.checkUserStorage()) {
      RouteUtils.redirectToDashboard();
    }

    return `
      <img class="wave" src="./images/wave.png"/>
      <div class="container login-wrapper"></div>
    `;
  },

  async afterRender() {
    if (!RouteUtils.isLoginUrl()) return;

    const loginWrapperElement = document.querySelector('.login-wrapper');
    loginWrapperElement.innerHTML = createLoginFormTemplate();

    LoginUtils.init({
      loginForm: document.querySelector('#loginForm'),
      usernameInput: document.querySelector('#inputUsername'),
      passwordInput: document.querySelector('#inputPassword'),
    });
  },
};

export default Login;