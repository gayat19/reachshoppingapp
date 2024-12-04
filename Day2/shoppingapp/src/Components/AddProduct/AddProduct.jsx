import { useNavigate } from 'react-router';
import { addNewProduct } from '../../Services/ProductService';
import './AddProduct.css';


import { useState } from 'react';
const AddProduct = () => {
    const [product, setProduct] = useState(
        {title:"", price:0,quantity:0});

    const[status,setStatus]=useState(false);

    const[error,setError]=useState({title:" ",price:" ",quantity:" "});
    const navigate = useNavigate();

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
            navigate('/products');
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
            <button onClick={()=>navigate('/products')} className="btn btn-primary">Back</button>
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