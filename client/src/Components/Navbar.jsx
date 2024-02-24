import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Navbar = () => {

  const cart = useSelector(state => state.cart)
  const {cartItems } = cart;

  const getCartCount = () =>{
    return cartItems.reduce((qty, item) => qty + Number(item.qty), 0)
  }

  return (
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
       <script src="https://kit.fontawesome.com/2d95ff6af1.js" crossorigin="anonymous"></script>

       <header>   
         <nav  id="home">
        <div class="nav-left">
                <div class="logo"><Link to='/'>DALA</Link></div>
        </div>

            <div class="nav-right">
                <ul>
                    <li>
                      <Link to='/cart'>
                        <div className="cart">
                        <i class="fa-solid fa-bag-shopping"></i>
                        <span className='cartlogo_badge'>{getCartCount()}</span>
                        </div>
                        </Link>
                    </li>
                    
                </ul>
            
            </div>

          
           <div className="hamburger__menu">
            <div></div>
            <div></div>
            <div></div>
           </div>
        </nav>
    </header>
    </div>
  )
}

export default Navbar
