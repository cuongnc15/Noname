import './App.css';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Contact from './component/Contact/Contact';
import Info from './component/Info/Info';
import Layout from './component/Layout/Layout';
import { Route, Routes } from 'react-router-dom';

import Cart from './cart/Cart';
import Login from './login/Login';
import Register from './register/Register';

function App() {
  return (
    <>
    <Header/>
    {/* <Info/> */}
    {/* <Contact/> */}
    <Footer/>
    </>
  );
}


export default App;

