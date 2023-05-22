import  "./footer.css";
import img from "../../asset/about/2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__content--promo">
            <h5>PROMO</h5>
            <img src={img} alt="image" />

            <span> Finding Your Perfect Shirts This Summer</span>
          </div>
          <div className="footer__content--links">
            <h5>QUICK LINKS</h5>
            <div className="links__group">
              <div className="list__link">
                <a>Sell online</a>
                <a>Store builder</a>
                <a>Mobile</a>
                <a>Commerce</a>
                <a>Dropshipping</a>
              </div>
              <div className="list__link">
                <a>Shopping cart</a>
                <a>Web</a>
                <a>Developments</a>
                <a>Point of sale</a>
                <a>Support</a>
              </div>
            </div>
          </div>
          <div className="footer__content--contact">
            <h5>CONTACT INFO</h5>
            <p>
              <FontAwesomeIcon
                className="icon"
                icon={["fas","location-dot"]}
              />{" "}
              203 Fake St. Mountain View, San Francisco, California, USA
            </p>
            <p>
              <FontAwesomeIcon className="icon" icon={["fas","phone"]} /> +2
              392 3929 210
            </p>
            <p>
              <FontAwesomeIcon className="icon" icon={["fas","envelope"]} />{" "}
              emailaddress@domain.com
            </p>
          </div>
        </div>
        <p className="footer__copyright">
          Copyright ©2022 All rights reserved | This template is by Me
        </p>
      </div>
    </footer>
  );
};
export default Footer;
