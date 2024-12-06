import { useState } from "react";
import Child1 from "../Child1/Child1";
import Child2 from "../Child2/Child2";

export default function Default(){
    const [name,setName] = useState(1);
    console.log("default loded")
    return(<div>
        <h1>Default - {name}</h1>
        <button onClick={()=>setName(i=>i+1)}>Change</button>
        <Child1/>
        <Child2/>
    </div>);
}