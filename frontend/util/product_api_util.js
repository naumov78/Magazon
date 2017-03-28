



export const fetchProduct = (category_id, product_id) => {
  return $.ajax({
    method: "GET",
    url: `/api/categories/${category_id}/products/${product_id}`
  })
}
