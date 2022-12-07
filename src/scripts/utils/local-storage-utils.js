/* eslint-disable no-constant-condition */
const LocalStorageUtils = {
  checkWebStorage() {
    if (!(typeof Storage)) {
      return false;
    }

    return true;
  },

  checkUserStorage() {
    const userStorage = localStorage.getItem(process.env.USER_STORAGE);

    if (userStorage) {
      return true;
    }

    return false;
  },

  setUserStorage(user) {
    const stringifyUser = JSON.stringify(user);
    localStorage.setItem(process.env.USER_STORAGE, stringifyUser);
  },

  removeUserStorage() {
    localStorage.removeItem(process.env.USER_STORAGE);
  },

  getUserStorage() {
    return localStorage.getItem(process.env.USER_STORAGE);
  },
};

export default LocalStorageUtils;