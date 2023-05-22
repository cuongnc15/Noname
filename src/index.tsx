import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from './app/store'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './component/Contact/Contact';
import ContactPage from './page/ContactPage';
import AboutPage from './page/AboutPage';
import Login from './login/Login';
import LoginPage from './page/LoginPage';


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
    element: <App/>,
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
]);
root.render(
  <Provider store={store}>
    {/* <App /> */}
    <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
