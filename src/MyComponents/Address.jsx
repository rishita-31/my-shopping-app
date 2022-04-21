import React from 'react'
import { Form, Button, Row } from 'react-bootstrap';
export default function Address() {


  return (
        <div className='pt-5' style={{backgroundColor: '#f0f0f5', width: '100%', height:'100vh'}}>
            {/* <div className="row"> */}
                {/* <div className="col-4 address-img">
                    <img src="https://c8.alamy.com/comp/EN7CAX/portrait-of-a-married-woman-with-a-shopping-cart-EN7CAX.jpg" alt="" />
                </div> */}
                <div className='mx-auto my-auto address-form justify-content-center'>
                    <Form className='p-4'>
                        <h1 className='py-4'>Enter your details:</h1>
                        <Form.Group className="mb-3" controlId="formBasicAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="Enter your address" required />
                        </Form.Group>
                        <div className="row">
                            <Form.Group className="col-4 mb-3" controlId="formBasicCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" placeholder="city" required />
                            </Form.Group>
                            <Form.Group className="col-4 mb-3" controlId="formBasicCity">
                                <Form.Label>State</Form.Label>
                                <Form.Control type="text" placeholder="state" required />
                            </Form.Group>
                            <Form.Group className="col-4 mb-3" controlId="formBasicPinCode">
                                <Form.Label>Pin Code</Form.Label>
                                <Form.Control type="text" placeholder="pin code" required />
                            </Form.Group>
                        </div>
                        
                        <Form.Group className="mb-3 col-6" controlId="formBasicNumber">
                            <Form.Label>Phone Number</Form.Label><br />
                            {/* <div className='col-6' style={{display: 'inline-flex', border:'1px solid  black'}}> */}
                                {/* <Form.Label column sm='1'>+91</Form.Label> */}
                                {/* <Form.Label column sm='1'>+91</Form.Label> */}
                                {/* <Form.Control className='col-1' plaintext readOnly defaultValue="+91" /> */}
                            <Form.Control type="tel" id='phoneNum' pattern="[0-9]{10}" placeholder="phone number" required />
                            {/* </div> */}
                        </Form.Group>
                        
                        <Button variant="warning" type="submit">
                            Place Order
                        </Button>
                        </Form>
                </div>
            {/* </div> */}
        </div>
  )
}
