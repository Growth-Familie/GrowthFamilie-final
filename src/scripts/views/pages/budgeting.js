import BudgetingUtils from '../../utils/budgeting-utils';
import LocalStorageUtils from '../../utils/local-storage-utils';
import RouteUtils from '../../utils/route-utils';
import { createBudgetingListTemplate } from '../templates/templates-creator';

const Budgeting = {
  async render() {
    if (!LocalStorageUtils.checkUserStorage()) {
      return RouteUtils.redirectToLogin();
    }

    return createBudgetingListTemplate();
  },

  async afterRender(user) {
    if (!RouteUtils.isHomeBudgetingUrl(user.username)) return;

    // Add product button
    const addButtonElement = document.querySelector('#goToAddBudgetingButton');
    addButtonElement.addEventListener('click', (event) => {
      event.stopPropagation();
      RouteUtils.redirectToAddProduct(user.username);
    });

    // Refresh button
    const refreshButtonElement = document.querySelector('#refreshButtonMainDashboard');
    refreshButtonElement.addEventListener('click', (event) => {
      event.stopPropagation();
      window.location.reload();
    });

    BudgetingUtils.init({
      user,
      table: document.querySelector('#budgetingList'),
    });
  },
};

export default Budgeting;