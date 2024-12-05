import { Outlet, useNavigate } from "react-router-dom";

export default function ProductList(){
    const products =["Mobile","Laptop","Tablet","Camera","Television"];
    const navigate = useNavigate();
    const goToAnother=(product)=>{
        console.log("Navigating to product details of "+product);   
        navigate('/home/list/details/'+product);
    }
    return(
      
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map((product,index)=>(<button onClick={()=>goToAnother(product)} key={index}>{product}</button>))}
            </ul>
            <Outlet/>
        </div>
    )
}