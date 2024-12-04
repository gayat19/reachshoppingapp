import { useState } from "react"
import { getUserDetails } from "../../Services/UserService"

export function Header(){
    const [username,setUserName] = useState("Guest")
const showUser=()=>{
    //console.log("Show User");
    getUserDetails()
    .then((response)=>{
        setUserName(response.data.firstName);
    }).catch((error)=>{
        alert("You are yet to login")
        console.log(error);
        setUserName("Guest");
    })
}
    return(
        <div>
            <button onClick={showUser}>Show</button>
            <h1>Hello - {username}</h1>
        </div>
    )
}