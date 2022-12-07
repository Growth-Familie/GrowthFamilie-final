/* eslint-disable no-shadow */
import GrowfieSrc from '../../data/growfie-src';
import { createArticlesItemTemplate } from '../templates/templates-creator';

const cardDetail = {
  async render() {
    return `
    <div>
    <div class="title-wrapper py-4 mx-0">
    <h1 class="text-center fw-bold display-4 my-3">Children Articles</h1>

    <div class="container text-center mb-3">
        <a href="#/pregnancy" class="btn category rounded-pill">Pregnancy</a>
        <a href="#/children" class="btn category rounded-pill" aria-current="page">Children</a>
        <a href="#/family" class="btn category rounded-pill">Family</a>
    </div>
    </div>

    <div class="py-4 mx-4">
      <h3 id="children" class="text-center">Children</h3>

      <div class="row row-cols-md-4 row-cols-sm-2 row-cols-xs-1" id="articles">
    </div>

    <div class="budgeting-wrapper container-fluid py-5 mt-5 text-center">
      <h3 class="text-center mb-5"><u>What you need for your children?</u></h3>
      <a href="#/budgeting-children" class="btn category rounded-pill mt-4">Take A Look At Here!</a>
    </div>
    `;
  },

  async afterRender() {
    const bayiResponse = await GrowfieSrc.getArticlesByCategory('bayi');
    const balitaResponse = await GrowfieSrc.getArticlesByCategory('Balita');
    const AnakanakResponse = await GrowfieSrc.getArticlesByCategory('Anak-anak');

    const bayiArticles = bayiResponse.data.articles;
    const balitaArticles = balitaResponse.data.articles;
    const AnakanakArticles = AnakanakResponse.data.articles;

    const articles = [...bayiArticles, ...balitaArticles, ...AnakanakArticles];
    const articlesContainer = document.querySelector('#articles');
    articles.forEach((article) => {
      articlesContainer.innerHTML += createArticlesItemTemplate(article);
    });
  },
};

export default cardDetail;