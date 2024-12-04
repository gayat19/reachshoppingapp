import axios from'../Interceptors/AxiosInterceptor';

export function getUserDetails(){
    return axios.get('https://dummyjson.com/auth/me')
}