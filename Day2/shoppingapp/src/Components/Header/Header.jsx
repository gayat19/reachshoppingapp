
import { useContext } from "react";
import { Link} from "react-router-dom";
import { UserContext } from "../../App";



export default function Header(){
//     const [username,setUserName] = useState("Guest")
// const showUser=()=>{
//     //console.log("Show User");
//     getUserDetails()
//     .then((response)=>{
//         setUserName(response.data.firstName);
//     }).catch((error)=>{
//         alert("You are yet to login")
//         console.log(error);
//         setUserName("Guest");
//     })
// }
const {user} = useContext(UserContext);
    return(
        <div>
            <h3>hello -{user}</h3>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                       <Link className="nav-link" to="/home">Home</Link>
                    </li>
                    <li className="nav-item active">
                       <Link className="nav-link" to="/shop">Shop</Link>
                    </li>
                    <li className="nav-item active">
                       <Link className="nav-link" to="/cart">Cart</Link>
                    </li>
                    <li className="nav-item active">
                       <Link className="nav-link" to="/home/list">List</Link>
                    </li>
                    <li className="nav-item active">
                       <Link className="nav-link" to="/products">Products</Link>
                    </li>
                    <li className="nav-item">
                     <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                     <Link className="nav-link" to="/addprod">Add Product</Link>
                    </li>
                </ul>
            </div>
            </nav>
        </div>
    )
}