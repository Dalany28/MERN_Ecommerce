import React, { useEffect } from 'react'
import CartItem from '../Components/CartItem'
import './CartScreen.css'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {loadStripe} from '@stripe/stripe-js'
import {addToCart, removeFromCart} from '../redux/actions/cartAction'

//Actions Import


const CartScreen = () => {

  useEffect(() => {
    document.title = 'Your Shopping Cart - DALA Store'; // Set the title to "Home Page"
  }, []);

  const dispatch = useDispatch()

  const cart = useSelector(state => state.cart)

  const {cartItems} = cart

  const qtyChangeHandler = (id, qty) => {
      dispatch(addToCart(id, qty))
  }

  const removeHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };

  


  
  return (
    <div className='cartscreen'>
      <div className="cartscreen__left">
          <h1>Basket</h1>

          {cartItems.length === 0 ? (
            <div>
              Your Cart Is Empty <Link to="/">Go Back</Link>
            </div>
          ) : (
            
            cartItems.map((item) => (
              <CartItem item={item} qtyChangeHandler={qtyChangeHandler} removeHandler={removeHandler}/>
            ))
          )}
      </div>
      <div className="cartscreen__right">
        <div className="cartscreen__info">
        <p>Subtotal ({getCartCount()}) items</p>
          <p>Delivery: Free shipping</p>
          <p className="altogether">Altogether: ${getCartSubTotal()}</p>
        </div>
        <div className="btn">
        <Link to={`/checkout`} ><button>Proceed To Checkout</button></Link>
          
        </div>
        <div className="cartsreen__payment">
          <p>We accept:</p>
          <div className="payment__brand">
          <svg class="PaymentList-module--paymentIcon__watw3" viewBox="0 0 50 40" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="maestro-logo"><title id="maestro-logo">Maestro</title><path fill-rule="evenodd" d="M30.858 32.2612h-1.1353v1.4247c0 .3306.1138.529.4621.529a1.2996 1.2996 0 0 0 .6163-.1785l.2009.5884a1.6509 1.6509 0 0 1-.8707.2446c-.8239 0-1.1119-.4363-1.1119-1.1702v-1.438h-.6497v-.6281h.6497v-.9587h.7033v.9587h1.1353v.6281Zm5.4891-.5753a1.824 1.824 0 0 0-.6698-.1256l-.0067-.0099a1.8218 1.8218 0 0 0-.6966.1355 1.658 1.658 0 0 0-.5426.3505 1.61 1.61 0 0 0-.3583.5256 1.7336 1.7336 0 0 0 0 1.3223 1.61 1.61 0 0 0 .3583.5256c.1557.151.3401.2701.5426.3504a1.9185 1.9185 0 0 0 1.3731 0 1.6747 1.6747 0 0 0 .5458-.3504 1.593 1.593 0 0 0 .3617-.5256 1.7308 1.7308 0 0 0 0-1.3223 1.597 1.597 0 0 0-.3617-.5256 1.6766 1.6766 0 0 0-.5458-.3505Zm-19.4713 1.1207v1.9835h-.7v-1.7554c0-.5355-.2277-.833-.7033-.833a.7585.7585 0 0 0-.5907.2389.7374.7374 0 0 0-.1929.6007v1.7488h-.7033v-1.7554c0-.5355-.2345-.833-.6966-.833a.7514.7514 0 0 0-.5936.2364.7306.7306 0 0 0-.1901.6032v1.7488h-.7033v-3.157h.6966v.39c.2062-.3095.5629-.4881.9377-.4694.4305-.0182.8365.1974 1.0583.562.2433-.3758.6745-.5912 1.1253-.562a1.1978 1.1978 0 0 1 .915.3461 1.165 1.165 0 0 1 .3409.9068Zm3.9184-1.1702v1.5768l-.0067 1.5703h-.6966V34.4c-.2397.3052-.6138.4776-1.0048.4628-.9248 0-1.6745-.74-1.6745-1.6529s.7497-1.6529 1.6745-1.6529c.391-.0148.7651.1576 1.0048.4628v-.3834h.7033Zm-2.5888 1.5768c.0309-.5188.4763-.918 1.0024-.8985.5262.0195.94.4506.9315.9702-.0085.5196-.4363.9372-.9627.9399a.9643.9643 0 0 1-.7154-.2925.9377.9377 0 0 1-.2625-.7191h.0067Zm17.4718-.9917a1.052 1.052 0 0 0-.3985.0727.9424.9424 0 0 0-.3181.2083.9655.9655 0 0 0-.211.3306 1.1333 1.1333 0 0 0 0 .8198.9625.9625 0 0 0 .211.3306.9372.9372 0 0 0 .3181.2082c.2552.0987.5386.0987.7937 0a.9583.9583 0 0 0 .3349-.2082.9577.9577 0 0 0 .211-.3306 1.1333 1.1333 0 0 0 0-.8198.9559.9559 0 0 0-.211-.3306.96.96 0 0 0-.3349-.2083 1.049 1.049 0 0 0-.4018-.0925l.0066.0198Zm-12.6158-.6612c.8942 0 1.5172.6612 1.5172 1.6529 0 .0926 0 .1752-.0101.2579H22.194c.0545.4713.4791.8142.9579.7735a1.536 1.536 0 0 0 .931-.3306l.3349.5091a1.9585 1.9585 0 0 1-1.3095.443c-.9248.0128-1.685-.7169-1.6979-1.6297-.013-.9129.7262-1.6633 1.651-1.6761Zm-.864 1.3752c.0269-.4361.3981-.7733.8406-.7636a.7997.7997 0 0 1 .5662.2177.779.779 0 0 1 .2443.5492l-1.6511-.0033Zm4.3069-.7669a2.0797 2.0797 0 0 1 1.0047.2711l.3114-.5554a2.4154 2.4154 0 0 0-1.3028-.3306c-.8171 0-1.3396.3835-1.3396 1.0116 0 .5157.3885.833 1.1052.9322l.3349.0463c.3818.0529.5627.1521.5627.3306 0 .2446-.2546.3834-.7301.3834a1.7197 1.7197 0 0 1-1.065-.3305l-.3349.5355a2.3285 2.3285 0 0 0 1.3831.4099c.921 0 1.4569-.476 1.4569-1.0314 0-.5554-.422-.8463-1.1186-.9454l-.3349-.0463c-.3014-.0397-.5426-.0794-.5426-.3108 0-.2314.2278-.3702.6096-.3702Zm7.2573-.5289a1.5046 1.5046 0 0 0-.4957-.086l.0134.0132c-.3459-.01-.6698.1676-.8439.4628v-.3834h-.6899v3.157h.6966v-1.7686c0-.5223.2143-.8132.6698-.8132a1.145 1.145 0 0 1 .4354.0793l.2143-.6611Zm4.3203 2.6909a.3373.3373 0 0 1 .1272.0231.3344.3344 0 0 1 .1038.0661.331.331 0 0 1 .0704.0992.3044.3044 0 0 1 0 .2446.3297.3297 0 0 1-.0704.0992.3344.3344 0 0 1-.1038.0661.318.318 0 0 1-.1272.0265.3355.3355 0 0 1-.3015-.1918.3077.3077 0 0 1 0-.2446.331.331 0 0 1 .0704-.0992.3344.3344 0 0 1 .1038-.0661.3397.3397 0 0 1 .1105-.0231h.0168Zm.0971.5388a.2401.2401 0 0 1-.0971.0199v-.0133a.2494.2494 0 0 1-.1775-.0727.2422.2422 0 0 1 0-.3306.2445.2445 0 0 1 .0803-.0529.2554.2554 0 0 1 .0972-.0198.2455.2455 0 0 1 .2416.1981.2424.2424 0 0 1-.0675.2184.2507.2507 0 0 1-.077.0529Zm-.0771-.3735a.135.135 0 0 1 .0871.0264.0824.0824 0 0 1 .0302.0694.0791.0791 0 0 1-.0235.0595.1183.1183 0 0 1-.0703.0298l.0971.1091h-.077l-.0904-.1091h-.0302v.1091h-.0636v-.3042l.1406.01Zm-.0736.1355v-.0793l.0736.0198a.0705.0705 0 0 1 .0402 0 .0324.0324 0 0 1 0 .0297.0326.0326 0 0 1 0 .0298.0705.0705 0 0 1-.0402 0h-.0736Z" fill="#000"></path><path fill="#7673C0" d="M19.304 7.5471h10.5494v18.7141H19.304z"></path><path d="M19.9737 16.9058c-.004-3.6524 1.6942-7.1036 4.6049-9.3587C19.6354 3.7124 12.5367 4.271 8.2713 8.8302a11.7882 11.7882 0 0 0 0 16.1478c4.2654 4.5593 11.3641 5.1178 16.3073 1.2832-2.9098-2.2544-4.6078-5.7042-4.6049-9.3554Z" fill="#EB001B"></path><path d="M44.3821 23.8149v1.6203l-.1449.0116V24.22l-.2173 1.0532h-.1505l-.2173-1.0532v1.2152h-.1449v-1.6203h.2062l.234 1.1574.2341-1.1574h.2006Zm-1.2873.3241v1.2962l-.1393.0463V24.139h-.2619v-.2778h.6631v.2778h-.2619Z" fill="#00A1DF"></path><path d="M44.0834 16.9058c-.0011 4.5552-2.6364 8.7102-6.7872 10.7011s-9.0887 1.4684-12.7176-1.3457c2.9085-2.2563 4.6067-5.7056 4.6067-9.3571 0-3.6514-1.6982-7.1007-4.6067-9.357 3.6289-2.8162 8.5682-3.3399 12.7202-1.3487 4.152 1.9911 6.7878 6.1476 6.7879 10.7041l-.0033.0033Z" fill="#00A1DF"></path></svg>
          <svg class="PaymentList-module--paymentIcon__watw3" viewBox="0 0 65 40" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="mastercard-logo"><title id="mastercard-logo">Mastercard</title><path d="M52.6927 27.9936v.5397h-.0896v-.5397h-.1632v-.1099h.416v.1099h-.1632Zm.8072-.1109v.6506h-.0896v-.4917l-.1376.4245h-.0936l-.1376-.4234v.4906h-.0904v-.6506h.128l.1464.4469.1472-.4469h.1272Z" fill="#F79410"></path><path d="M38.0333 30.1333h-11.2V9.8667h11.2v20.2666Z" fill="#FF5F00"></path><path d="M27.4259 20c0-4.1808 1.9488-7.905 4.9835-10.305-2.2192-1.755-5.0201-2.8025-8.064-2.8025-7.2061 0-13.0475 5.8683-13.0475 13.1075s5.8414 13.1075 13.0475 13.1075c3.0439 0 5.8448-1.0475 8.064-2.8025-3.0347-2.4-4.9835-6.1242-4.9835-10.305Z" fill="#EB001B"></path><path d="M54.0333 20c0 7.2392-5.9217 13.1075-13.2268 13.1075-3.0858 0-5.9251-1.0475-8.1756-2.8025 3.0773-2.4 5.0528-6.1242 5.0528-10.305s-1.9755-7.905-5.0528-10.305c2.2505-1.755 5.0898-2.8025 8.1756-2.8025 7.3051 0 13.2268 5.8683 13.2268 13.1075Z" fill="#F79E1B"></path></svg>
          <svg class="PaymentList-module--paymentIcon__watw3 PaymentList-module--iconXSmall__1KtKu" viewBox="0 0 50 17" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="visadefault-logo"><title id="visadefault-logo">Visa</title><path fill-rule="evenodd" d="M35.7181 11.1528c.0103-2.54543-2.0322-3.65181-3.6664-4.537-1.0971-.5943-2.0102-1.0889-1.9944-1.85236.0122-.57843.5469-1.19341 1.7138-1.35065.579-.07822 2.1741-.13789 3.9845.72142l.7097-3.418162C35.4913.349423 34.2405 0 32.6842 0c-3.9936 0-6.8041 2.19115-6.8278 5.3287-.026 2.32071 2.0053 3.61572 3.5366 4.38687 1.5747.78973 2.1031 1.29713 2.0971 2.00353-.0112 1.0816-1.2557 1.559-2.4193 1.5775-1.9668.0312-3.1333-.5297-4.0583-.9745l-.0902-.0434-.7323 3.5316c.944.447 2.6865.837 4.4933.8564 4.2449 0 7.0213-2.1638 7.0343-5.5153l.0005.0014ZM18.9836.295667 12.437 16.4148H8.1661L4.94466 3.54987c-.19558-.79239-.36459-1.08241-.96018-1.41624C3.01336 1.58961 1.40967 1.07972 0 .762818L.094534.295667H6.96971c.87633 0 1.66411.602351 1.86307 1.643903l1.70132 9.32693L14.7387.295667h4.2449ZM50 16.4148h-3.7368l-.4891-2.408h-5.1824l-.8425 2.408h-4.2425l6.0637-14.93647c.2839-.720503.9651-1.189218 1.7187-1.182663h3.4491L50 16.4148Zm-8.245-5.712 2.1266-6.05279 1.224 6.05259-3.3506.0002Zm-20.3399 5.712L24.7561.295667h-4.0389L17.3749 16.4148h4.0402Z" fill="#1434CB"></path></svg>
          
          </div>
          <p>Cash payment</p>
        </div>
        <div className="cartscreen__terms">
          <p>After your order, a shipping will be handled by mail and should take 3-5 normal operating days (should not more than a week to arrive) In case of delay, or you experience a problem regarding to order, Please contact admin@dala.co <a href="">return and refund policies.</a></p>
        </div>
      </div>
    </div>
  )
}

export default CartScreen
