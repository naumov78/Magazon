

export const createPayment = (payment) => {
  debugger
  return $.ajax({
    method: "POST",
    url: `api/users/${payment.user_id}/payments`,
    data: {payment}
  })
}
