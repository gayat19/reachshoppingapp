import axios from "axios";

export function authenticateUser(user){
    return axios.post('https://dummyjson.com/auth/login',user);
}