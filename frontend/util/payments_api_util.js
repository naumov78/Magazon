

export const createPayment = (payment) => {
  debugger
  return $.ajax({
    method: "POST",
    url: `/api/users/${payment.user_id}/payments`,
    data: {payment}
  })
}


export const updatePayment = (payment, payment_id) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/users/${payment.user_id}/payments/${payment_id}`,
    data: {payment}
  })
}
