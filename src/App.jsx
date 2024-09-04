import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import About from './pages/about/about';
import Product from './pages/Product/product';
import Signup from './pages/Signup/signup';
import Login from './pages/Login/login';
import { Layout } from './pages/Layout/Layout';
import ProductDetail from './component/Product/ProductDetail';
import AddToCart from './component/Product/AddToCart';
import WishList from './component/Product/WishList';
import Contact from './pages/Contact/Contact';

function App() {
 
  return (
    <>
     
    <Router>
      <Routes>
      <Route path='/' element={<Layout/>} >      
        <Route index element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/product/:id" element={<ProductDetail />} />
    <Route path='/addtocart' element={<AddToCart/>} />
    <Route path='/wishlist' element={<WishList/>} />
    <Route path='/contact' element={<Contact/>} />



      </Route>
        </Routes>
    </Router>
    </>
  );
}

export default App;