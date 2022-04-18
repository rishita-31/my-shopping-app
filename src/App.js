import './App.css'
import './style.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import Groceries from './MyComponents/Groceries';
import Pharmacy from './MyComponents/Pharmacy';
import Electronics from './MyComponents/Electronics';
import Books from './MyComponents/Books';
import Shops from './MyComponents/Shops';
import Contact from './MyComponents/Contact';
import Cart from './MyComponents/Cart';
import Home from './MyComponents/Home';
import Login from './MyComponents/Login';
import Details from './MyComponents/Details';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './MyComponents/Register';
import AuthContext from './context/auth-context';
import { useState } from 'react';
import { decodeToken } from "react-jwt";
import useData from './hooks/use-data';


function App() {
  let val = false;
  let currentUser = {}
  if (localStorage.getItem('token')) {
    const token = localStorage.getItem('token');
    currentUser = decodeToken(token);
    val = true
  }
  const [isLoggedIn, setIsLoggedIn] = useState(val);
  const itemData = useData();

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <Router>
        <div className="App">
          <Header title="STOP N' SHOP" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/groceries" element={<Groceries itemData={itemData} />} />
            <Route path="/pharmacy" element={<Pharmacy itemData={itemData} />} />
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/books" element={<Books itemData={itemData} />} />
            <Route path="/shops" element={<Shops />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/details" element={<Details />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;