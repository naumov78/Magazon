

export const createAddress = (address) => {
  return $.ajax({
    method: "POST",
    url: `/api/users/${address.user_id}/addresses`,
    data: {address}
  })
}

export const updateAddress = (address, address_id) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/users/${address.user_id}/addresses/${address_id}`,
    data: {address}
  })
}
