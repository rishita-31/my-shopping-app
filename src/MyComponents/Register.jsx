import React from 'react'
import { FormGroup, FormText, Col } from 'react-bootstrap';
import { Label, Input } from 'reactstrap';
import background from '../images/background.jpg';
import { Link } from 'react-router-dom';
import  shop  from '../images/shop.png';

export default function Register() {
  return (
    <div className='login p-5' style={{backgroundImage:`url(${background})`}}>
        <div className='box justify-content-center my-auto mx-auto'>
            <div className="col-sm-5 pt-5 ps-4 left">
                <h2>Login</h2>
                <p>Get access to your Orders, Wishlist and Recommendations</p>
                <img className='login-shop-img' src={shop} alt="shop" />
            </div>
            <div className="col-sm-7">
                <form className='ps-4 pt-5'>
                    <FormGroup row>
                        <Label for="username" sm={2}>Username</Label>
                        <Col sm={10}>
                            <Input type="text" name="username" id="username" placeholder="Enter your username" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="email" sm={2}>Email</Label>
                        <Col sm={10}>
                            <Input type="email" name="email" id="email" placeholder="Enter your email" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="password" sm={2}>Password</Label>
                        <Col sm={10}>
                            <Input type="password" name="password" id="password" placeholder="Enter your password" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={10}>
                            <button className="login-btn py-2">Submit</button>
                        
                            <FormText color="muted">
                                Already have an Account? <Link to="/login" className='formtext'>Login here</Link> 
                            </FormText>
                        </Col>
                    </FormGroup>

                    
                    
                </form>
            </div>
        </div>
    </div>
  )
}
