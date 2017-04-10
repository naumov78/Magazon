

export const createOrder = () => {
  return $.ajax({
    method: "POST",
    url: '/api/orders'
  })
}


export const fetchOrder = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/orders/${id}`
  })
}


export const fetchAllOrders = () => {
  return $.ajax({
    method: "GET",
    url: '/api/orders'
  })
}
