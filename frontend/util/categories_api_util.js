

export const fetchAllCategories = () => {
  return $.ajax({
    method: "GET",
    url: '/api/categories'
  })
}


export const fetchCategory = (id) => {
  debugger
  return $.ajax({
    method: "GET",
    url: `/api/categories/${id}`
  })
}
