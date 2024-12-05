import { useEffect,useState } from "react";

import { useParams } from "react-router-dom";

export default function ProductDetails() {
    var param = useParams();
    const [product,setProduct] = useState(param.pname);
    useEffect(() => {
        setProduct(param.pname);
    },[param]);
    return (
        <div>
        <h1>Product Details - {product}</h1>
        </div>
    );
}