import React from 'react'
import { Form, Button } from 'react-bootstrap';
export default function Address() {
  return (
      <div style={{backgroundColor: '#f0f0f5', width: '100%', height:'100vh'}}>
        <div className='address-form'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter your address" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
        </div>

      </div>
  )
}
