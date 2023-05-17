import { CloseOutlined, UserOutlined } from "@ant-design/icons"
import { Input} from 'antd';
import styles from './login.module.css'
import { useState } from "react";

const Login = () => {

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [err, setErr] = useState({emailInput: "",
    passwordInput: ""})

    const validateForm = () => {
        const mess = {emailInput: "",
                    passwordInput: ""};
        if (email.trim() === "") {
            mess.emailInput = "*Please enter your email"
        }
        if (password.trim() === "") {
            mess.passwordInput = "*Please enter your password"
        }
        setErr(mess);
        if (Object.keys(mess).length > 0) {
        return false;
        } else return true;
    }

    const [styleIcon, setStyleIcon] = useState("") 
    const handleMouseInIcon = () => {
        setStyleIcon(styles.IconCloseMouse)
    }
    const handleMouseOut = () => {
        setStyleIcon("")
    }
    return (
    <div className={styles.login}>
        <div className={styles.loginIconClose}>
            <CloseOutlined className={`${styles.IconClose} ${styleIcon}`}
                onMouseOver={handleMouseInIcon}   
                onMouseLeave={handleMouseOut}             
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
           <div>
                <p>Not a member yet? Register</p>
           </div>
        </div>        
    </div>
  );
};

export default Login