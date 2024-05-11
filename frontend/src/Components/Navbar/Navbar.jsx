import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/image_4-removebg-preview 2.png'
import cart_icon from '../Assets/cart.png'
import { Link } from 'react-router-dom'
import { HomeContext } from '../../Context/HomeContext'
import drop_down_icon from '../Assets/drop-down_icon.png'

const Navbar = () => {

    const [menu,setMenu] = useState("Home");
    const {getTotalCartItems} =useContext(HomeContext);
    const menuRef = useRef()

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt='' />
            {/* <p>TIRTH GOLD</p> */}
        </div>
        <img className='nav-dropdown' onClick={dropdown_toggle} src={drop_down_icon} alt="" />
        <ul ref={menuRef} className='nav-menu'>
            <li onClick={() =>{setMenu("Home")}}><Link style={{ textDecoration: 'none', color: 'black'}} to='/'>Home</Link>{menu==="Home"?<hr/>:<></>}</li>
            <li onClick={() =>{setMenu("mens")}}><Link style={{ textDecoration: 'none', color: 'black'}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={() =>{setMenu("womens")}}><Link style={{ textDecoration: 'none', color: 'black'}} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={() =>{setMenu("abouts")}}><Link style={{ textDecoration: 'none', color: 'black'}} to='/abouts'>About Us</Link>{menu==="abouts"?<hr/>:<></>}</li>
            <li onClick={() =>{setMenu("contacts")}}><Link style={{ textDecoration: 'none', color: 'black'}} to='/contacts'>Contact</Link>{menu==="contacts"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
            {localStorage.getItem('auth-token')
            ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
            :<Link to='/login'><button>Login</button></Link>}
            <Link to='/cart'><img src={cart_icon} alt='' /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar
