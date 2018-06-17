import axios from 'axios';


export const fetchProduct = (category_id, product_id) => {
  return axios.get(`/api/categories/${category_id}/products/${product_id}`)
    .then(res => res.data);
}

export const updateBoughtTogether = () => {
  return axios.post(`/api/frequently_bought_products`)
    .then(res => res.data);
}

export const searchProduct = (query) => {
  return axios.get("/api/products/search", query)
    .then(res => res.data);
}
