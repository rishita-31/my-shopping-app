import React from 'react';
import DisplayCard from '../HelperComponent/DisplayCard';
import img1 from '../images/img1.jpg';

export default function Groceries(props) {

  return <>
    <div className="header" style={{ backgroundImage: `url(${img1})` }}></div>
<<<<<<< HEAD
    <section className="section-g">
      <div className="container py-5">

        <div className="row d-inline-flex justify-content-center">
          {
            card
          }
        </div>
      </div>
    </section>
=======
  <DisplayCard currentUser={props.currentUser} itemData={props.itemData} type1='groceries' type2 = ''/>
>>>>>>> 5709e660826243deab00062c5c274864758669fd
  </>
  
}
