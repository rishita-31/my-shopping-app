import React from 'react';
import shoppingCart from '../images/shopping-cart.jpg';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Cart() {
    return <>
    <div className="shopping-banner" style = {{backgroundImage: `url(${shoppingCart})`}}></div>
    <section className="section-g">
        <div style={{backgroundColor: '#f0f0f5'}}>
            <h2 className="d-flex justify-content-center py-5">Items you have added</h2>
            <div className="container pb-5">
                {/* <div className="row cart-item px-4 py-3" style = {{backgroundColor: '#ffffff'}}>
                    <div className="imageContainer col-3"></div>
                    <div className="product col-5"></div>
                </div> */}
                <div className='row col-12 px-2'>
                    <Table responsive="sm">
                        <thead>
                            <tr>
                                <th>Product Details</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Total</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='cart-prod'>
                                <div className="imageContainer col-5 py-2"></div>
                                <div className="product col-7 py-2">Fbjbdjbvj ldsbgvl d svbhhhhhh h hhh hhhhhhhh h   hhhhhhhhh hhhhhhh hhhhhhhhhh hhhhhhhhhhhhhhhhh</div>
                                </td>
                                <td>
                                    <form>
                                        <input type="number" min={1} max={15} />
                                    </form>
                                </td>
                                <td>6739</td>
                                <td>457579</td>                    
                                <td><Button variant='danger' className='btn-sm'>Delete</Button></td>                    
                            </tr>                          
                            <tr>
                                <td className='cart-prod'>
                                <div className="imageContainer col-5 py-2"></div>
                                <div className="product col-7 py-2">Fbjbdjbvj ldsbgvl d svbhhhhhh h hhh hhhhhhhh h   hhhhhhhhhhhhhhhh hhhhhhhhhh hhhhhhhhhhhhhhhhh</div>
                                </td>
                                <td>
                                    <form>
                                        <input type="number" min={1} max={15} />
                                    </form>
                                </td>
                                <td>6739</td>
                                <td>457579</td>                    
                                <td><Button variant='danger' className='btn-sm'>Delete</Button></td>                    
                            </tr>             
                            <tr>
                                <td className='cart-prod'>
                                <div className="imageContainer col-5 py-2"></div>
                                <div className="product col-7 py-2">Fbjbdjbvj ldsbgvl d svbhhhhhh h hhh hhhhhhhh h   hhhhhhhhhhhhhhhh hhhhhhhhhh hhhhhhhhhhhhhhhhh</div>
                                </td>
                                <td>
                                    <form>
                                        <input type="number" min={1} max={15} />
                                    </form>
                                </td>
                                <td>6739</td>
                                <td>457579</td>                    
                                <td><Button variant='danger' className='btn-sm'>Delete</Button></td>                    
                            </tr>             
                        </tbody>
                    </Table>
                </div>
                <div className="row grandTotal">
                    <div>
                        
                        <h5 className='px-3'>Grand Total</h5>
                        <div className="total">

                        </div>
                    </div>
                </div>
                {/* <div className="col-3">
                    <div className='pl-2 grandTotal' style={{border:'1px solid black',borderRadius:'10px'}}>
                        <h2 className='p-2'>GRAND TOTAL: </h2>
                        <h3 className='px-2'>0</h3>
                    </div><div className="py-2">
                        <Button variant='success' size='sm'>Next</Button>
                    </div>
                </div> */}
            </div>
        </div>
    </section>
    </>
}