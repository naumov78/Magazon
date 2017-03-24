

export const fetchProduct = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/products/${id}`
  })
}


export const fetchProductFromCategory = (category_id, product_id) => {
  return $.ajax({
    method: "GET",
    url: `/api/categories/${category_id}/products/${id}`
  })
}
