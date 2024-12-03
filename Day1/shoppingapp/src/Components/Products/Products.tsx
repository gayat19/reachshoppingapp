import { useEffect, useState } from "react";
import "./Products.css";

export default function Products() {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch("https://dummyjson.com/products")
        .then(response=>response.json())
        .then(data=>setProducts(data.products))
    },[])


    return(
        <section>
            
            {
                products.length===0?
                <h2>No Products available to display</h2>
                :
                    <section className="card-container">
                    { 
                        products.map(product=>{
                            return(
                                <div className="card-item" key={product["id"]}>
                                    <h3>{product["title"]}</h3>
                                    <img src={product["thumbnail"]} alt="product" />
                                    <p>{product["price"]}</p>
                                    
                                </div>
                            );
                        }
                    )}
                    </section>
            }
        </section>
    );
}
