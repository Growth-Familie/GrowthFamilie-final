import swal from 'sweetalert';
import GrowfieSrc from '../data/growfie-src';
import LocalStorageUtils from './local-storage-utils';
import RouteUtils from './route-utils';

const AccountUtils = {
  init({
    user,
    form,
    username,
    name,
    email,
    oldPassword,
    newPassword,
  }) {
    this._user = user;
    this._form = form;
    this._username = username;
    this._name = name;
    this._email = email;
    this._oldPassword = oldPassword;
    this._newPassword = newPassword;

    this._showDetailUser();
    this._updateUserAccount();
  },

  _showDetailUser() {
    this._name.value = this._user.name;
    this._username.value = this._user.username;
    this._email.value = this._user.email;
  },

  _updateUserAccount() {
    this._form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const account = {
        name: this._name.value,
        email: this._email.value,
        currentPassword: this._oldPassword.value,
        newPassword: this._newPassword.value,
      };

      swal({
        icon: 'warning',
        title: 'Apa kamu yakin?',
        text: 'Pastikan simpan data akunmu dengan baik dan rahasia',
        buttons: true,
        dangerMode: true,
      }).then(async (willUpdate) => {
        if (willUpdate) {
          const response = await GrowfieSrc.putAccount(account, this._user.username);

          if (response.error) {
            return this._updateAccountFailed(response.message);
          }

          return this._updateAccountSuccess();
        }

        return swal('Data pengguna tidak jadi diperbarui!');
      });
    });
  },

  _updateAccountFailed(message) {
    swal({
      icon: 'error',
      text: `${message}`,
    });
  },

  _updateAccountSuccess() {
    swal({
      icon: 'success',
      text: 'Berhasil diperbarui, logout dan login kembali untuk melihat perubahan!',
      buttons: 'OK',
    }).then(() => {
      LocalStorageUtils.removeUserStorage();
      RouteUtils.redirectToLogin();
    });
  },
};

export default AccountUtils;