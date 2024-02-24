import React from 'react'
import './Success.css'
import { useNavigate } from 'react-router-dom'

const Success = () => {

  const navigate = useNavigate()

  const handleBackHome = () => {
    navigate('/')
  }

  return (
    <div className='success'>
      <div className="first__cir">
      <div className="main__text">
        <h3>Payment Successful!</h3>
        <p>Thank you for your purchase</p>
        </div>
        <div className="icon__tick">
        <i class="fa-regular fa-circle-check"></i>
        </div>
      <div className="home__btn">
      <button onClick={handleBackHome}>Home</button>
      </div>
      </div>
      
    </div>
    
  )
}

export default Success
