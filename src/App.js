// import logo from './logo.svg';
import './App.css';
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
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './MyComponents/Register';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
            <Routes>
              <Route path = "/" element={<Home />}/>
              <Route path = "/groceries" element={<Groceries />} />
              <Route path = "/pharmacy" element={<Pharmacy />} />
              <Route path = "/electronics" element={<Electronics />} />
              <Route path = "/books" element={<Books />} />
              <Route path = "/shops" element={<Shops />} />
              <Route path = "/contact" element={<Contact />} />
              <Route path = "/cart" element={<Cart />} />
              <Route path = "/login" element={<Login />} />
              <Route path = "/register" element={<Register />} />
            </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;