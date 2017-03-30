

export const createAddress = (address) => {
  debugger
  return $.ajax({
    method: "POST",
    url: `api/users/${address.user_id}/addresses`,
    data: {address}
  })
}
