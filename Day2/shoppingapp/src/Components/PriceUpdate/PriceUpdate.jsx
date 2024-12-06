import { useEffect, useState } from "react";
import { Observable } from "rxjs";

export default function PriceUpdate(){
const [count,setCount] = useState(0);
useEffect(()=>{
    const myObservable = new Observable((sub)=>{
        let count =0;
        const interval = setInterval(()=>{
            sub.next(count);
            count++

            if(count>10)
                sub.complete();
        },1000);
        return ()=>{
            clearInterval(interval);
            console.log("done")
        };
    });
    const mySubscription = myObservable.subscribe({
        next:(data)=>setCount(data),
        complete:()=>console.log("Subscription complete")
    });

    return ()=>mySubscription.unsubscribe();

},[])
    return(<div>counter value -{count}</div>);
}