import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react";
// import LoginModal from "../Login/LoginModal";
import { useDispatch, useSelector } from "react-redux";
import UserAccount from "./UserAccount";
import { authAction } from "../store/store";
import Login from "../../login/Login";
library.add(fas);
const LoginButton = () => {
  const isLogin = useSelector((state: any) => state.auth.isLogin);
  const name = useSelector((state: any) => state.cart.name);
  const showLoginForm = useSelector((state: any) => state.auth.showLoginForm);
  const dispatch = useDispatch();

  const showLogiFormHandler = () => {
    dispatch(authAction.showLoginFormHandler());
  };

  const hideLoginFormHandler = () => {
    dispatch(authAction.showLoginFormHandler());
  };
  
  return (
    <Fragment>
      <button className="nav-button" onClick={showLogiFormHandler}>
        <FontAwesomeIcon icon={["fas" ,"right-to-bracket"]} />
        <span> {isLogin ? name : "Login"}</span>
      </button>
      {showLoginForm && !isLogin && (
        <Login onHideLoginForm={hideLoginFormHandler} />
      )}
      {!showLoginForm && isLogin && <UserAccount />}
    </Fragment>
  );
};
export default LoginButton;
