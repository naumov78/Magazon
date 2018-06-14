
export const fetchProduct = (category_id, product_id) => {
  return $.ajax({
    method: "GET",
    url: `/api/categories/${category_id}/products/${product_id}`
  })
}


export const updateBoughtTogether = () => {
  return $.ajax({
    method: "POST",
    url: `/api/frequently_bought_products`
  })
}


export const searchProduct = (query) => {
  return $.ajax({
    method: "GET",
    url: "/api/products/search",
    data: {query}
  })
}
