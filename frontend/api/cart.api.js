import axios from 'axios';


export const addToCart = (id) => {
  return axios.post(`/api/cart_products`, { "cart_product": {product_id: id}})
    .then(res => res.data);
}

export const removeFromCart = (id) => {
  return axios.delete(`/api/cart_products/${id}`, { "cart_product": { product_id: id }})
    .then(res => res.data);
}

export const fetchCart = (id) => {
  return axios.get(`/api/carts/${id}`)
    .then(res => res.data);
}

export const addProductFromCart = (id) => {
  return axios.post(`/api/carts`, { "cart": {product_id: id}})
    .then(res => res.data);
}

export const removeFromCartFromCart = (cart_id, product_id) => {
  return axios.delete(`/api/carts/${cart_id}`, { "cart": { product_id }})
    .then(res => res.data);
}

export const emptyCart = (cart_id) => {
  return axios.get(`/api/carts/${cart_id}/delete_all`)
    .then(res => res.data);
}
