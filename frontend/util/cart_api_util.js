

export const addToCart = (id) => {
  return $.ajax({
    method: "POST",
    url: `/api/cart_products`,
    data: {cart_product: {product_id: id}}
  })
}


export const removeFromCart = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/cart_products/${id}`,
    data: { cart_product: { product_id: id }}
  })
}


export const fetchCart = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/carts/${id}`
  })
}


export const addProductFromCart = (id) => {
  return $.ajax({
    method: "POST",
    url: `/api/carts`,
    data: {cart: {product_id: id}}
  })
}


export const removeFromCartFromCart = (cart_id, product_id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/carts/${cart_id}`,
    data: { cart: { product_id: product_id }}
  })
}

export const emptyCart = (cart_id) => {
  return $.ajax({
    method: "GET",
    url: `/api/carts/${cart_id}/delete_all`
  })
}
