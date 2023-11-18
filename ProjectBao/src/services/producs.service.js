function makeProductsService() {
  const baseUrl = "/api/products";
  const headers = {
    "Content-Type": "application/json",
  };

  async function getProducts(page, limit = 5) {
    let url = `${baseUrl}?page=${page}&limit=${limit}`;
    return await fetch(url).then((res) => res.json());
  }

  async function createProducts(product) {
    return await fetch(baseUrl, {
      method: "POST",
      headers,
      body: JSON.stringify(contact),
    }).then((res) => res.json());
  }

  async function deleteAllProducts() {
    return await fetch(baseUrl, {
      method: "DELETE",
    }).then((res) => res.json());
  }

  async function getProduct(id) {
    return await fetch(`${baseUrl}/${id}`).then((res) => res.json());
  }

  async function getAllProducts() {
    return await fetch(baseUrl).then((res) => res.json());
  }

  async function updateProduct(id, product) {
    return await fetch(`${baseUrl}/${id}`, {
      method: "PUT",
      headers,
      body: JSON.stringify(contact),
    }).then((res) => res.json());
  }

  async function deleteProducts(id) {
    return await fetch(`${baseUrl}/${id}`, {
      method: "DELETE",
    }).then((res) => res.json());
  }

  return {
    createProducts,
    deleteAllProducts,
    deleteProducts,
    updateProduct,
    getProduct,
    getAllProducts,
  };
}

export default makeProductsService();
