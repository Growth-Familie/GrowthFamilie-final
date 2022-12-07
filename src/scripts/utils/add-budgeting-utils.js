import swal from 'sweetalert';
import GrowfieSrc from '../data/growfie-src';

const AddBudgetingUtils = {
  init({
    user,
    form,
    category,
    input,
  }) {
    this._user = user;
    this._form = form;
    this._category = category;
    this._name = input.name;
    this._brand = input.brand;
    this._price = input.price;
    this._source = input.source;
    this._features = input.features;

    this._getAllCategories();
    this._requestPostProduct();
  },

  async _getAllCategories() {
    const response = await GrowfieSrc.getAllCategories();
    const { categories } = response.data;

    categories.forEach((category) => {
      this._category
        .innerHTML += `<option value="${category.name}">${category.name}</option>`;
    });
  },

  _requestPostProduct() {
    this._form.addEventListener('submit', async (event) => {
      event.stopPropagation();
      event.preventDefault();

      const product = {
        category: this._category.value,
        name: this._name.value,
        brand: this._brand.value,
        price: this._price.value,
        features: this._features.value,
        source: this._source.value,
        user: this._user,
      };

      const response = await GrowfieSrc.postProduct(product);

      if (response.error) {
        return this._addProductFailed(response.message);
      }

      return this._addProductSuccess();
    });
  },

  _addProductFailed(message) {
    swal({
      title: 'Gagal',
      text: `${message}`,
      icon: 'error',
      button: 'Ok',
    });
  },

  _addProductSuccess() {
    swal({
      title: 'Sukses!',
      text: 'Product berhasil ditambahkan',
      icon: 'success',
      button: 'Ok',
    }).then(() => {
      window.location.replace(`#/dashboard/${this._user.username}/budgeting`);
    });
  },
};

export default AddBudgetingUtils;