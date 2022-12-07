import swal from 'sweetalert';
import GrowfieSrc from '../data/growfie-src';

const EditBudgetingUtils = {
  init({
    user,
    productId,
    form,
    input,
    category,
  }) {
    this._user = user;
    this._productId = productId;
    this._form = form;
    this._category = category;
    this._name = input.name;
    this._brand = input.brand;
    this._price = input.price;
    this._source = input.source;
    this._features = input.features;

    this._getAllCategories();
    this._getProduct();
    this._requestPutProduct();
  },

  async _getProduct() {
    const response = await GrowfieSrc.getDetailProducts(this._productId);
    const { product } = response.data;

    if (response.error) {
      return this._productNotFound(response.message);
    }

    return this._productFound(product);
  },

  _productFound(product) {
    this._category.value = product.category;
    this._name.value = product.name;
    this._brand.value = product.brand;
    this._price.value = product.price;
    this._source.value = product.source;
    this._features.value = product.features;

    console.log(product.category);
    console.log(this._category);
  },

  _productNotFound(message) {
    swal({
      icon: 'error',
      text: `${message}`,
      buttons: 'OK',
    }).then(() => {
      window.location.replace(`#/dashboard/${this._user.username}/budgeting`);
      window.location.reload(true);
    });
  },

  async _getAllCategories() {
    const response = await GrowfieSrc.getAllCategories();
    const { categories } = response.data;

    this._category.innerHTML = '';
    categories.forEach((category) => {
      this._category
        .innerHTML += `<option value="${category.name}">${category.name}</option>`;
    });
  },

  _requestPutProduct() {
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

      swal({
        title: 'Apa kamu yakin?',
        text: 'Saran produk ini akan diperbarui!',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
      }).then(async (willUpdate) => {
        if (willUpdate) {
          const response = await GrowfieSrc.putProduct(product, this._productId);

          if (response.error) {
            return this._updateProductFailed(response.message);
          }

          return this._updateProductSuccess();
        }

        return swal('Tidak jadi diperbarui!');
      });
    });
  },

  _updateProductFailed(message) {
    swal({
      icon: 'error',
      text: `${message}`,
    });
  },

  _updateProductSuccess() {
    swal({
      icon: 'success',
      text: 'Berhasil memperbarui produk!',
      buttons: 'OK',
    }).then(() => {
      window.location.replace(`#/dashboard/${this._user.username}/budgeting`);
    });
  },
};

export default EditBudgetingUtils;