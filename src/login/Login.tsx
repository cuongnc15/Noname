import { CloseOutlined, UserOutlined } from "@ant-design/icons"
import { Input} from 'antd';
import styles from './login.module.css'
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Login = () => {

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
        // event.preventDefalt();
        if (validateForm() === true) alert("you login success")
        else return       
    }
    
    return (
    <div className={styles.login}>

        <div className={styles.loginIconClose}>
        <NavLink to="/">
            <CloseOutlined className={styles.IconClose}/>
        </NavLink>            
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
                <p>Not a member yet? <NavLink className={styles.registerLink} to="/register">
                  Register
                </NavLink>
                </p>
           </div>
        </div>      
    </div>
  );
};

export default Login