import React, { useContext } from 'react';
import shoppingCart from '../images/shopping-cart.jpg';
import { Table, Button } from 'react-bootstrap';
import AuthContext from '../context/auth-context';
import Login from './Login';
import useData from '../hooks/use-data';
import { decodeToken } from 'react-jwt';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
    let currentUser = {}
    if (localStorage.getItem('token')) {
        const token = localStorage.getItem('token');
        currentUser = decodeToken(token);
    }
    let [sendReq, setSendReq] = useState(false);
    const cartData = useData(`/cart/${currentUser.id}`, sendReq);
    const { isLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const deleteHandler = (item) => {
        fetch(`/cart/${item._id}/delete`, {
            method: "DELETE",
            headers: {
                'Content-type': 'application/json'
            },
        }).then(response =>
            response.json().then(result => {
                setSendReq((prevState) => !prevState);
                window.alert(result.message)
            }
            ).catch(err => console.log(err))
        )
    }

    const placeOrderHandler = () => {
        console.log('order')
        navigate('/address',{state: cartData});
    }

    const row = () => cartData.map(
        item => <tr key={item._id}>
            <td className='cart-prod'>
                <div className="imageContainer col-5 py-2" style={{ backgroundImage: `url(${item.image})` }}></div>
                <div className="product col-7 py-2">{item.itemName}</div>
            </td>
            <td>
                <form>
                    <input type="number" min={1} max={15} value={item.quantity} />
                </form>
            </td>
            <td>{`Rs. ${item.price}`}</td>
            <td>{`Rs. ${item.price * item.quantity}`}</td>
            <td><Button variant='danger'  className='btn-sm'>Delete</Button></td>
        </tr>
    )

    const displayCart = <section className="section-g">
        <div style={{ backgroundColor: '#f0f0f5' }}>
            <h2 className="d-flex justify-content-center py-5">Items you have added</h2>
            <div className="container pb-5">
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
                            {
                                row()
                            }
                        </tbody>
                    </Table>
                </div>
                <div className="row" style={{ display: 'flex' }}>
                    <div className="grandTotal px-3 mr-0">
                        <h5 className=''>Grand Total</h5>
                        <div className="total">
                            <h3>0</h3>
                        </div>
                        <Button variant='warning' onClick={() => deleteHandler(it)} >Place Order</Button>
                    </div>
                </div>
            </div>
        </div>
    </section>


    return !isLoggedIn ? <Login /> :
        <>
            <div className="shopping-banner" style={{ backgroundImage: `url(${shoppingCart})` }}></div>
            {cartData.length === 0 ? <div style={{ backgroundColor: '#f0f0f5' }}>
                <h2 className="d-flex justify-content-center py-5">Your Cart is Empty</h2>
            </div> : displayCart}
        </>
}