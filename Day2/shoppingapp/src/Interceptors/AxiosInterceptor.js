import axios from "axios";

function requestHandler(config) {
    config.headers.Authorization = `Bearer ${sessionStorage.getItem("token")}`;
    return config;
}
function responseHandler(response) {
    return response;
}

axios.interceptors.request.use(requestHandler,responseHandler);

export default axios;