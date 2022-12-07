import swal from 'sweetalert';
import GrowfieSrc from '../data/growfie-src';
import LocalStorageUtils from './local-storage-utils';
import RouteUtils from './route-utils';

const LoginUtils = {
  init({
    loginForm,
    usernameInput,
    passwordInput,
  }) {
    this._loginForm = loginForm;
    this._usernameInput = usernameInput;
    this._passwordInput = passwordInput;

    this._loginRequest();
  },

  _loginRequest() {
    this._loginForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const user = {
        username: this._usernameInput.value,
        password: this._passwordInput.value,
      };

      const response = await GrowfieSrc.postLogin(user);

      if (response.error) {
        return this._loginFailed(response.message);
      }

      return this._loginSuccess(response.data.user);
    });
  },

  _loginSuccess(user) {
    const checkStorage = LocalStorageUtils.checkWebStorage();

    if (!checkStorage) {
      console.log('Browser kamu tidak mendukung web storage');
    }

    LocalStorageUtils.setUserStorage(user);
    RouteUtils.redirectToDashboard();
  },

  _loginFailed(message) {
    swal({
      icon: 'error',
      title: 'Login Gagal!',
      text: `${message}`,
    });
  },
};

export default LoginUtils;