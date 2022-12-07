import GrowfieSrc from '../../data/growfie-src';
import UrlParser from '../../routes/url-parser';
import { createArticleDetailTemplate } from '../templates/templates-creator';

const Detail = {
  async render() {
    return `
      <div class="article-wrapper mt-4"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { name: slug } = url;
    const response = await GrowfieSrc.getOneArticle({ slug });
    const { article } = response.data;

    const articleWrapperElement = document.querySelector('.article-wrapper');
    articleWrapperElement.innerHTML = createArticleDetailTemplate(article);
  },
};

export default Detail;