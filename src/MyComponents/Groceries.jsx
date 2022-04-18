import React from 'react';
import { Link, useNavigate } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
import img1 from '../images/img1.jpg';

export default function Groceries(props) {
  const navigate = useNavigate();
  const groceriesData = [];

  props.data.map(element => {
    if (element.type === 'groceries') {
      groceriesData.push(element);
    }
  })

  const clickHandler = (items) => {
    navigate('/details', {
      state: {
        image: items.image, title: items.itemName,
        desc: items.description,
        price: items.price
      }
    })
  }

  const card = groceriesData.map(items => {
    return <div onClick={() => clickHandler(items)} className="card col-3 mx-1 my-1" style={{ width: '18rem', height: '400px' }}>
      <span class="position-absolute end-0 top-0 translate-end badge bg-dark">Sale</span>
      <img src={`${items.image}`} className="mt-3" alt="Loading..." height='200px' />
      <div className="card-body" >
        <h5 className="card-title">{items.itemName}</h5>
        {/* <p className="card-text"><span className="cut-price">&#x20B9;3999</span> (40% off) </p> */}
        {/* <form> */}
        <p><span className="price">&#x20B9;{items.price}</span> | <span className="in-stock">In stock</span> </p>
        <Link to="#" className="btn btn-primary">Add to Cart</Link>
        {/* </form>                  */}
      </div>
    </div>
  })

  return <>
    <div className="header" style={{ backgroundImage: `url(${img1})` }}></div>
    <section className="section-g">
      <div className="container py-5">

        <h2 className="ghead d-flex justify-content-center pt-2">OFFERS OF THE DAY</h2>
        <p className="ghead pb-5 d-flex justify-content-center fst-italic">These offers are valid only till 11:59:59 today!</p>
        <div className="row d-inline-flex justify-content-center">
          {
            card
          }
        </div>
      </div>
    </section>
  </>
}
