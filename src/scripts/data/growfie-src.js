import ENDPOINT from '../global/endpoint';
import CONFIG from '../global/config';

const { headers } = CONFIG;

class GrowfieSrc {
  static async getAllArticles() {
    try {
      const response = await fetch(`${ENDPOINT.ALL_ARTICLES}`, { headers });
      const responseJson = await response.json();
      return responseJson;
    } catch (err) {
      return console.log(err.stack);
    }
  }

  static async getOneArticle(params) {
    const { id, slug } = params;

    try {
      // get article by id
      if (id) {
        const response = await fetch(`${ENDPOINT.DETAIL_ARTICLE_BY_ID(id)}`, { headers });
        const responseJson = await response.json();
        return responseJson;
      }

      // get article by slug
      const response = await fetch(`${ENDPOINT.DETAIL_ARTICLE_BY_SLUG(slug)}`, { headers });
      const responseJson = await response.json();
      return responseJson;
    } catch (err) {
      return console.log(err.stack);
    }
  }

  static async getArticlesByCategory(category) {
    try {
      const response = await fetch(`${ENDPOINT.ARTICLES_BY_CATEGORY(category)}`, { headers });
      const responseJson = await response.json();
      return responseJson;
    } catch (err) {
      return console.log(err.stack);
    }
  }

  static async getAllCategories() {
    try {
      const response = await fetch(`${ENDPOINT.ALL_CATEGORIES}`, { headers });
      const responseJson = await response.json();
      return responseJson;
    } catch (err) {
      return console.log(err.stack);
    }
  }

  static async getAllProducts() {
    try {
      const response = await fetch(`${ENDPOINT.ALL_PRODUCTS}`, { headers });
      const responseJson = await response.json();
      return responseJson;
    } catch (err) {
      return console.log(err.stack);
    }
  }

  static async getProductsByCategory(category) {
    try {
      const response = await fetch(`${ENDPOINT.PRODUCTS_BY_CATEGORY(category)}`, { headers });
      const responseJson = await response.json();
      return responseJson;
    } catch (err) {
      return console.log(err.stack);
    }
  }

  static async getDetailProducts(id) {
    try {
      const response = await fetch(`${ENDPOINT.DETAIL_PRODUCTS(id)}`, { headers });
      const responseJson = await response.json();
      return responseJson;
    } catch (err) {
      return console.log(err.stack);
    }
  }

  static async postArticle(article) {
    const options = {
      headers,
      method: 'POST',
      body: JSON.stringify(article),
    };

    try {
      const response = await fetch(`${ENDPOINT.ALL_ARTICLES}`, options);
      const responseJson = await response.json();
      return responseJson;
    } catch (err) {
      return console.log(err.stack);
    }
  }

  static async postProduct(product) {
    const options = {
      headers,
      method: 'POST',
      body: JSON.stringify(product),
    };

    try {
      const response = await fetch(`${ENDPOINT.ALL_PRODUCTS}`, options);
      const responseJson = await response.json();
      return responseJson;
    } catch (err) {
      return console.log(err.stack);
    }
  }

  static async putArticle(article, id) {
    const options = {
      headers,
      method: 'PUT',
      body: JSON.stringify(article),
    };

    try {
      const response = await fetch(`${ENDPOINT.EDIT_ARTICLE(id)}`, options);
      const responseJson = await response.json();
      return responseJson;
    } catch (err) {
      return console.log(err.stack);
    }
  }

  static async putProduct(product, id) {
    const options = {
      headers,
      method: 'PUT',
      body: JSON.stringify(product),
    };

    try {
      const response = await fetch(`${ENDPOINT.EDIT_PRODUCT(id)}`, options);
      const responseJson = await response.json();
      return responseJson;
    } catch (err) {
      return console.log(err.stack);
    }
  }

  static async putAccount(account, username) {
    const options = {
      headers,
      method: 'PUT',
      body: JSON.stringify(account),
    };

    try {
      const response = await fetch(`${ENDPOINT.EDIT_ACCOUNT(username)}`, options);
      const responseJson = await response.json();
      return responseJson;
    } catch (err) {
      return console.log(err.stack);
    }
  }

  static async deleteArticle(id) {
    const options = {
      headers,
      method: 'DELETE',
    };

    try {
      const response = await fetch(`${ENDPOINT.DELETE_ARTICLE_BY_ID(id)}`, options);
      const responseJson = await response.json();
      return responseJson;
    } catch (err) {
      return console.log(err.stack);
    }
  }

  static async deleteProduct(id) {
    const options = {
      headers,
      method: 'DELETE',
    };
    try {
      const response = await fetch(`${ENDPOINT.DELETE_PRODUCT_BY_ID(id)}`, options);
      const responseJson = await response.json();
      return responseJson;
    } catch (err) {
      return console.log(err.stack);
    }
  }

  static async postLogin(user) {
    const options = {
      headers,
      method: 'POST',
      body: JSON.stringify(user),
    };

    try {
      const response = await fetch(`${ENDPOINT.LOGIN}`, options);
      const responseJson = await response.json();
      return responseJson;
    } catch (err) {
      return console.log(err.stack);
    }
  }
}

export default GrowfieSrc;