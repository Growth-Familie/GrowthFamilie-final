/* eslint-disable no-undef */
import AddArticleUtils from '../../utils/add-article-utils';
import LocalStorageUtils from '../../utils/local-storage-utils';
import RouteUtils from '../../utils/route-utils';
import { createArticleFormTemplate } from '../templates/templates-creator';

const AddArticle = {
  async render() {
    if (!LocalStorageUtils.checkUserStorage()) {
      RouteUtils.redirectToLogin();
    }

    return createArticleFormTemplate();
  },

  async afterRender(user) {
    if (!RouteUtils.isAddArticleUrl(user.username)) return;

    // Tiny MCE
    tinymce.init({
      selector: '#articleBodyInput',
      plugins:
        'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
      toolbar:
        'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
    });

    // Add article utils
    AddArticleUtils.init({
      user,
      form: document.querySelector('#articleForm'),
      title: document.querySelector('#articleTitleInput'),
      category: document.querySelector('#articleCategorySelect'),
      from: document.querySelector('#articleFromInput'),
      img: document.querySelector('#articleImgLinkInput'),
      body: document.querySelector('#articleBodyInput'),
      refresh: document.querySelector('#refreshButton'),
    });
  },
};

export default AddArticle;