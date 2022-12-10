/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import GrowfieSrc from '../../data/growfie-src';
import { createArticlesItemTemplate } from '../templates/templates-creator';

const feather = require('feather-icons');

const Home = {
  async render() {
    return `
      <!-- Hero Section -->
      <section id="hero">
          <div class="row">
            <div class="hero_text col">
              <div class="text-center p-5">
                <h1>Best <span class="fw-bold">Parenting</span> <br>For Your Family</h1>
                <p>Good parenting solution for children's growth</p>
                <a href="#read-articles"class="btn">GET STARTED</a>
              </div>
            </div>
            <div class="hero_image col">
              <img src="./images/hero.svg" alt="hero picture">
            </div>
        </div>
      </section>
      <!-- akhir Hero Section -->
      <!-- Carousel -->
      <div id="carouselExampleIndicators" class="carousel slide mt-5" data-bs-ride="true">
        <h2 class="text-center mb-5 mx-5">Playful parenting gives a boost to every member of the family</h2>
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div class="carousel-inner mt-3">
          <div class="carousel-item active" data-bs-interval="10000">
            <img src="./images/img2.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src="./images/img3.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
            </div>
          </div>
          <div class="carousel-item">
            <img src="./images/img7.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
            </div>
          </div>  
          <div class="carousel-item">
            <img src="./images/img5.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <!-- akhir Carousel -->

      <!-- Card -->
      <div class="container mt-5">
      <div class="articles-card position-relative m-3">
      <h2 class="text-center mx-4" id="read-articles">Dive into our latest articles and blog posts</h2>
      <div class="container text-center mt-3">
      <a href="#/pregnancy" class="d-block d-md-none btn category">View All</a>
      </div>
      <a href="#/pregnancy">
      <img src="./images/arrow.png" class="arrow position-absolute top-50 start-100 translate-middle">
      </a>
        <div class="row row-cols-lg-4 row-cols-md-2 row-cols-xs-1" id="articles">
        </div>
      </div>

      <!-- akhir Card -->
    `;
  },

  async afterRender() {
    const bayiResponse = await GrowfieSrc.getArticlesByCategory('bayi');
    const KehamilanResponse = await GrowfieSrc.getArticlesByCategory('kehamilan');
    const AnakanakResponse = await GrowfieSrc.getArticlesByCategory('anak-anak');
    const ParentingResponse = await GrowfieSrc.getArticlesByCategory('parenting');

    const bayiArticles = bayiResponse.data.articles;
    const KehamilanArticles = KehamilanResponse.data.articles;
    const AnakanakArticles = AnakanakResponse.data.articles;
    const ParentingArticles = ParentingResponse.data.articles;

    const articles = [
      bayiArticles[bayiArticles.length - 1],
      KehamilanArticles[KehamilanArticles.length - 1],
      AnakanakArticles[AnakanakArticles.length - 1],
      ParentingArticles[ParentingArticles.length - 1],
    ];

    const articlesContainer = document.querySelector('#articles');

    articles.forEach((article) => {
      articlesContainer.innerHTML += `
      <div class="mt-5">
        <div class="card box">
          <img src="${article.img}" class="card-img-top">
            <div class="card-body">
            <h5 class="card-title">${article.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${article.category}</h6>
            <p class="card-text">${article.overview}</p>
            <a href="#/article/${article.slug}" class="btn position-absolute top-100 start-50 translate-middle fw-light">Read more...</a>
            </div>
        </div>
      `;
    });
  },
};

export default Home;
