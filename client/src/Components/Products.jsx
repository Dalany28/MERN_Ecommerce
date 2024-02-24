import React from 'react'
import './Products.css'
import {Link} from 'react-router-dom'

const Products = ({imageUrl, name, price, description, productId}) => {
  return (
    <div className='products'>
      <Link className="link-style" to={`/product/${productId}` }>
        <img src={imageUrl} alt={name} />
      </Link>
      <div className="products__info">
        <p className="info__name">{name}</p>
        <p className="info__description">{description.substring(0,50)}...</p>
        <p className='info__price'>${price}.00</p>
        
        {/* <Link to={`/product/${productId}`} className="info__button">View</Link> */}
      </div>

    </div>
  )
}

export default Products
