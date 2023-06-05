import { CloseOutlined, UserOutlined } from "@ant-design/icons"
import { Input} from 'antd';
import styles from './login.module.css'
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { enqueueSnackbar } from "notistack";
import { authAction, cartAction } from "../component/store/store";

const Login = (props: any) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [err, setErr] = useState({emailInput: "",
    passwordInput: ""})
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const validateForm = () => {
        const mess = {emailInput: "",
                    passwordInput: ""};
        if (email.trim() === "") {
            mess.emailInput = "*Please enter your email"
        } else if (!email.match(mailformat)) {
            mess.emailInput = "*Please enter a valid email address";
          }
        if (password.trim() === "") {
            mess.passwordInput = "*Please enter your password"
        }
        setErr(mess);
        if ((Object.keys(mess.emailInput).length > 0) || (Object.keys(mess.passwordInput).length > 0)) {
        return false;
        } else return true;
    }

    const handlLogin = (event: any) => {
    event.preventDefault();
    const formIsValid = validateForm();
    if (!formIsValid) return;
    const signinHandlerFn = async () => {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC7mNCfEzs7oh9Jr9QIpk2XHc796oTFu1Y",
        {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true,
          }),
          headers: { "Content-Type": "application/json" },
        }
      );
      if (!response.ok) {
        const content = await response.json();
        enqueueSnackbar(content.error.message, { variant: "error" });
        await content.error.message;

        setEmail("");
        setPassword("");
        return;
      }
      const data = await response.json();

      dispatch(authAction.loginHandler(data.idToken));
      const responseData = await fetch(
        "https://react-http-9e6b9-default-rtdb.firebaseio.com/myCart.json"
      );
      const userData = await responseData.json();
      let arr = [];
      for (const key in userData) {
        arr.push({ id: key, ...userData[key] });
      }
      const selectedElement = arr.filter((el) => el.email === email);
      selectedElement[0].items.splice(0, 1);
      dispatch(cartAction.updateCart(selectedElement[0]));
      localStorage.setItem(
        "userAccount",
        JSON.stringify({ isLogin: true, showLoginForm: true })
      );
      localStorage.setItem("userCart", JSON.stringify(selectedElement[0]));
      navigate("/");
    };
    signinHandlerFn();    
    }
    
    return (
    <div className={styles.login}>

        <div className={styles.loginIconClose}>
        
            <CloseOutlined className={styles.IconClose}
              onClick={props.onHideLoginForm}
            />
                 
        </div>

        <div className={styles.loginContainer}>
            <h3 className={styles.loginTitle}>Login</h3>

            <div>
                <label className={styles.loginLabel} htmlFor="">User Name</label>
                <Input
                placeholder="Enter your username"
                value={email}
                
                onChange={(event) => setEmail(event.target.value)}
                prefix={<UserOutlined className="site-form-item-icon" />}
                />
                <p className={styles.loginNote}>{err.emailInput}</p>    
            </div>  
            <div>
                <label className={styles.loginLabel} htmlFor="">Password</label>
                <br />
                
                <Input.Password
                    placeholder="Enter password"
                    value={password}
                    
                    onChange={(event) => setPassword(event.target.value)}
                    visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
                />
                
                <p className={styles.loginNote}>{err.passwordInput}</p> 
           </div>
           <div className={styles.Btn}>
                <button className={styles.loginBtn}
                onClick={handlLogin}
                >Sign in</button>
           </div>          
           <div>
                <p>Not a member yet? <span>
                  <NavLink className={styles.registerLink} 
                  to="/register"
                  onClick={props.onHideLoginForm}
                  >
                  Register
                </NavLink></span>                 
                </p>
           </div>
        </div>      
    </div>
  );
};

export default Login