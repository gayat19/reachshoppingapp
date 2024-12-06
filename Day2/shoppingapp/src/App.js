import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './Components/AddProduct/AddProduct';
import Header  from './Components/Header/Header';
import Login from './Components/Login/Login';
import Products from './Components/Products/Products';
import Home from './Components/Home/Home';
import { ProtectedRoute } from './ProtectedRoute';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import ProductList from './Components/ProductList/ProductList';
import { createContext,useState } from 'react';
import Shop from './Components/Shop/Shop';

import Cart from './Components/Cart/Cart';
import Default from './Components/Default/Default';
import PriceUpdate from './Components/PriceUpdate/PriceUpdate';
import ChangePrice from './Components/ChangePrice/ChangePrice';
import ShoppingSearch from './Components/ShoppingSearch/ShoppingSearch';

export const UserContext = createContext();
function App() {
  //const [user,setUser] = useState();
  return (
    <div className="App">
      <ShoppingSearch/>
      {/* <ChangePrice/> */}
      {/* <PriceUpdate/> */}
      {/* <UserContext.Provider value={{user,setUser}}>
      <div className='content'>
      <h2>
        Welcome to the Shopping App - {user}
      </h2>
          <BrowserRouter>
              <Header/>


            <Routes>
              <Route path="/" element={<Default/>}/>
              <Route path="/home" element={<Home/>}>
              <Route path='list' element={<ProductList/>}>
                <Route path='/home/list/details/:pname' element={<ProductDetails/>}/>
              </Route>
              </Route> 
              <Route path="/login" element={<Login/>}/>
              <Route path="/shop" element={<Shop/>}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path="/products" element={<Products/>}/>
              <Route path='/addprod'  element=
               { <ProtectedRoute child={<AddProduct/>}/>}/>
              
            </Routes>
          </BrowserRouter>
      </div>
      </UserContext.Provider> */}
        </div>
  );
}

export default App;
