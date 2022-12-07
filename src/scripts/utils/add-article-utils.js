import swal from 'sweetalert';
import GrowfieSrc from '../data/growfie-src';
import RouteUtils from './route-utils';

const AddArticleUtils = {
  init({
    user,
    form,
    title,
    category,
    from,
    img,
    body,
    refresh,
  }) {
    this._user = user;
    this._form = form;
    this._title = title;
    this._category = category;
    this._from = from;
    this._img = img;
    this._body = body;
    this._refresh = refresh;

    this._getAllCategories();
    this._clickRefreshButton();
    this._requestPostArticle();
  },

  async _getAllCategories() {
    const response = await GrowfieSrc.getAllCategories();
    const { categories } = response.data;
    const categoriesName = categories.map((category) => category.name);

    categoriesName.forEach((category) => {
      this._category.innerHTML += `
        <option value="${category}">${category}</option>
      `;
    });
  },

  _requestPostArticle() {
    this._form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const article = {
        title: this._title.value,
        category: this._category.value,
        from: this._from.value,
        img: this._img.value,
        body: this._body.value,
        user: this._user,
      };

      const response = await GrowfieSrc.postArticle(article);

      if (response.error) {
        return this._addArticleFailed(response.message);
      }

      return this._addArticleSuccess();
    });
  },

  _addArticleFailed(message) {
    swal({
      title: 'Gagal',
      text: `${message}`,
      icon: 'error',
      button: 'Ok',
    });
  },

  _addArticleSuccess() {
    swal({
      title: 'Sukses!',
      text: 'Artikel berhasil ditambahkan',
      icon: 'success',
      button: 'Ok',
    }).then(() => RouteUtils.redirectToDashboard());
  },

  _clickRefreshButton() {
    this._refresh.addEventListener('click', () => {
      window.location.reload();
    });
  },
};

export default AddArticleUtils;