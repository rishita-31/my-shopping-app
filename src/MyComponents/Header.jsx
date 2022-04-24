import React, { useContext } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import AuthContext from '../context/auth-context';
import user from '../images/user.png';

export default function Header(props) {
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const logoutHandler = () => {
        fetch('/logout').then((response) => {
            if (!response.ok) {
                console.log(response);
                if (response.status === 500) return window.alert('Check your internet connection')
                else return window.alert('Something went wrong!!, try again')
            } else {
                response.json().then((result) => {
                    window.alert(result.message);
                    localStorage.removeItem('token');
                    setIsLoggedIn(false);
                    navigate('/login');
                })
                    .catch(err => window.alert(err.message));
            }
        })
    }
    return (
        <Navbar className='nav' expand="lg" width="100vw">
            <Container fluid>
                <Navbar.Brand as={Link} to="/">{props.title}</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/groceries">Groceries</Nav.Link>
                        <Nav.Link as={Link} to="/pharmacy">Pharmacy</Nav.Link>
                        <Nav.Link as={Link} to="/books">Books&Stationery</Nav.Link>
                        <Nav.Link as={Link} to="/electronics">Electronics</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact us</Nav.Link>
                    </Nav>
                    {isLoggedIn === true && <Nav.Item style={{color: 'black' , margin: '5px'}}>{props.currentUser.username}</Nav.Item>}
                    {isLoggedIn === true && <img src={user} alt="user" />}
                    {isLoggedIn === true && <NavDropdown id="navbarScrollingDropdown" align={{ lg: 'end' }}>
                        <NavDropdown.Item as={Link} to="/cart">Cart</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/orders">My Orders</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={logoutHandler}>
                            LogOut
                        </NavDropdown.Item>
                    </NavDropdown>}
                    
                    {isLoggedIn === false &&
                        <Nav.Link as={Link} to="/login" style={{ color: 'rgba(0,0,0,.55)' }}>Login/Register</Nav.Link>
                    }
                    {/* {isLoggedIn === true && 
                        <Nav.Link onClick={logoutHandler} style={{color:'rgba(0,0,0,.55)'}}>LogOut</Nav.Link>
                    } */}

                </Navbar.Collapse>
            </Container>
        </Navbar>


        // <Nav className="autohide navbar navbar-expand-lg navbar-light">
        //     <div className="container-fluid">
        //         <Link className="navbar-brand" to="/">{props.title}</Link>
        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //             <ul className="navbar-nav me-auto mb-lg-0">
        //                 <li className="nav-item">
        //                     <Link className="nav-link" aria-current="page" to="/">Home</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link className="nav-link" to="/groceries">Groceries</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link className="nav-link" to="/pharmacy">Pharmacy</Link>
        //                 </li>
        //                 {/* <li className="nav-item">
        //                     <Link className="nav-link" to="/electronics">Electronics</Link>
        //                 </li> */}
        //                 <li className="nav-item">
        //                     <Link className="nav-link" to="/books">Books&Stationery</Link>
        //                 </li>
        //                 {/* <li className="nav-item">
        //                     <Link className="nav-link" to="/shops">Shops</Link>
        //                 </li> */}
        //                 <li className="nav-item">
        //                     <Link className="nav-link" to="/contact">Contact us</Link>
        //                 </li>
        //             </ul>

        //             <ul className="navbar-nav mb-0 me-2 d-flex my-auto">
        //                 <img src="./images/cart.png" className="navimagecart" alt="" />
        //                 {isLoggedIn === false && <li className="nav-item">
        //                     <Link className="nav-link" to="/login">Login/Register</Link>
        //                 </li>}
        //                 {isLoggedIn === true && <li className="nav-item">
        //                     <Link className="nav-link" to="/" onClick={logoutHandler}>LogOut</Link>
        //                 </li>}
        //                 <li className="nav-item">
        //                     <Link className="nav-link" to="/cart">Cart</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <img src={user} alt="user" />
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </NavBar>
    );
}