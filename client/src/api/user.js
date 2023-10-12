import axios from 'axios'

const base_url = "http://localhost:4500/api/v1/";


// Sending a get(http) request to the APIs we create in the backend
export const  getUsers = () => axios.get(`${base_url}/allusers`);      
export const getSingleUser = (id) => axios.get(`${base_url}/user/${id}`);