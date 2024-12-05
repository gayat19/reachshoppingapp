
import { Navigate } from "react-router-dom";

export function ProtectedRoute({child}){

    const isAuthenticated = sessionStorage.getItem("token")?true:false;
    if(isAuthenticated){
        return(
            child
        );
    }
    else
    {
        return(
            <Navigate to="/login" replace={true}/>
        )
    }
}