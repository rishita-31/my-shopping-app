import React from 'react';
import {Link} from "react-router-dom";

export default function Header() {
  return (
    <nav className="autohide navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">STOP N' SHOP</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
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
                <form className="d-flex">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0"><i className="fas fa-shopping-cart"></i>
                        <img src="./images/cart.png" className="navimagecart" alt="" />
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart"> Cart</Link>
                        </li>
                    </ul>
                    <input id="searchBar" className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn navbtn btn-hover" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>);
}
