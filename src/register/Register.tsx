import { Button, Input } from "antd"
import styles from "./register.module.css"
import { UserOutlined } from "@ant-design/icons"
import { useState } from "react";

const Register = () => {

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
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

    const handleregister = (event: any) => {
        // event.preventDefalt();
        const formIsValid = validateForm();
        if (!formIsValid) return;
    }
    
    return (
        <div className={styles.registerContainer}>
            <h3 className={styles.registerTitle}>Register</h3>

            <div>
            <label className={styles.registerLabel} htmlFor="">Your Name</label>
                <Input
                placeholder="Enter your name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                prefix={<UserOutlined className="site-form-item-icon" />}
                />
                <p className={styles.registerNote}>{err.emailInput}</p>                 
            </div>
            <div>
                <label className={styles.registerLabel} htmlFor="">Your Email</label>
                <Input
                placeholder="Enter your email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
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
                    onChange={(event) => setPassword(event.target.value)}
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
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
                />
                
                <p className={styles.registerNote}>{err.passwordInput}</p> 
           </div>
           <div className={styles.ButtonCreateAccount}>
                <Button type="primary"
                    onClick={handleregister}
                >Create my account</Button>
           </div>           
        </div>   
    )
}

export default Register