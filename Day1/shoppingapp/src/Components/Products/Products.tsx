https://github.com/gayat19/reachshoppingapp.git

npx create-react-app shoppingapp
-----------------------------------------------
.App {
  text-align: center;
}
--------------------------------------------------
import './App.css';
import Products from './Components/Products/Products';

function App() {
  return (
    <div className="App">
      <Products/>
    </div>
  );
}

export default App;
--------------------------------------------------

import axios from "axios";

export function getProductListFromAPI(){
    return axios.get("https://dummyjson.com/products");
}
--------------------------------------------------
import { useEffect } from "react";
import { getProductListFromAPI } from "../../Services/ProductService";
import { useState } from "react";
import Product from "../Product/Product";


const Products=()=>{
   
    const [products,setProducts]=useState([]);
    useEffect(()=>{
       getProductListFromAPI()
       .then((response)=>{
           setProducts(response.data.products);
       })   
    },[])
    return(
        <div>
            <h1>Products</h1>

            <ul>
                {products.map((product)=>(
                    <Product key={product.id} product={product}/>
                ))}
            </ul>
        </div>
    )
}

export default Products;

--------------------------------------------------
.card-container{
    display: flex;
    flex-wrap: wrap;
}

--------------------------------------------------
import { useEffect } from "react"

export default function Product(props) {
    useEffect(()=>{
        console.log("Product Component Mounted")
        
    })
    return (
        <div>
            <h2>{props.product.title}</h2>
        </div>
    )
}

--------------------------------------------------
.card-item{
    margin: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    width: 300px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.3s ease-in-out;
}
@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-10px);
    }
    60% {
        transform: translateY(-5px);
    }
    
}
.card-item:hover{
    animation: bounce 0.5s; 
}
----------------------------------------------------------
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



-------------------------------------------------

import "./Product.css"

export default function Product(props) {

    const clickAddToCart=()=>{
        props.onAddToCart(props.product);
    }
    return (
        <div className="card-item">
                <h3>{props.product["title"]}</h3>
                <img src={props.product["thumbnail"]} alt="product" />
                <button onClick={clickAddToCart}>Buy @ ${props.product["price"]}</button>                 
        </div>

    )
}
------------------------------------------
>npm install antd --save
------------------------------------------------

import { Button } from "antd";
import "./Product.css"

export default function Product(props) {

    const clickAddToCart=()=>{
        props.onAddToCart(props.product);
    }
    return (
        <div className="card-item">
                <h3>{props.product["title"]}</h3>
                <img src={props.product["thumbnail"]} alt="product" />
                {/* <button onClick={clickAddToCart}>Buy @ ${props.product["price"]}</button>                  */}
                <Button onClick={clickAddToCart} type="primary">Buy @ ${props.product["price"]}</Button>
        </div>

    )
}
--------------------------------------------------
npm install bootstrap --save
-------------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

-------------------------------------------------
import './App.css';
import AddProduct from './Components/AddProduct/AddProduct';
import Products from './Components/Products/Products';

function App() {
  return (
    <div className="App">
      <AddProduct/>
      <Products/>
    </div>
  );
}

export default App;

-------------------------------------------------
.product-form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    width: 50%;
}

-------------------------------------------------

import { addNewProduct } from '../../Services/ProductService';
import './AddProduct.css';
import { useState } from 'react';
const AddProduct = () => {
    const [product, setProduct] = useState(
        {title:"", price:0,quantity:0});
    const[status,setStatus]=useState(false);
    const submitHandler = (event) => {
        event.preventDefault();
        setStatus(true);
        addNewProduct(product)
        .then(response=>{
           if(response.status===201)
                alert("Product Added Successfully");
        }).catch(error=>{
            alert("Something went wrong");
        }).finally(()=>{
            setStatus(false);
            setProduct({title:"", price:0,quantity:0});
        });
    }
    const changeHandler = (event) => {
        setProduct({...product,
            [event.target.name]: event.target.value});
    }
    return(
        <div>
            <h1>Add Product</h1>
            <form className="product-form">
                <label className="form-control">Product Name</label>
                <input name="title" value={product.title}
                onChange={changeHandler}
                className="form-control" type="text" required minLength="3" />
                <label className="form-control">Product Price</label>
                <input name="price" value={product.price}
                  onChange={changeHandler}
                className="form-control" type="number" required min="1" />
                <label className="form-control">Quantity</label>
                <input name="quantity" value={product.quantity}
                  onChange={changeHandler}
                className="form-control" type="number" required min="1" />
                <button disabled={status} onClick={submitHandler} className="btn btn-success" type="submit">Add Product</button>
            </form>
        </div>
    );
};
---------------------------------------------------------
import axios from "axios";

export function getProductListFromAPI(){
    return axios.get("https://dummyjson.com/products");
}

export function addNewProduct(product){
    return axios.post("https://dummyjson.com/products/add", product);
    }
    ---------------------------------------------------
    import { addNewProduct } from '../../Services/ProductService';
import './AddProduct.css';


import { useState } from 'react';
const AddProduct = () => {
    const [product, setProduct] = useState(
        {title:"", price:0,quantity:0});

    const[status,setStatus]=useState(false);

    const[error,setError]=useState({title:" ",price:" ",quantity:" "});
    const submitHandler = (event) => {
        event.preventDefault();
        setStatus(true);
        if(error.price || error.title || error.quantity)
        {
            alert("Please fill all the details");
            setStatus(false);
            setProduct({title:"", price:0,quantity:0});
            return;
        }
        
        addNewProduct(product)
        .then(response=>{
           if(response.status===201)
                alert("Product Added Successfully");
        }).catch(error=>{
            alert("Something went wrong");
        }).finally(()=>{
            setStatus(false);
            setProduct({title:"", price:0,quantity:0});
        });
    }
    const changeHandler = (event) => {
        setProduct({...product,
            [event.target.name]: event.target.value});
    }
    const checkData = (event) => {
        if(event.target.name==="title" && event.target.value.length<3){
                setError({...error,title:"Title must be atleast 3 characters"});
            }
            else if(event.target.name==="title")
                setError({...error,title:""});
        if(event.target.name==="price" && event.target.value<1){
                setError({...error,price:"Price must be greater than 0"});
            }   
            else if(event.target.name==="price")
                setError({...error,price:""});
        if(event.target.name==="quantity" && event.target.value<1){
                setError({...error,quantity:"Quantity must be greater than 0"});
            }
            else if(event.target.name==="quantity")
                setError({...error,quantity:""});
    }
    return(
        <div>
            <h1>Add Product</h1>
            <form className="product-form">
                <label className="form-control">Product Name</label>
                <input name="title" value={product.title}
                onChange={changeHandler}
                onBlur={checkData}
                className="form-control" type="text" required minLength="3" />
                <span className="text-danger">{error.title}</span>
                <label className="form-control">Product Price</label>
                <input name="price" value={product.price}
                  onChange={changeHandler}
                  onBlur={checkData}
                className="form-control" type="number" required min="1" />
                 <span className="text-danger">{error.price}</span>
                <label className="form-control">Quantity</label>
                <input name="quantity" value={product.quantity}
                  onChange={changeHandler}
                  onBlur={checkData}
                className="form-control" type="number" required min="1" />
                 <span className="text-danger">{error.quantity}</span>
                <button disabled={status} onClick={submitHandler} className="btn btn-success" type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;
