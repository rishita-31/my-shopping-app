import React from 'react'
import { Link ,useLocation} from 'react-router-dom';

export default function Details() {
  const location = useLocation();
  return (

    <div className="detail-page">
      <div className="container productPage col-12">
          <div className='productPageLeft my-5 col-7 p-5'>
            <img src={location.state.image} alt="" />
          </div>
          <div className="productPageRight my-5 col-7 p-5">
            <h2>{location.state.title}</h2>
            {/* <h4>Hair Growth & Hair Fall Control with Onion Oil & Plant Keratin 400ml</h4> */}
            <p className='py-3'>{location.state.desc}</p>
            <p className="pt-3"><span className="cut-price">&#x20B9;699</span> (20% off) </p>
            <form>
              <p><span className="price">&#x20B9;560</span> | <span className="in-stock">In stock</span> </p>
              <Link to="#" className="btn btn-warning">Add to Cart</Link>
              <Link to="#" className="btn btn-success mx-2 px-4">Buy Now</Link>
            </form>
          </div>
      </div>
    </div>

  )
}
