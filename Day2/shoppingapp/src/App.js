import './App.css';
import AddProduct from './Components/AddProduct/AddProduct';
import { Header } from './Components/Header/Header';
import Login from './Components/Login/Login';
import Products from './Components/Products/Products';

function App() {
  return (
    <div className="App">
      <Header/>
      <Login/>
    </div>
  );
}

export default App;
