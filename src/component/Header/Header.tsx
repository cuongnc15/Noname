import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "./header.css"
import LoginButton from "./LoginButton";
import { Fragment, useState } from "react";
import MobileUI from "./MobileUI";
import { useSelector } from "react-redux";
library.add(fas);

const Header = () => {
  const items = useSelector((state: any) => state.cart.items);

  const totalAmount = items
    .map((item: any) => item.amount)
    .reduce((el: number, num: number) => el + num, 0);

  const [showMenu, setShowMenu] = useState(false);
  const showMenuHandler = () => {
    setShowMenu(true);
  };
  const hideMenuHandler = () => {
    setShowMenu(false);
  };
  return (
    <Fragment>
      <header className="header">
        <div className="container">
          <div>
            <FontAwesomeIcon
              className="icon"
              icon={["fas","bars"]}
              onClick={showMenuHandler}
            />
            <Link className="nav__logo" to="/">
              LALA COLLECTION
            </Link>
          </div>
          <nav className="nav">
            <ul>
              <li>
                <NavLink className="linkClass" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="linkClass" to="/products">
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink className="linkClass" to="/about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className="linkClass" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
          <div>
          <NavLink to="/login">
          <LoginButton 
            
            />
                </NavLink>
            
            <Link to="/cart" className="nav-button">
              <FontAwesomeIcon icon={["fas","cart-shopping"]} />
              <span> Cart ({totalAmount})</span>
            </Link>
          </div>
        </div>
      </header>
      {showMenu && <MobileUI onHideMenu={hideMenuHandler} />}
    </Fragment>
  );
};
export default Header;
