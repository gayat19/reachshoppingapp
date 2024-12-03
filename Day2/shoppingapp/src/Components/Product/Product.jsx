
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