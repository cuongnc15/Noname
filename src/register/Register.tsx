import { Button, Input } from "antd"
import styles from "./register.module.css"
import { UserOutlined } from "@ant-design/icons"
import { useRef, useState } from "react";
import { enqueueSnackbar } from "notistack";
import { authAction } from "../component/store/store";
import { useDispatch } from "react-redux";

const Register = () => {

    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmpasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [err, setErr] = useState({emailInput: "",
                                    nameInput: "",  
                                    passwordInput: "",
                                    confirmPasswordInput: ""})
     const nameInputRef = useRef<any>();
    const emailInputRef = useRef<any>("");
    const passwordInputRef = useRef<any>("");
    const cfPasswordInputRef = useRef<any>(""); 
    const dispatch = useDispatch();

    const validateForm = () => {

    const name = nameInputRef.current.value;
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    const cfPassword = cfPasswordInputRef.current.value;
        const mess = {emailInput: "",
                    nameInput: "",
                    confirmPasswordInput: "",
                    passwordInput: ""};
        if (name.trim() === "") {
            mess.nameInput = "*Please enter your name"
        }
        if (email.trim() === "") {
            mess.emailInput = "*Please enter your email"
        } else if (!email.match(mailformat)) {
            mess.emailInput = "*Please enter a valid email address";
          }
        if (password.trim() === "") {
            mess.passwordInput = "*Please enter your password"
        }
        if (confirmPassword.trim() === "") {
            mess.confirmPasswordInput = "*Please enter your password"
        }

        if (confirmPassword.trim() !== password.trim()) {
            mess.confirmPasswordInput = "*Confirm password not match with password"
        }
        setErr(mess);
        if ((Object.keys(mess.emailInput).length > 0) || 
        (Object.keys(mess.passwordInput).length > 0) ||
        (Object.keys(mess.nameInput).length > 0) || 
        (Object.keys(mess.confirmPasswordInput).length) > 0)
        {
        return false;
        } else return true;
    }

    const handleregister = (event: any) => {
        
    const formIsValid = validateForm();
    if (!formIsValid) return;
    const signupAccountFn = async () => {
      try {
        const response = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC7mNCfEzs7oh9Jr9QIpk2XHc796oTFu1Y",
          {
            method: "POST",
            body: JSON.stringify({
              email: emailInputRef.current.value,
              password: passwordInputRef.current.value,
              returnSecureToken: true,
            }),
          }
        );

        if (!response.ok) {
          const content = await response.json();
          enqueueSnackbar(content.error.message, { variant: "error" });
          alert(content.error.message);
          return;
        }
        // send data to database
        dispatch(authAction.registerHandler());
        await fetch(
          `https://react-http-9e6b9-default-rtdb.firebaseio.com/myCart.json`,
          {
            method: "POST",
            body: JSON.stringify({
              email: emailInputRef.current.value,
              name: nameInputRef.current.value,
              items: [0],
            }),
            headers: { "Content-Type": "application/json" },
          }
        );
        enqueueSnackbar("Your account is registered successfully!", {
          variant: "success",
        });
      } catch (err) {}
    };
    signupAccountFn();
  };
    
    
    return (
        <div className={styles.registerContainer}>
            <h3 className={styles.registerTitle}>Register</h3>

            <div>
            <label className={styles.registerLabel} htmlFor="">Your Name</label>
                <Input
                placeholder="Enter your name"
                ref={nameInputRef}
                onChange={(event: any) => setName(event.target.value)}
                prefix={<UserOutlined className="site-form-item-icon" />}
                />
                <p className={styles.registerNote}>{err.nameInput}</p>                 
            </div>
            <div>
                <label className={styles.registerLabel} htmlFor="">Your Email</label>
                <Input
                placeholder="Enter your email"
                value={email}
                ref={emailInputRef}
                onChange={(event: any) => setEmail(event.target.value)}
                prefix={<UserOutlined className="site-form-item-icon" />}
                />
                <p className={styles.registerNote}>{err.emailInput}</p>      
            </div>  
            <div>
                <label className={styles.registerLabel} htmlFor="">Password</label>
                <br />
                
                <Input.Password
                    placeholder="Enter password"
                    value={password}
                    ref={passwordInputRef}
                    onChange={(event: any) => setPassword(event.target.value)}
                    visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
                />
                
                <p className={styles.registerNote}>{err.passwordInput}</p> 
           </div>
           <div>
           <label className={styles.registerLabel} htmlFor="">Confirm Password</label>
                <br />
                
                <Input.Password
                    placeholder="Enter Confirm Password"
                    value={confirmPassword}
                    ref={cfPasswordInputRef}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    visibilityToggle={{ visible: confirmpasswordVisible, onVisibleChange: setConfirmPasswordVisible }}
                />
                
                <p className={styles.registerNote}>{err.confirmPasswordInput}</p>
           </div>
           <div className={styles.ButtonCreateAccount}>
                <Button type="primary"
                    onClick={handleregister}
                >Create an account</Button>
           </div>           
        </div>   
    )
}

export default Register