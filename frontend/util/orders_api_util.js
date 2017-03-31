

export const createOrder = () => {
  debugger
  return $.ajax({
    method: "POST",
    url: '/api/orders'
  })
}


export const fetchOrder = (id) => {
  debugger
  return $.ajax({
    method: "GET",
    url: `/api/orders/${id}`
  })
}
