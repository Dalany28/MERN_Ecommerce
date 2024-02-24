import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './HomeScreen.css';
import Product from '../Components/Products';
import Backdrop from '../Components/Backdrop';
import Footer from '../Components/Footer'
import { getProducts as listProducts } from "../redux/actions/productAction";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector(state => state.getProducts);
  const { products, loading, error } = productList;

  useEffect(() => {
    document.title = 'Home - DALA Store'; // Set the title to "Home Page"
  }, []);
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <Backdrop />
      <div className='homescreen'>
      <h1>Our New Collections</h1>
        <div className="homescreen_products" >

          {loading ? (
            <h2>Loading...</h2>
          ) : error ? (
            <h2>{error}</h2>
          ) : (
            products.map(product => (
              <Product 
              key={product._id} 
              productId={product._id}
              name={product.name}
              price={product.price}
              description={product.description}
              imageUrl={product.imageUrl}
              />

            ))
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomeScreen;
