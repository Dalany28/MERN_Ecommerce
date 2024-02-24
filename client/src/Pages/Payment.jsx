import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../Components/CheckoutForm';
import './Payment.css';
import CartItem from '../Components/CartItem'

const Payment = () => {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState('');
  const [error, setError] = useState(null);

  const cartItems = useSelector(state => state.cart.cartItems);
  
  useEffect(() => {
    fetch('/config')
      .then(async (response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch configuration');
        }
        const { publishableKey } = await response.json();
        setStripePromise(loadStripe(publishableKey));
      })
      .catch(error => {
        console.error('Error fetching configuration:', error);
        setError(error.message);
      });
  }, []);

  useEffect(() => {
    const totalAmountInCents = Math.round(cartItems.reduce((total, item) => total + (item.price * item.qty), 0) * 100);
    fetch('/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ amount: totalAmountInCents, currency: 'USD' }) // You may adjust the amount and currency as needed
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch client secret');
        }
        const { clientSecret } = await response.json();
        setClientSecret(clientSecret);
      })
      .catch(error => {
        console.error('Error fetching client secret:', error);
        setError(error.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {stripePromise && clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default Payment;
