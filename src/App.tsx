import './App.css';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Contact from './component/Contact/Contact';
import Heading from './components/Heading';
import Info from './component/Info/Info';
import { Route, Routes } from 'react-router-dom';
import HomePage from './page/HomePage';
import ProductPage from './page/ProductPage';
import ProductDetailPage from './page/ProductDetailPage';
import CartPage from './page/CartPage';
import ContactPage from './page/ContactPage';
import RegisterPage from './page/RegisterPage';
import AboutPage from './page/AboutPage';

function App() {
  return (
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/products" element={<ProductPage />} />
    <Route path="/products/:productId" element={<ProductDetailPage />} />
    <Route path="/cart" element={<CartPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/about" element={<AboutPage />} />
  </Routes>
  );
}


export default App;

