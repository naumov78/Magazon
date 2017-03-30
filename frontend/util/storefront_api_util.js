

export const getStorefront = () => {
  return $.ajax({
    method: "GET",
    url: '/api/storefronts'
  })
}
