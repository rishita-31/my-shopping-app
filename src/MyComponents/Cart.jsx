import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import shoppingCart from '../images/shopping-cart.jpg';
import { Table, Button } from 'react-bootstrap';
import AuthContext from '../context/auth-context';
import Login from './Login';
import useData from '../hooks/use-data';
import { decodeToken } from 'react-jwt';
import { useState } from 'react';

export default function Cart() {
    let currentUser = {}
    if(localStorage.getItem('token')){
        const token = localStorage.getItem('token');
        currentUser = decodeToken(token);
    }
    let [sendReq, setSendReq] = useState(false);
    const cartData = useData(`/cart/${currentUser.id}`,sendReq);
    const {isLoggedIn} = useContext(AuthContext);

    

    // const Navigate = useNavigate();

    // const clickHandler = (items) => {
    //     // onClick={() => clickHandler(item)}
    //     Navigate('/details', {
    //       state: {
    //         image: items.image, 
    //         itemName: items.itemName,
    //         description: items.description,
    //         price: items.price,
    //         quantity: items.quantity,
    //         weight: items.weight,
    //         type: items.type
    //       }
    //     })
    //   }

      const deleteHandler = (item) => {
        fetch(`/cart/${item._id}/delete` , {
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



        const row =() => cartData.map(
            item =>  <tr>
            <td className='cart-prod'>
            <div className="imageContainer col-5 py-2" style={{backgroundImage: `url(${item.image})`}}></div>
            <div className="product col-7 py-2">{item.itemName}</div>
            </td>
            <td>
                <form>
                    <input type="number" min={1} max={15} value={item.quantity}/>
                </form>
            </td>
            <td>{`Rs. ${item.price}`}</td>
            <td>{`Rs. ${item.price * item.quantity}`}</td>                    
            <td><Button variant='danger' onClick={() => deleteHandler(item)} className='btn-sm'>Delete</Button></td>                    
        </tr>
        )
    

    return !isLoggedIn ? <Login/> :
    <>
    <div className="shopping-banner" style = {{backgroundImage: `url(${shoppingCart})`}}></div>
    <section className="section-g">
        <div style={{backgroundColor: '#f0f0f5'}}>
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
                <div className="row grandTotal">
                    <div>
                        <h5 className='px-3'>Grand Total</h5>
                        <div className="total">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
}