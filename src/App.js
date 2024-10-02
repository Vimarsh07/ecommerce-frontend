
import './App.css';
import Navbar from './Components/Navbar/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import ProductCategory from './Pages/ProductCategory';
import Products from './Pages/Products';
import Account from './Pages/Account';
import LoginSign from './Pages/LoginSign';
import Holiday from './Pages/Holiday';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div> 

      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/account' element={<Account/>} />
        <Route path='/holiday' element={<Holiday/>} />
        <Route path ='/products/Cookies and Snacks' element={<ProductCategory category ="Cookies and Snacks"/>} />
        <Route path='/products/Chocolates and Jams' element={<ProductCategory category ="Chocolates and Jams"/>} />
        <Route path='/products/Beverages' element={<ProductCategory category ="Beverages"/>} />
        <Route path='/products/Oils and Vinegar' element={<ProductCategory category ="Oils and Vinegar"/>} />
        <Route path='/products/Condiments' element={<ProductCategory category ="Condiments"/>} />
        <Route path='/products/Pastas' element={<ProductCategory category ="Pastas"/>} />
        <Route path="/products" element={<Products/>}>
          <Route path=':productId' element={<Products/>} />
        </Route>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/loginsign' element={<LoginSign/>} />
        
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
