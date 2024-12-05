import { Outlet } from "react-router-dom";
import { useState,useContext } from "react";
import { UserContext } from "../../App";

export default function Home(){
    const [name,setName] = useState();
    const {setUser} = useContext(UserContext);
    return(
        <div>
            <h1>Home</h1>
            <input type="text"
            onChange={(e)=>setName(e.target.value)}
             placeholder="Enter your name"/>
             <button onClick={()=>setUser(name)}>Submit</button>
            <Outlet/>
        </div>
    )
}