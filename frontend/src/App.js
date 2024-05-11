import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import HomeCategory from './Pages/HomeCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/men-benner.jpeg'
import women_banner from './Components/Assets/women-benner.jpeg'
import OrderAddress from './Pages/OrderAddress';
import PaymentMethod from './Pages/PaymentMethod'
import PlaceOrder from './Components/PlaceOrder/PlaceOrder'
import OrderConfirm from './Components/OrderConfirm/OrderConfirm';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/mens' element={<HomeCategory banner={men_banner} category="men"/>} />
        <Route path='/womens' element={<HomeCategory banner={women_banner} category="women"/>} />
        <Route path='/abouts' element={<About category="about us"/>} />
        <Route path='/contacts' element={<Contact category="contact"/>} />
        <Route path='product' element={<Product/>}>
          <Route path=':productId' element={<Product/>} />
        </Route>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<LoginSignup/>} />
        <Route path='/OrderAddress' element={<OrderAddress/>} />
        <Route path='/PaymentMethod' element={<PaymentMethod/>} />
        <Route path='/PlaceOrder' element={<PlaceOrder/>} />
        <Route path='/OrderConfirm' element={<OrderConfirm/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;