import swal from 'sweetalert';
import GrowfieSrc from '../data/growfie-src';
import RouteUtils from './route-utils';

const feather = require('feather-icons');

const ArticlesUtils = {
  init({ table }) {
    this._table = table;

    this._getAllArticles();
  },

  async _getAllArticles() {
    const response = await GrowfieSrc.getAllArticles();
    const { articles } = response.data;
    this._addArticleToTable(articles);
  },

  _addArticleToTable(articles) {
    this._table.innerHTML = '';
    articles.forEach((article, index) => {
      this._table.innerHTML += `
        <tr>
          <td scope='row'>${index + 1}</td>
          <td>${article.category}</td>
          <td>${article.title}</td>
          <td>
            <button
              id="viewButton"
              class="btn btn-sm btn-info text-white btn-action m-1"
              article-slug="${article.slug}"
              title="View"
              type="button"
            >${feather.icons.eye.toSvg()}</button>
            <button
              id="editButton"
              class="btn btn-sm btn-secondary btn-action m-1"
              article-id="${article.id}"
              title="Edit"
              type="button"
            >${feather.icons.edit.toSvg()}</button>
            <button
              id="deleteButton"
              class="btn btn-sm btn-danger btn-action m-1"
              article-id="${article.id}"
              title="Delete"
              type="button"
            >${feather.icons.trash.toSvg()}</button>
          </td>
        </tr>
      `;
    });

    this._editArticle();
    this._viewArticle();
    this._deteleArticle();
  },

  _viewArticle() {
    const viewButtonElement = document.querySelectorAll('#viewButton');
    viewButtonElement.forEach((button) => {
      const slug = button.getAttribute('article-slug');
      button.addEventListener('click', () => {
        RouteUtils.redirectToDetailArticle(slug);
      });
    });
  },

  _editArticle() {
    const editButtonElement = document.querySelectorAll('#editButton');

    editButtonElement.forEach((button) => {
      const articleId = button.getAttribute('article-id');
      button.addEventListener('click', () => {
        RouteUtils.redirectToEditArticle(articleId);
      });
    });
  },

  _deteleArticle() {
    const deleteButtonElement = document.querySelectorAll('#deleteButton');

    deleteButtonElement.forEach((button) => {
      button.addEventListener('click', async () => {
        swal({
          title: 'Apa kamu yakin?',
          text: 'Setelah dihapus, artikel akan hilang permanen!',
          icon: 'warning',
          buttons: true,
          dangerMode: true,
        }).then(async (willDelete) => {
          if (willDelete) {
            const id = button.getAttribute('article-id');
            const res = await GrowfieSrc.deleteArticle(id);
            swal({
              text: `${res.message}`,
              icon: 'success',
            }).then(() => RouteUtils.redirectToDashboard());
          } else {
            swal({
              text: 'Artikel tidak jadi dihapus!',
              icon: 'success',
            });
          }
        });
      });
    });
  },
};

export default ArticlesUtils;