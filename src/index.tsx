import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from './component/store/store'
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ContactPage from './page/ContactPage';
import AboutPage from './page/AboutPage';
import LoginPage from './page/LoginPage';
import RegisterPage from './page/RegisterPage';
import Heading from './components/Heading';
import ProductPage from './page/ProductPage';
import CartPage from './page/CartPage';
import HomePage from './page/HomePage';
import ProductDetailPage from './page/ProductDetailPage';
import { SnackbarProvider } from 'notistack';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <div>Hello world!</div>,
  // },
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/products",
    element: <ProductPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/products/:productId",
    element: <ProductDetailPage />,
  },
  
]);
root.render(
  <Provider store={store}>
    <BrowserRouter>
    <SnackbarProvider
        maxSnack={2}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <App />
      </SnackbarProvider> 
    </BrowserRouter>
    {/* <RouterProvider router={router} /> */}
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
