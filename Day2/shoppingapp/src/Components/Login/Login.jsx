import { Input,Button } from 'antd';
import { useState } from 'react';
import './Login.css';
import { authenticateUser } from '../../Services/AuthenticationService';    

export default function Login(){
    const [user,setUser] = useState({email:"",password:""});

    const onChangeHandler = (event) => {
        setUser({...user,[event.target.name]:event.target.value});
    }
    const loginHandler =async()=>{
       var data =await authenticateUser(user);
       sessionStorage.setItem('token',data.data.accessToken);
    }
    return(
        <div>
            <h1>Login</h1>
            <form className='Login-Form'>
                <label className="form-control">Email</label>
                <Input name="username" onChange={onChangeHandler} placeholder='username'  type="text" required />
                <label className="form-control">Password</label>
                <Input name="password" onChange={onChangeHandler}  type="password" required />
                <Button type="primary" onClick={loginHandler}>Login</Button>
            </form>
        </div>
    );
}