/* eslint-disable no-shadow */
import GrowfieSrc from '../../data/growfie-src';
import BudgetingUtils from '../../utils/budgeting-utils';

const cardDetail = {
  async render() {
    return `
      <div>
      <div class="title-wrapper py-4 mx-0">
      <h1 class="text-center fw-bold display-4 my-3">Budgeting</h1>
  
      <div class="container text-center mb-3">
          <a href="#/budgeting-children" class="btn category rounded-pill">Baby</a>
          <a href="#/budgeting-toddler" class="btn category rounded-pill">Toddler</a>
          <a href="#/budgeting-kids" class="btn category rounded-pill">Kids</a>
      </div>
      </div>
  
      <div class="py-4 mx-4">
          <h3 id="pregnancy" class="text-center">Baby needs</h3>
  
          <div class="row row-cols-md-4 row-cols-sm-2 row-cols-xs-1" id="budgeting"></div>
      </div>
      `;
  },

  async afterRender() {
    const bayiResponse = await GrowfieSrc.getProductsByCategory('bayi');

    const bayiProducts = bayiResponse.data.products;

    const articles = [...bayiProducts];
    const articlesContainer = document.querySelector('#budgeting');

    articles.forEach((c) => {
      const price = BudgetingUtils.numberFormatterToRupiah(c.price);
      articlesContainer.innerHTML += `
      <div class="mt-5">
             <div class="card box">
                 <div class="card-body">
                 <h5 class="card-title">${c.name}</h5>
                 <h6 class="card-subtitle mb-2 text-muted">${c.category}</h6>
                 <h6 class="card-subtitle mb-2 text-muted">${c.brand}</h6>
                 <p class="card-subtitle mb-2 text-muted">${price}</h6>
                 <p class="card-text">${c.features}</p>
                 <a href="${c.source}" class="btn position-absolute top-100 start-50 translate-middle fw-light" target="_blank" rel="noopener">Go to shop</a>
                 </div>
             </div>
      `;
    });
  },
};

export default cardDetail;