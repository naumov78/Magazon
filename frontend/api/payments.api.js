import axios from 'axios';


export const createPayment = (payment) => {
  return axios.post(`/api/users/${payment.user_id}/payments`, payment)
    .then(res => res.data);
}

export const updatePayment = (payment, payment_id) => {
  return axios.patch(`/api/users/${payment.user_id}/payments/${payment_id}`, payment)
    .then(res => res.data);
}
