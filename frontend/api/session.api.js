import axios from 'axios';


export const signup = (user) => {
  return axios.post('api/users', user)
    .then(res => res.data);
}

export const signin = (user) => {
  return axios.post('api/session', user)
    .then(res => res.data);
}

export const logout = () => {
  return axios.delete('api/session');
}

export const refreshCurrentUser = () => {
  return axios.get('/api/users/1')
    .then(res => res.data);
}
