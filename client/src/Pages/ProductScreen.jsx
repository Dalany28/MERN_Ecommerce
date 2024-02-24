import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import { useDispatch, useSelector } from 'react-redux';
import './ProductScreen.css';
import { getProductDetails } from '../redux/actions/productAction';
import { addToCart } from '../redux/actions/cartAction';

const ProductScreen = () => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Use useNavigate hook
  const { id } = useParams();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (product && product.name) {
      document.title = `${product.name} - Product`;
    } else {
      document.title = 'Product';
    }
  }, [product]);


  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    // Use navigate to navigate programmatically
    navigate("/cart");
  }


  return (
    <div className='productscreen' >
      {loading ? 
      (
      <h2>Loading...</h2> 
      ) : error ? (<h2>{error}</h2>) : (
        <>
        <div className="productscreen__left">
        <div className="left__image">
          <img src={product.imageUrl} alt={product.name} />
        </div>
        <div className="left__info">
          <p className="left__name">{product.name}</p>
          <p className="left__price">Price: ${product.price}</p>
          <p className="left__des">Description: {product.description}</p>
        </div>
      </div>
      <div className="productscreen__right">
        <div className="right__info">
          <p>
            Price: <span>${product.price}</span>
          </p>
          <p>
            Status: <span>{product.countInStock > 0 ? "In Stock" : "Out of Stock"}</span>
          </p>
          <p className='quantity'>
            Quantity
            <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
          </p>
          <p>
            <button type='button' onClick={addToCartHandler}>Add To Cart</button>
          </p>
        </div>
      </div>
        </>
      )}
    </div>
  );
};

export default ProductScreen;
