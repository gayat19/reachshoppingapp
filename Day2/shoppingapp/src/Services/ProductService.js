import axios from "axios";

export function getProductListFromAPI(){
    return axios.get("https://dummyjson.com/products");
}

export function addNewProduct(product){
    return axios.post("https://dummyjson.com/products/add", product);
}