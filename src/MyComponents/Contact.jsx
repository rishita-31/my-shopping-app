import React from 'react';
import img11 from '../images/img11.jpg';
import {Link} from "react-router-dom";

export default function Contact() {
  return <>
 <div className="header" style = {{backgroundImage: `url(${img11})`}}></div>

  <section className="contact-section py-5">
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="row">
            <div className="col-md-12 mb-4">
              <h2 className="h4">Contact Information</h2>
            </div>
            <div className="col-md-12 mb-3">
              <p>Address: 24-C West Sector 17B, Ambala Haryana 133207</p>
            </div>
            <div className="col-md-12 mb-3">
              <p>Phone: <Link to="tel://0129987987">0129 987 987</Link></p>
            </div>
            <div className="col-md-12 mb-3">
              <p>Email: <Link to="mailto:info@yoursite.com">info@stopnshop.com</Link></p>
            </div>
            <div className="col-md-12 mb-3">
              <p>Website: <Link to="#">stopnshop.com</Link></p>
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-6">
          <form action="" method="POST" className="contact-form">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input type="text" name="names" className="form-control" placeholder="Your Name"/>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input type="text" name="email" className="form-control" placeholder="Your Email"/>
                </div>
                </div>
            </div>
            <div className="form-group">
              <input type="text" name="subjects" className="form-control" placeholder="Subject"/>
            </div>
            <div className="form-group">
              <textarea id="" name="messages" cols="30" rows="7" className="form-control" placeholder="Message"></textarea>
            </div>
            <div className="form-group">
              <input type="submit" name="submit" value="Send Message" className="btn btn-success py-3 px-5"/>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  </>
}
