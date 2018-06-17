import axios from 'axios';


export const addToCart = (product_id, quantity) => {
  return axios.post(`/api/cart_products`, { "cart_product": { product_id, quantity }})
    .then(res => res.data);
}

export const updateCartProduct = (product_id, quantity) => {
  return axios.patch(`/api/cart_products/${product_id}`, { "cart_product": { product_id, quantity }})
    .then(res => res.data);
}

export const removeFromCart = (product_id) => {
  return axios.delete(`/api/cart_products/${product_id}`, { "cart_product": { product_id }})
    .then(res => res.data);
}
