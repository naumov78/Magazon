

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
