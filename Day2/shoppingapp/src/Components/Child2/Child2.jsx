import React from "react";
function Child2(){
    console.log("Child2 loded")
    return(<div>
        <h1>Child2</h1>
    </div>);
}
export default React.memo(Child2);