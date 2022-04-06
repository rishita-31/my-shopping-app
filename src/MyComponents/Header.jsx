import React,{useContext, useEffect} from 'react';
import {Link} from "react-router-dom";
import AuthContext from '../context/auth-context';


export default function Header() {
    const {isLoggedIn,setIsLoggedIn} = useContext(AuthContext);
    if(localStorage.getItem('token')){
        setIsLoggedIn(true);
    }
    const logoutHandler = () => {
        fetch('/logout').then((response) => {
            if(!response.ok){
              console.log(response);
            if (response.status === 500) return window.alert('Check your internet connection')
            else return window.alert('Something went wrong!!, try again')
          }else{
            response.json().then((result) => {
              window.alert(result.message);
              localStorage.removeItem('token')  
              setIsLoggedIn(false);    
            })
            .catch(err => window.alert(err.message));
          }
        })
    }
    return (
        <nav className="autohide navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/groceries">Groceries</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/pharmacy">Pharmacy</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/electronics">Electronics</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/books">Books&Stationery</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/shops">Shops</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact us</Link>
                        </li>
                    </ul>
                    
                    <ul className="navbar-nav mb-0 me-2 d-flex my-auto">
                        <img src="./images/cart.png" className="navimagecart" alt="" />
                        {isLoggedIn == false && <li className="nav-item">
                            <Link className="nav-link" to="/login">Login/Register</Link>
                        </li>}
                        {isLoggedIn == true && <li className="nav-item">
                            <Link className="nav-link" to="/" onClick={logoutHandler}>LogOut</Link>
                        </li>}
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart">Cart</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}