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

  useEffect(() => {                                           //7:53:00
    const fetchAppData = async () => {
      const response = await axios.get('/api/cart-items?expand=product');
      setCart(response.data);
    };
    fetchAppData();
 
  }, [])


  return (
    <Routes>
      <Route index element={< HomePage cart={cart}/>} />
      <Route path="checkout" element={< CheckoutPage cart={cart}/>} />
      <Route path="orders" element={< OrdersPage cart={cart}/>} />
      <Route path="tracking/:orderId/:productId" element={<Tracking cart={cart} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
