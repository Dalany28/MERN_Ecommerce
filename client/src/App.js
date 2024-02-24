import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Pages
import HomeScreen from './Pages/HomeSreen';
import ProductScreen from './Pages/ProductScreen';
import CartScreen from './Pages/CartScreen';
import CheckoutScreen from './Pages/CheckoutScreen';
import Navbar from './Components/Navbar';
import Success from './Pages/Success';
import Cancel from './Pages/Cancel';
import Payment from './Pages/Payment';

// Load Stripe
const stripePromise = loadStripe("pk_test_51OmuCmJka7OxYuAZHmNjEVjVtevwlL7WmXKDTuRRtHQVw6qELCBBQxJpIAlOuHA0AZf0aOZPeMBRebcHIZ7lrZFJ005g7AMMFy");

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route exact path="/product/:id" element={<ProductScreen />} />
            <Route exact path="/cart" element={<CartScreen />} />
            <Route exact path="/checkout" element={<CheckoutScreen />} />
            <Route exact path="/payment-success" element={<Success />} />
            <Route exact path="/payment-cancel" element={<Cancel />} />
            <Route exact path="/payment" element={<Elements stripe={stripePromise}><Payment /></Elements>} />
          </Routes>
        </main>

      </div>
    </Router>
  );
}

export default App;
