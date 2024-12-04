import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './Components/AddProduct/AddProduct';
import Header  from './Components/Header/Header';
import Login from './Components/Login/Login';
import Products from './Components/Products/Products';
import Home from './Components/Home/Home';
import { ProtectedRoute } from './ProtectedRoute';

function App() {
  return (
    <div className="App">
      <div className='content'>
          <BrowserRouter>
              <Header/>

            <Routes>
              <Route path="/home" element={<Home/>}>
                  <Route path='child' element={<Login/>}/>
              </Route> 
              <Route path="/login" element={<Login/>}/>
              <Route path="/products" element={<Products/>}/>
              <Route path='/addprod'  element=
               { <ProtectedRoute child={<AddProduct/>}/>}/>
              
            </Routes>
          </BrowserRouter>
      </div>
        </div>
  );
}

export default App;
