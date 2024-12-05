
import { useSelector } from "react-redux";

export default function Cart(){

    const cartItems = useSelector((state)=>state.products);
    return (
        <div>
            <h1>Cart</h1>
            {
                cartItems.length===0?<h3>No items in the cart</h3>:
                cartItems.map(
                    (item)=>(
                        <div key={item.id}>
                            <h3>{item.name}</h3>
                            <h3>{item.quantity}</h3>
                        </div>)
                )
            }
        </div>
    );
}