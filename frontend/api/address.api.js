import axios from 'axios';


export const createAddress = (address) => {
  return axios.post(`/api/users/${address.user_id}/addresses`, address);
}

export const updateAddress = (address, address_id) => {
  return axios.patch(`/api/users/${address.user_id}/addresses/${address_id}`, address);
}
