import React from 'react';

import { Carousel } from 'react-bootstrap';
import {Link} from "react-router-dom";
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img6 from '../images/img6.jpg';
import img7 from '../images/img7.jpg';
import img8 from '../images/img8.jpg';
import img9 from '../images/img9.jpg';
import img10 from '../images/img10.jpg';
import read from '../images/read.jpg';


export default function Home() {


  return (
    <>
    <Carousel>
        <Carousel.Item className = "citem col-12" style = {{backgroundImage: `url(${img3})`}}>
            
            <div className="first-carousel container">       
                <div className="image-container-one col-sm-3" style = {{ backgroundImage: `url(${img2})` }}>
                </div>
                <div className="col-sm-5 content">
                    <h1 className="carousel-heading-one">Get fresh groceries at your doorstep</h1>
                    <Link to ="/groceries" className="btn btn-lg btn-warning carousel-button btn-hover"> Order Now</Link>
                </div>
            </div>
            
        </Carousel.Item>
        <Carousel.Item className = "citem col-12" style = {{backgroundImage: `url(${img4})`}}>
            
            <div className="first-carousel container">
                <div className="col-sm-5 content">
                    <h1 className="carousel-heading-two">Buy second-hand books at 40% off!</h1>
                    <Link to="/books" className="btn btn-lg btn-warning carousel-button btn-hover">Order Now</Link>
                </div>
                <div className="image-container-two col-sm-3" style = {{ backgroundImage: `url(${read})` }}>
                </div>
            </div>
            
        </Carousel.Item>
        <Carousel.Item className = "citem col-12" style = {{backgroundImage: `url(${img6})`}}>
            
            <div className="first-carousel container">
                <div className="image-container-three col-sm-3" style = {{ backgroundImage: `url(${img7})` }}>
                </div>
                <div className="col-sm-5 content">
                    <h1 className="carousel-heading-three">Buy Medicines with just a click.</h1>
                    <Link to="/pharmacy" className="btn btn-lg btn-warning carousel-button btn-hover">Order Now</Link>
                </div>
            </div>
            
        </Carousel.Item>
    </Carousel>
       

    <section className="section py-5">
        <div className="container  col-12 px-3" style={{height:'100vh', display: 'flex'}}>
            <div className="mx-auto">
                <h2 className="section-one pt-2">OFFERS OF THE DAY</h2>
                <p className="section-one-desc pb-5">These offers are valid only till 11:59:59 today!</p>
                <div className="row">
                    
                    <div className="card col-3" style={{width: '18rem', backgroundColor: '#f2e6ff'}}>
                        <img src={img8} name="product-image" className="card-img-top mt-3" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title" name="product-title">Lenovo HT05 TWS Earphones with Bluetooth 5.0</h5>
                            <p className="card-text" name="product-cost-price"><span className="cut-price">&#x20B9;3999</span> (40% off) </p>
                            <form>
                                <p name="product-selling-price"><span className="price">&#x20B9;1599</span> | <span className="in-stock" name="status">In stock</span> </p>
                                <Link to="#" className="btn btn-primary">Add to Cart</Link>
                            </form>                 
                        </div>
                    </div>
                    
                    <div className="card col-3" style={{width: '18rem', backgroundColor: '#e6ffff'}}>
                        <div className="card-img px-2">
                            {/* <img src={img7} className="card-img-top  mt-3" alt="..." />    */}
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Lenovo HT05 TWS Earphones with Bluetooth 5.0</h5>
                            <p className="card-text"><span className="cut-price">&#x20B9;3999</span> (40% off) </p>
                            <form>
                                <p><span className="price">&#x20B9;1599</span> | <span className="in-stock">In stock</span> </p>
                                <Link to="#" className="btn btn-primary">Add to Cart</Link>
                            </form>                 
                        </div>
                    </div>
                    <div className="card col-3" style={{width: '18rem', backgroundColor: '#ffffe6'}}>
                        <div className="card-img">
                            <img src={img9} className="card-img-top  mt-3" alt="..."/>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Lenovo HT05 TWS Earphones with Bluetooth 5.0</h5>
                            <p className="card-text"><span className="cut-price">&#x20B9;3999</span> (40% off) </p>
                            <form>
                                <p><span className="price">&#x20B9;1599</span> | <span className="in-stock">In stock</span> </p>
                                <Link to="#" className="btn btn-primary">Add to Cart</Link>
                            </form>                 
                        </div>
                    </div>
                    <div className="card col-3" style={{width: '18rem', backgroundColor: '#f9f2ec'}}>
                        <img src={img8} className="card-img-top  mt-3" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Lenovo HT05 TWS Earphones with Bluetooth 5.0</h5>
                            <p className="card-text"><span className="cut-price">&#x20B9;3999</span> (40% off) </p>
                            <form>
                                <p><span className="price">&#x20B9;2400</span> | <span className="in-stock">In stock</span> </p>
                                <Link to="#" className="btn btn-primary">Add to Cart</Link>
                            </form>                 
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>

    <div className="new-offers mx-auto pt-5" style={{height: '90vh'}} >
        <h2 className="section-two">NEWLY ADDED PRODUCTS</h2>
        <p className="section-two-desc">Compare the products and grab the best deal!</p>
        <div className="products col-12">
            <div className="product-one col-6">
                <div className="col-6 mx-2 newproduct-one-image">
                    <img src={img9} alt="mama earth onion shampoo"/>
                </div>
                <div className="col-6 mx-2 newproduct-one-desc">
                    <h2>Mamaearth Onion Shampoo</h2>
                    <p>Hair Growth & Hair Fall Control with Onion Oil & Plant Keratin 400ml</p>
                    <p>Onion Oil stimulates the scalp, promoting blood circulation and hair growth. Plant Keratin strengthens hair, and makes it frizz-free."</p>
                    <p className="card-text"><span className="cut-price">&#x20B9;699</span> (20% off) </p>
                    <form>
                        <p><span className="price">&#x20B9;560</span> | <span className="in-stock">In stock</span> </p>
                        <Link to="#" className="btn btn-primary">Add to Cart</Link>
                    </form>
                </div>
            </div>
            <div className="product-two col-6">
                <div className="col-6 mx-2 newproduct-two-image">
                    <img src={img9} alt="mama earth onion shampoo"/>
                </div>
                <div className="col-6 mx-2 newproduct-two-desc">
                    <h2>Mamaearth Onion Shampoo</h2>
                    <p>Hair Growth & Hair Fall Control with Onion Oil & Plant Keratin 400ml</p>
                    <p>Onion Oil stimulates the scalp, promoting blood circulation and hair growth. Plant Keratin strengthens hair, and makes it frizz-free."</p>
                    <p className="card-text"><span className="cut-price">&#x20B9;699</span> (20% off) </p>
                    <form>
                        <p><span className="price">&#x20B9;560</span> | <span className="in-stock">In stock</span> </p>
                        <Link to="#" className="btn btn-primary">Add to Cart</Link>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}