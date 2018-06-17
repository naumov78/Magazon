import axios from 'axios';


export const createOrder = () => {
  return axios.post('/api/orders')
    .then(res => res.data);
}

export const fetchOrder = (id) => {
  return axios.get(`/api/orders/${id}`)
    .then(res => res.data);
}

export const fetchAllOrders = () => {
  return axios.get('/api/orders')
    .then(res => res.data.orders);
}
