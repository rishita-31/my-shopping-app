import React, { useContext } from 'react'
import { decodeToken } from 'react-jwt';
import { Link ,useLocation, useNavigate} from 'react-router-dom';
import AuthContext from '../context/auth-context';

export default function Details() {
  const location = useLocation();
  const {isLoggedIn} = useContext(AuthContext);
  const Navigate = useNavigate();
  const cartHandler = () => {
    if(!isLoggedIn){
      window.alert('Logging in first');
      Navigate('/login');
      return;
    }
    const {id} = decodeToken(localStorage.getItem('token'))
    const {itemName, description,price,image,type,weight} = location.state;
    const item = {
      itemName,
      description,
      price,
      image,
      type,
      quantity: 1,
      weight,
      userId: id
    }
    fetch('/cart' , {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(item)
  }).then(response => response.json().then(
    result => window.alert(result.message)
  ))

    console.log(item);
  }
  const buyNowHandler = () =>{}

  return (

    <div className="detail-page">
      <div className="container productPage col-12">
          <div className='productPageLeft my-5 col-5 px-3 py-5' style={{backgroundImage: `url(${location.state.image})`}}> 
          </div>
          <div className="productPageRight my-5 col-7 p-5">
            <h2>{location.state.itemName}</h2>
            <p className='py-3'>{location.state.description}</p>
            <p className="pt-3"><span className="cut-price">&#x20B9;699</span> (20% off) </p>
              <p><span className="price">{`Rs. ${location.state.price}`}</span> | <span className="in-stock">In stock</span> </p>
              <button onClick={cartHandler} className="btn btn-warning">Add to Cart</button>
              <button onClick={buyNowHandler} className="btn btn-success mx-2 px-4">Buy Now</button>
          </div>
      </div>
    </div>

  )
}
