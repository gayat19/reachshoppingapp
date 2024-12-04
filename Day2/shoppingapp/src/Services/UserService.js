import axios from'../Interceptors/AxiosInterceptor';
import { BASE_URL } from '../config';

export function getUserDetails(){
    return axios.get(BASE_URL+'/auth/me');
}