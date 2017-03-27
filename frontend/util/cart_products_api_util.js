

export const addToCart = (product_id, quantity) => {
  return $.ajax({
    method: "POST",
    url: `/api/cart_products`,
    data: { cart_product: { product_id: product_id, quantity: quantity }}
  })
}

export const updateCartProduct = (product_id, quantity) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/cart_products/${product_id}`,
    data: { cart_product: { product_id: product_id, quantity: quantity }}
  })
}


export const removeFromCart = (product_id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/cart_products/${product_id}`,
    data: { cart_product: { product_id: product_id }}
  })
}
