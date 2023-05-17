import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Contact from './component/Contact/Contact';
import Info from './component/Info/Info';
import Layout from './component/Layout/Layout';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
    <Header/>
    {/* <Info/> */}
    {/* <Contact/> */}
    <Footer/>
    </>
    // <Layout>
    //   <Routes>
    //     {/* <Route path="/" element={<HomePage />} /> */}
    //     {/* <Route path="/products" element={<ProductsPage />} /> */}
    //     {/* <Route path="/products/:productId" element={<ProductDetailPage />} /> */}
    //     {/* <Route path="/cart" element={<CartPage />} /> */}
    //     <Route path="/contact" element={<Contact />} />
    //     {/* <Route path="/register" element={<RegisterPage />} /> */}
    //     <Route path="/about" element={<Info />} />
    //   </Routes>
    // </Layout>
  );
}


export default App;

