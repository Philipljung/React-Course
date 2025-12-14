import axios from 'axios';
import { Routes, Route } from 'react-router';
import {useState, useEffect} from 'react';
import { HomePage } from './pages/home/HomePage';
import { CheckoutPage } from "./pages/Checkout/CheckoutPage";
import { OrdersPage } from "./pages/Orders/OrdersPage";
import { Tracking } from './pages/Tracking';
import { NotFound } from './pages/NotFound';
import './App.css'


function App() {
  const [cart, setCart] = useState([]);

  const loadCart = async () => {
      const response = await axios.get('/api/cart-items?expand=product');
      setCart(response.data);
    };

  useEffect(() => {                                           //7:53:00
    loadCart();
  }, [])


  return (
    <Routes>
      <Route index element={< HomePage cart={cart} loadCart={loadCart}/>} />
      <Route path="checkout" element={< CheckoutPage cart={cart} loadCart={loadCart}/>} />
      <Route path="orders" element={< OrdersPage cart={cart}/>} />
      <Route path="tracking/:orderId/:productId" element={<Tracking cart={cart} />} />
      <Route path="*" element={<NotFound cart={cart} />} />
    </Routes>
  )
}

export default App
