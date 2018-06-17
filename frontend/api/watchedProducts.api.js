import axios from 'axios';


export const getWatchedProducts = () => {
  return axios.get('/api/watched_products')
    .then(res => res.data);
}
