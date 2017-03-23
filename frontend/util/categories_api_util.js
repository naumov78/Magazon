

export const fetchAllCategories = () => {
  return $.ajax({
    method: "GET",
    url: '/api/categories'
  })
}
