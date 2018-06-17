import axios from 'axios';


export const getStorefront = () => {
  return axios.get('/api/storefronts')
    .then(res => res.data);
}
