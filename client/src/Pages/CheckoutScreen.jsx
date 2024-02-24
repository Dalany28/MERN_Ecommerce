import React from 'react'
import './CheckoutScreen.css'
import Checkout from '../Components/Checkout'
import Footer from '../Components/Footer'
import { useEffect } from 'react'

const CheckoutScreen = () => {
  useEffect(() => {
    document.title = 'Checkout'; 
  }, []);

  return (
    <div>
      <Checkout />
      <Footer />
    </div>
  )
}

export default Checkout
