import { CloseOutlined, UserOutlined } from "@ant-design/icons"
import { Input, Space } from 'antd';
import styles from './login.module.css'
import { useState } from "react";
const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    return (
    <div className={styles.login}>
        <div className={styles.loginIconClose}>
            <CloseOutlined className={styles.IconClose}/>
        </div>
        <div className={styles.loginContainer}>
            <h3 className={styles.loginTitle}>Login</h3>

            <div>
                <label className={styles.loginLabel} htmlFor="">User Name</label>
                <Input
                placeholder="Enter your username"
                prefix={<UserOutlined className="site-form-item-icon" />}
                />
                <p className={styles.loginNote}>*Please enter your email</p>    
            </div>  
            <div>
                <label className={styles.loginLabel} htmlFor="">Password</label>
                <br />
                <Space direction="horizontal">
                <Input.Password
                    placeholder="input password"
                    visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
                />
                </Space>
                <p className={styles.loginNote}>*Please enter your password</p> 
           </div>
           <div>
                <p>Not a member yet? Register</p>
           </div>
        </div>        
    </div>
  );
};

export default Login