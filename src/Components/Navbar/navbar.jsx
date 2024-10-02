import React, {useContext} from "react";
import './Navbar.css';
import nastasilogo from '../Assets/nastasilogo.jpg';
import cart_icon from '../Assets/cart_icon.png';
import { useState } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../Context/ProductContext";
import SearchBar from "../SearchBar/SearchBar";


const Navbar = () => {
    const [menu, setMenu] = useState("Home");
    const {getTotalCartItems} = useContext(ProductContext);
    

    // Add a new state variable to control the dropdown menu visibility
    const [dropdown, setDropdown] = useState(false);

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src = {nastasilogo} alt="" />
                <p>Nastasi Foods</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("Home")}}><Link style = {{textDecoration:'none'}} to='/'>Home</Link>{menu ==="Home"?<hr/>:<></>}</li>
                <li onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}  >
                    <Link style = {{textDecoration:'none'}} to ='/products'>Products</Link>{menu ==="Products"?<hr/>:<></>}
                    {/* Use the dropdown state variable to conditionally render the dropdown menu*/}
                    {dropdown && (
                        <ul className="dropdown">
                            
                            <li onClick = {()=>{setMenu("Products")}}><Link style = {{textDecoration:'none'}} to ='/products/Cookies and Snacks'>Cookies and Snacks</Link></li>
                            <li onClick = {()=>{setMenu("Products")}}><Link style = {{textDecoration:'none'}} to ='/products/Chocolates and Jams'>Chocolates and Jams</Link></li>
                            <li onClick = {()=>{setMenu("Products")}}><Link style = {{textDecoration:'none'}} to ='/products/Beverages'>Beverages</Link></li>
                            <li onClick = {()=>{setMenu("Products")}}><Link style = {{textDecoration:'none'}} to ='/products/Oils and Vinegar'>Oils and Vinegar</Link></li>
                            <li onClick = {()=>{setMenu("Products")}}><Link style = {{textDecoration:'none'}} to ='/products/Condiments'>Condiments</Link></li>
                            <li onClick = {()=>{setMenu("Products")}}><Link style = {{textDecoration:'none'}} to ='/products/Pastas'>Pastas</Link></li>
                        </ul>
                    )}
                    
                </li>
                <li onClick={()=>{setMenu("Holiday")}}><Link style = {{textDecoration:'none'}} to ='/holiday'>Holiday</Link>{menu ==="Holiday"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Account")}}><Link style = {{textDecoration:'none'}} to ='/account'>Account</Link>{menu ==="Account"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                {localStorage.getItem('auth-token')?<button onClick = {() => {localStorage.removeItem('auth-token');window.location.reload()}}>
                    Logout
                </button>: 
                <Link to = '/loginsign'><button>Login</button></Link>}
                
                <Link to = '/cart'><img src = {cart_icon} alt="" /> </Link>
                <div className="cart-count">{getTotalCartItems()}</div>
            </div>
        <SearchBar/>
        </div>
    )
}

export default Navbar;