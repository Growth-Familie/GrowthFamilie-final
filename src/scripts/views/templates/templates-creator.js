/* eslint-disable arrow-body-style */
const feather = require('feather-icons');

const createLoginFormTemplate = () => {
  return `
    <div class="login-wrapper-img">
      <img src="./images/Family-amico_yellow.svg" />
    </div>
    <div class="login-content">
      <form id="loginForm" class="login-input">
        <img src="./images/avatar.svg" />
        <h2 class="title">Login</h2>
        <div class="input-div one">
          <div class="i">
            ${feather.icons.user.toSvg()}
          </div>
          <div class="div">
            <input
              id="inputUsername"
              type="text"
              class="input"
              placeholder="Username"
              autocomplete="off"
              autofocus
              required
            />
          </div>
        </div>
        <div class="input-div pass">
          <div class="i">
            ${feather.icons.lock.toSvg()}
          </div>
          <div class="div">
            <input
              id="inputPassword"
              type="password"
              class="input"
              placeholder="Password"
              autocomplete="off"
              required
            />
          </div>
        </div>
        <input type="submit" class="btn btn-login" value="Sign In" />
      </form>
  </div>
  `;
};

const createDashboardTitleTemplate = (title) => {
  return `
    <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
    >
      <h1 class="h3">${title}</h1>
      </div>
  `;
};

const createUserAccountFormTemplate = () => {
  return `
    ${createDashboardTitleTemplate('My Account')}
    <div class="col-lg-6 my-3">
      <form id="userForm">
        <div class="row g-3 align-items-center">
          <div class="col-auto">
            <label for="usernameInput" class="col-form-label">Username</label>
          </div>
          <div class="col-auto">
            <input type="text" id="usernameInput" class="form-control text-muted" aria-describedby="usernameHelpInline" disabled>
          </div>
          <div class="col-auto mb-3 pt-0 mt-0">
            <span id="usernameHelpInline" class="form-text text-danger">
              Untuk saat ini username tidak bisa diubah.
            </span>
          </div>
        </div>
        <div class="mb-3">
          <label for="nameInput" class="form-label">Full name</label>
          <input type="text" class="form-control" id="nameInput">
        </div>
        <div class="mb-3">
          <label for="emailInput" class="form-label">Email address</label>
          <input type="email" class="form-control" id="emailInput">
        </div>
        <div class="mb-3">
          <label for="oldPasswordInput" class="form-label">Old password</label>
          <input type="password" class="form-control" id="oldPasswordInput">
        </div>
        <div class="mb-3">
          <label for="newPasswordInput" class="form-label">New password</label>
          <input type="password" class="form-control" id="newPasswordInput">
        </div>
        <button type="submit" class="btn btn-primary" id="updateButton">Update</button>
      </form>
    </div>
  `;
};

const createProductFormTemplate = (username) => {
  return `
    ${createDashboardTitleTemplate('Product Recommendations')}
    <div class="col-lg-6 my-3">
      <a class="btn btn-sm btn-success mb-4" href="#/dashboard/${username}/budgeting">
        Kembali
      </a>
      <form id="productForm">
        <div class="mb-3">
          <label for="productCategorySelect" class="form-label">Category</label>
          <select class="form-select" id="productCategorySelect" required>
            <option>Select Category</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="nameInput" class="form-label">Name</label>
          <input type="text" class="form-control" id="nameInput">
        </div>
        <div class="mb-3">
          <label for="brandInput" class="form-label">Brand</label>
          <input type="text" class="form-control" id="brandInput">
        </div>
        <div class="mb-3">
          <label for="priceInput" class="form-label">Price (Rupiah)</label>
          <input type="text" class="form-control" id="priceInput">
        </div>
        <div class="mb-3">
          <label for="sourceInput" class="form-label">Source</label>
          <input type="text" class="form-control" id="sourceInput">
        </div>
        <div class="form-floating mb-3">
          <textarea class="form-control" placeholder="Features" id="featuresInput" style="height: 100px"></textarea>
          <label for="featuresInput">Features</label>
        </div>
        <button type="submit" class="btn btn-primary" id="submitButton">Submit</button>
      </form>
    </div>
  `;
};

const createArticleFormTemplate = () => {
  return `
    ${createDashboardTitleTemplate('Article')}
    <div class="col-lg-10 m-2 mt-4">
      <a class="btn btn-sm btn-success mb-4" href="#/dashboard">
        Kembali
      </a>
      <form id="articleForm">
        <div class="mb-3">
          <label for="articleTitleInput" class="form-label">Title</label>
          <input 
            type="text"
            class="form-control" 
            id="articleTitleInput"
            autocomplete="off"
            autofocus
            required
          >
        </div>
        <div class="mb-3">
          <label for="articleCategorySelect" class="form-label">Category</label>
          <select class="form-select" id="articleCategorySelect" required>
            <option>Pilih Kategori</option>
          </select>
        </div>
        <div class="mb-3">
          <label
            for="articleFromInput"
            class="form-label"
          >From / source (Optional)</label>
          <input
            type="text"
            class="form-control"
            id="articleFromInput"
            autocomplete="off"
          >
        </div>
        <div class="mb-3">
          <label for="articleImgLinkInput" class="form-label">Link image</label>
          <input
            type="text"
            class="form-control"
            id="articleImgLinkInput" 
            autocomplete="off"
            required
          >
        </div>
        <div class="mb-3">
        <div class="alert alert-warning" role="alert">
          Jika text editor belum muncul, pastikan terhubung internet, buka di browser dan klik tombol berikut.
          <button
            class="btn btn-sm btn-warning d-block mt-2"
            id="refreshButton"
            type="button"
          >Refresh Halaman</button>
        </div>
        <div class="mb-3 p-2">
          <textarea
            id="articleBodyInput"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary" id="buttonSubmit">Submit</button>
      </form>
    </div>
  `;
};

const createArticlesListTemplate = () => {
  return `
    ${createDashboardTitleTemplate('Articles')}
    <div class="d-flex justify-content-between">
      <button
        class='btn btn-success d-flex align-items-center'
        id='goToAddArticleButton'
      >
        <span class="text-white">${feather.icons.plus.toSvg()}</span>
        ADD ARTICLE
      </button>
      <button
        class="btn btn-warning"
        id="refreshButtonMainDashboard"
      >
        Refresh
      </button>
    </div>
    <div class="my-4">
      <p class="text-danger">
        Jika belum melihat perubahan coba tekan tombol 'Refresh'.
      </p>
    </div>
    <div class="p-2 my-3">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Kategori</th>
            <th scope="col">Judul Artikel</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody id="articleList">
        </tbody>
      </table>
    </div>
  `;
};

const createBudgetingListTemplate = () => {
  return `
    ${createDashboardTitleTemplate('Product Recommendations')}
    <div class="d-flex justify-content-between">
      <button
        class='btn btn-success d-flex align-items-center'
        id='goToAddBudgetingButton'
      >
        <span class="text-white">${feather.icons.plus.toSvg()}</span>
        ADD PRODUCT
      </button>
      <button
        class="btn btn-warning"
        id="refreshButtonMainDashboard"
      >
        Refresh
      </button>
    </div>
    <div class="my-4">
      <p class="text-danger">
        Jika belum melihat perubahan coba tekan tombol 'Refresh'.
      </p>
    </div>
    <div class="p-2 my-3">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Category</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody id="budgetingList">
        </tbody>
      </table>
    </div>
  `;
};

const createDashboardTemplate = (user) => {
  return `
    <header
      class="navbar sticky-top bg-black flex-md-nowrap p-1"
    >
      <a
        class="navbar-brand dashboard-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white"
        href="/"
      >Growth Familie</a>
      <div class="navbar-nav">
        <div class="nav-item text-nowrap">
          <button
            class="btn btn-sm p-2 nav-link px-3 text-white d-flex align-items-center"
            type="button"
            id="logoutButton"
          >
            <span class="feather-icon text-white">
              ${feather.icons['log-out'].toSvg()}
            </span>
            <span class="mx-2 text-white">
              Sign out
            </span>
          </button>
        </div>
      </div>
    </header>

    <div class="container-fluid">
      <div class="row">
        <nav
          id="sidebarMenu"
          class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
        >
          <div class="position-sticky pt-3 sidebar-sticky">
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link" href="#/dashboard">
                  <span class="feather-icon align-text-bottom">
                    ${feather.icons['file-text'].toSvg()}
                  </span>
                  Articles
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#/dashboard/${user.username}/budgeting"
                  id="budgeting"
                >
                  <span class="feather-icon align-text-bottom">
                    ${feather.icons.package.toSvg()}
                  </span>
                  Budgeting
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#/dashboard/${user.username}/account"
                  id="myAccount"
                >
                  <span class="feather-icon align-text-bottom">
                    ${feather.icons.user.toSvg()}
                  </span>
                  My Account
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <main
          class="col-md-9 ms-sm-auto col-lg-10 px-md-4"
          id="mainContentDashboard"
        ></main>
      </div>
    </div>
  `;
};

const createArticlesItemTemplate = (a) => `
    <div class="mt-5">
    <div class="card box">
      <img src="${a.img}" class="card-img-top">
        <div class="card-body">
        <h5 class="card-title">${a.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${a.category}</h6>
        <p class="card-text">${a.overview}</p>
        <a href="#/article/${a.slug}" class="btn position-absolute top-100 start-50 translate-middle fw-light">Read more...</a>
        </div>
    </div>
`;

const createArticleDetailTemplate = (article) => {
  const publishedAt = new Date(article.updatedAt);
  const day = publishedAt.getDay();
  const month = publishedAt.getMonth();
  const year = publishedAt.getFullYear();
  const date = `${day}/${month}/${year}`;

  return `
    <article class="container p-3 col-lg-8">
      <h1 class="title fs-2">${article.title}</h1>
      <div class="article-info px-1 py-2 d-flex gap-3">
        <div class="article-info__category" title='Category'>
          ${feather.icons.bookmark.toSvg()}
          ${article.category}
        </div>
        <div class="article-info__date" title="Published">
          ${feather.icons.calendar.toSvg()} 
          ${date}
        </div>
      </div>
      <img
        class="img-fluid my-3 article-img w-100 rounded"
        src="${article.img}"
      />
      <p class="text-source">
        <b>Sumber:</b> <i>${article.from}</i>
      </p>
      <div class="text-content">
        ${article.body}
      </div>
    </article>
  `;
};

export {
  createUserAccountFormTemplate,
  createArticleFormTemplate,
  createArticlesListTemplate,
  createBudgetingListTemplate,
  createDashboardTemplate,
  createLoginFormTemplate,
  createArticlesItemTemplate,
  createProductFormTemplate,
  createArticleDetailTemplate,
};