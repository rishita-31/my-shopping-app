import React from 'react'
import { Table, Button } from 'react-bootstrap';
import ordersBanner from '../images/orders-banner.jpg';
import img8 from '../images/img8.jpg';

function Orders() {
  return (
      <>
        <div className="shopping-banner" style={{ backgroundImage: `url(${ordersBanner})`, backgroundPosition: 'center' }}></div>
        <section className="section-g">
            <div style={{ backgroundColor: '#f0f0f5' }}>
                <h2 className="d-flex justify-content-center py-5">Your Orders</h2>
                <div className="container pb-5">
                    <div className='row col-12 px-2'>
                        <Table responsive="sm">
                            <thead>
                                <tr>
                                    <th>Product Details</th>
                                    <th>Quantity</th>
                                    <th>Total Price</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='cart-prod'>
                                        <div className="imageContainer col-5 py-2" style={{ backgroundImage: `url(${img8})` }}></div>
                                        <div className="product col-7 py-2">Lenovo HT05 TWS Earphones with Bluetooth 5.0</div>
                                    </td>                                    
                                    <td>3</td>
                                    <td>&#x20B9;3999</td>
                                    <td>Order Placed</td>
                                    <td>
                                        <Button variant="danger">Cancel</Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    
                </div>
            </div>
        </section>
      </>
  )
}

export default Orders