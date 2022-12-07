import swal from 'sweetalert';
import GrowfieSrc from '../data/growfie-src';
import RouteUtils from './route-utils';

const EditArticleUtils = {
  init({
    user,
    id,
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

    this._clickRefreshButton();
    this._getAllCategories();
    this._getArticle(id);
    this._requestPutArticle(id);
  },

  async _getArticle(id) {
    const response = await GrowfieSrc.getOneArticle({ id });

    if (response.error) {
      return this._articleNotFound(response.message);
    }

    return this._articleFound(response.data.article);
  },

  _articleNotFound(message) {
    swal({
      icon: 'error',
      text: `${message}`,
      buttons: 'OK',
    }).then(() => RouteUtils.redirectToDashboard());
  },

  _articleFound(article) {
    this._title.value = article.title;
    this._category.value = article.category;
    this._from.value = article.from;
    this._img.value = article.img;
    this._body.value = article.body;
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

  _requestPutArticle(id) {
    this._form.addEventListener('submit', async (event) => {
      event.stopPropagation();
      event.preventDefault();

      const article = {
        title: this._title.value,
        category: this._category.value,
        from: this._from.value,
        img: this._img.value,
        body: this._body.value,
        user: this._user,
      };

      swal({
        title: 'Apa kamu yakin?',
        text: 'Artikel ini akan diperbarui!',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
      }).then(async (willUpdate) => {
        if (willUpdate) {
          const response = await GrowfieSrc.putArticle(article, id);

          if (response.error) {
            return this._updateArticleFailed(response.message);
          }

          return this._updateArticleSuccess();
        }

        return swal('Tidak jadi diperbarui!');
      });
    });
  },

  _updateArticleFailed(message) {
    swal({
      icon: 'error',
      text: `${message}`,
    });
  },

  _updateArticleSuccess() {
    swal({
      icon: 'success',
      text: 'Berhasil memperbarui artikel!',
      buttons: 'OK',
    }).then(() => RouteUtils.redirectToDashboard());
  },

  _clickRefreshButton() {
    this._refresh.addEventListener('click', () => {
      window.location.reload();
    });
  },
};

export default EditArticleUtils;