import React from 'react'
import './Checkout.css'
import { useNavigate } from 'react-router-dom';

const Checkout = () => {

    const navigate =  useNavigate();

    const handlePayNow = () => {
      // Navigate to the payment page
      navigate('/payment');
    };
  
  return (
    <div className='checkout'>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
       <script src="https://kit.fontawesome.com/2d95ff6af1.js" crossorigin="anonymous"></script>
      <div className="contact">
        <h2>Contact</h2>
        <input type="email" placeholder='Email' />
      </div>
      <div className="delivery">
        <h2>Delivery</h2>
        <select>
         
            <option value="value1">Hungary</option>
            <option value="value2" selected>Laos</option>
            <option value="value3">Thailand</option>
        </select>
        <div className="name">
            <input className='firstname' type="text" placeholder='First name (optional)' />
            <input className='lastname' type="text" placeholder='Last name' required/>
        </div>
        <div className="address">
            <input type="text"  placeholder='Address'/>
        </div>

        <div className="detailed__address">
            <input type="text" placeholder='City'/>
            <input type="text" placeholder='Province'/>
            <input type="text" placeholder='Postal code'/>
        </div>
        <div className="phone">
            <input type="text" placeholder='Phone'/>
        </div>


        <div className="shipping">
            <h3>Shipping method</h3>
            <p>Enter your shipping address to view available methods</p>
        </div>
        <hr />

        <div className="payment">
            <h2>Payment</h2>
            <p>All transactions are secured and encrypted</p>
            <div className="payment__box">
                <div className="header__box">
                    <div className="top">
                    <div className="payment__name">
                    <p>Opn Payments</p>
                    </div>
                    <div className="bank">
                    <i class="fa-brands fa-cc-visa"></i>
                    <i class="fa-brands fa-cc-mastercard"></i>
                    <i class="fa-brands fa-cc-paypal"></i>
                    <i class="fa-brands fa-cc-apple-pay"></i><i class="fa-brands fa-cc-jcb"></i>
                    </div>
                    </div>
                    <div className="card">
                    <i class="fa-regular fa-credit-card"></i>
                    <p>After clicking “Pay now”, you will be redirected to Opn Payments to complete your purchase securely.</p>
                    </div>
                </div>
            </div>
        </div>

  
  <button onClick={handlePayNow}>Pay now</button>

      </div>
    </div>
  )
}

export default Checkout
