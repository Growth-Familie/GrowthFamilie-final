import swal from 'sweetalert';
import GrowfieSrc from '../data/growfie-src';
import RouteUtils from './route-utils';

const feather = require('feather-icons');

const BudgetingUtils = {
  init({ user, table }) {
    this._user = user;
    this._table = table;

    this._getAllProductsRecommendations();
  },

  numberFormatterToRupiah(number) {
    const numberString = number.toString();
    const splitNumber = numberString.split(',');
    const sisa = splitNumber[0].length % 3;
    let rupiah = splitNumber[0].substr(0, sisa);
    const ribuan = splitNumber[0].substr(sisa).match(/\d{3}/gi);

    if (ribuan) {
      const separator = sisa ? '.' : '';
      rupiah += separator + ribuan.join('.');
    }

    rupiah = splitNumber[1] !== undefined ? `${rupiah} , ${splitNumber[1]}` : rupiah;
    return `Rp. ${rupiah}`;
  },

  async _getAllProductsRecommendations() {
    const response = await GrowfieSrc.getAllProducts();
    const { products } = response.data;
    this._addProductsToTable(products);
  },

  _addProductsToTable(products) {
    this._table.innerHTML = '';
    products.forEach((product, index) => {
      const price = this.numberFormatterToRupiah(product.price);
      this._table.innerHTML += `
        <tr>
          <td scope='row'>${index + 1}</td>
          <td>${product.category}</td>
          <td>${product.name}</td>
          <td>${price}</td>
          <td>
            <button
              id="editButton"
              class="btn btn-sm btn-secondary btn-action"
              product-id="${product.id}"
              title="Edit"
              type="button"
            >${feather.icons.edit.toSvg()}</button>
            <button
              id="deleteButton"
              class="btn btn-sm btn-danger btn-action"
              product-id="${product.id}"
              title="Delete"
              type="button"
            >${feather.icons.trash.toSvg()}</button>
          </td>
        </tr>
      `;
    });

    this._deteleProduct();
    this._editProduct();
  },

  _editProduct() {
    const editButtonElement = document.querySelectorAll('#editButton');

    editButtonElement.forEach((button) => {
      const id = button.getAttribute('product-id');
      button.addEventListener('click', () => {
        RouteUtils.redirectToEditProduct(id);
      });
    });
  },

  _deteleProduct() {
    const deleteButtonElement = document.querySelectorAll('#deleteButton');

    deleteButtonElement.forEach((button) => {
      button.addEventListener('click', async () => {
        swal({
          title: 'Apa kamu yakin?',
          text: 'Setelah dihapus, saran produk akan hilang permanen!',
          icon: 'warning',
          buttons: true,
          dangerMode: true,
        }).then(async (willDelete) => {
          if (willDelete) {
            const id = button.getAttribute('product-id');
            const res = await GrowfieSrc.deleteProduct(id);
            swal({
              text: `${res.message}`,
              icon: 'success',
            }).then(() => {
              window.location.replace(`#/dashboard/${this._user.username}/budgeting`);
              window.location.reload(true);
            });
          } else {
            swal({
              text: 'Saran produk tidak jadi dihapus!',
              icon: 'success',
            });
          }
        });
      });
    });
  },
};

export default BudgetingUtils;