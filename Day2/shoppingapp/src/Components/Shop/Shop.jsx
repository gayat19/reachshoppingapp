import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../productSlice";

export default function Shop(){
    const dispatch = useDispatch();
    const [items,setItems] =useState( [
        {
            id:1,name:'pencil',quantity:2
        },
        {
            id:2,name:'pen',quantity:1
        },
        {
            id:3,name:'book',quantity:5
        }

    ])
   const cartAdd=(item)=>{
    item.quantity = 1;
    dispatch(addProduct(item))
    }
    return (
        <div>
            <h1>Shop</h1>
            <div>
                {
                    items.length===0?<h3>No items to display</h3>:
                    items.map((item)=>(
                        <div key={item.id}>
                            <h3>{item.name}</h3>
                            <h3>{item.quantity}</h3>
                            <button onClick={()=>cartAdd(item)}>Add to cart</button>
                        </div>))
                }
            </div>
        </div>
    );
}