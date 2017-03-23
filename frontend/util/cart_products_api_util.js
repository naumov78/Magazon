

export const addToCart = (user, product_id) => {
  return $.ajax({
    method: "POST",
    url: `/api/users/${user.id}/cart/${user.cart_id}/cart_products`,
    data: { cart_product: { product_id: product_id }}
  })
}


export const removeFromCart = (user, product_id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/users/${user.id}/cart/${user.cart_id}/cart_products/${product_id}`,
    data: { cart_product: { product_id: product_id }}
  })
}
