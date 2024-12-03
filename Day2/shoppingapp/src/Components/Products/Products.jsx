import { useEffect } from "react";
import { getProductListFromAPI } from "../../Services/ProductService";
import { useState } from "react";
import Product from "../Product/Product";
import "./Products.css";


const Products=()=>{
   const [count,setCount]=useState(0);
    const [products,setProducts]=useState([]);
    useEffect(()=>{
       getProductListFromAPI()
       .then((response)=>{
           setProducts(response.data.products);
       })   
    },[])
    const addToCartHandler=(pid)=>{
        console.log(pid);
        setCount(cnt=>cnt+1);
    }
    return(
        <div>
            <h1>Products</h1>
            <h2>Cart count - {count}</h2>
            <div className="card-container">
                {products.map((product)=>(
                    <Product onAddToCart={addToCartHandler} key={product.id} product={product}/>
                ))}
            </div>
        </div>
    )
}

export default Products;