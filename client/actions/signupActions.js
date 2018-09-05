import axios from 'axios';

export function userSignupRequest(userData){
    return dispatch => {
    return axios.post('/api/users',userData);
  }
}

export function login(userData){
    return dispatch => {
    return axios.post('/api/users/signin',userData);
  }
}
