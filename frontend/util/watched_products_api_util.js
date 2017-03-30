

export const getWatchedProducts = () => {
  return $.ajax({
    method: "GET",
    url: '/api/watched_products'
  })
}
