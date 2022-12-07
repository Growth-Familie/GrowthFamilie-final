import AddBudgetingUtils from '../../utils/add-budgeting-utils';
import LocalStorageUtils from '../../utils/local-storage-utils';
import RouteUtils from '../../utils/route-utils';
import { createProductFormTemplate } from '../templates/templates-creator';

const AddBudgeting = {
  async render() {
    if (!LocalStorageUtils.checkUserStorage()) {
      RouteUtils.redirectToLogin();
    }

    const getUser = LocalStorageUtils.getUserStorage();
    const user = JSON.parse(getUser);

    return createProductFormTemplate(user.username);
  },

  async afterRender(user) {
    if (!RouteUtils.isAddBudgetingUrl(user.username)) return;

    AddBudgetingUtils.init({
      user,
      form: document.querySelector('#productForm'),
      category: document.querySelector('#productCategorySelect'),
      input: {
        name: document.querySelector('#nameInput'),
        brand: document.querySelector('#brandInput'),
        price: document.querySelector('#priceInput'),
        source: document.querySelector('#sourceInput'),
        features: document.querySelector('#featuresInput'),
      },
    });
  },
};

export default AddBudgeting;