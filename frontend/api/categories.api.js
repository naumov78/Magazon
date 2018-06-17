import axios from 'axios';


export const fetchAllCategories = () => {
  return axios.get('/api/categories')
    .then(res => res.data);
}

export const fetchCategory = (id) => {
  return axios.get(`/api/categories/${id}`)
    .then(res => res.data);
}
