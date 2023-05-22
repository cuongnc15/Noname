import { useDispatch } from "react-redux";
import { authAction, cartAction } from "../store/store";
import "./user.css"
const UserAccount = () => {
  const dispatch = useDispatch();

  const logoutClickHandler = () => {
    dispatch(authAction.logoutHandler());
    dispatch(cartAction.clearCart());
    localStorage.removeItem("userAccount");
    localStorage.removeItem("userCart");
  };
  return (
    <form className="account__info">
      <ul className="account__list">
        <li>
          <a href="#">My account</a>
        </li>
        <li>
          <a href="#">My order</a>
        </li>
        <li>
          <a href="#">My wishList</a>
        </li>
      </ul>
      <p className="account__logout" onClick={logoutClickHandler}>
        Logout
      </p>
    </form>
  );
};
export default UserAccount;
