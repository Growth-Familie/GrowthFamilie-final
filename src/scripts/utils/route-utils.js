const Urls = {
  LOGIN_URL: '#/login',
  DASHBOARD_URL: '#/dashboard',
  ADD_ARTICLE_URL: (username) => `#/dashboard/${username}/add-article`,
  EDIT_ARTICLE_URL: (id) => `#/dashboard/${id}/edit-article`,
  DETAIL_ARTICLE_URL: (slug) => `#/article/${slug}`,
  MY_ACCOUNT_URL: (username) => `#/dashboard/${username}/account`,
  HOME_BUDGETING_URL: (username) => `#/dashboard/${username}/budgeting`,
  ADD_BUDGETING_URL: (username) => `#/dashboard/${username}/add-budgeting`,
  EDIT_BUDGETING_URL: (id) => `#/dashboard/${id}/edit-budgeting`,
};

const RouteUtils = {
  isLoginUrl() {
    return window.location.hash === Urls.LOGIN_URL;
  },

  isDashboardUrl() {
    return window.location.hash === Urls.DASHBOARD_URL;
  },

  isAddArticleUrl(username) {
    console.log(username);
    return window.location.hash === Urls.ADD_ARTICLE_URL(username);
  },

  isEditArticleUrl(id) {
    return window.location.hash === Urls.EDIT_ARTICLE_URL(id);
  },

  isEditProductUrl(id) {
    return window.location.hash === Urls.EDIT_BUDGETING_URL(id);
  },

  isAddBudgetingUrl(username) {
    return window.location.hash === Urls.ADD_BUDGETING_URL(username);
  },

  isUserAccountUrl(username) {
    return window.location.hash === Urls.MY_ACCOUNT_URL(username);
  },

  isHomeBudgetingUrl(username) {
    return window.location.hash === Urls.HOME_BUDGETING_URL(username);
  },

  redirectToDetailArticle(slug) {
    return window.open(Urls.DETAIL_ARTICLE_URL(slug), '_blank');
  },

  redirectToEditArticle(id) {
    window.location.replace(Urls.EDIT_ARTICLE_URL(id));
    window.location.reload();
  },

  redirectToEditProduct(id) {
    window.location.replace(Urls.EDIT_BUDGETING_URL(id));
  },

  redirectToAddArticle(username) {
    window.location.replace(Urls.ADD_ARTICLE_URL(username));
    window.location.reload();
  },

  redirectToAddProduct(username) {
    window.location.replace(Urls.ADD_BUDGETING_URL(username));
  },

  redirectToDashboard() {
    window.location.replace(Urls.DASHBOARD_URL);
    window.location.reload();
  },

  redirectToLogin() {
    window.location.replace(Urls.LOGIN_URL);
  },

  notCommonUrl(url) {
    const urlList = [
      '/login',
      '/dashboard',
      '/dashboard/account',
      '/dashboard/add-article',
      '/dashboard/edit-article',
      '/dashboard/budgeting',
      '/dashboard/add-budgeting',
      '/dashboard/edit-budgeting',
    ];

    const checkUrl = urlList.filter((thisUrl) => thisUrl === url);

    if (checkUrl.length === 1) {
      return true;
    }

    return false;
  },
};

export default RouteUtils;