import { CloseOutlined, UserOutlined } from "@ant-design/icons"
import { Input } from 'antd';
import styles from './login.module.css'
const Login = () => {
    
    return (
    <div className={styles.login}>
        <div className={styles.loginIconClose}>
            <CloseOutlined className={styles.IconClose}/>
        </div>
        <div className={styles.loginContainer}>
        <h3>Log in</h3>  
        <Input
            placeholder="Enter your username"
            prefix={<UserOutlined className="site-form-item-icon" />}
        />   
        </div>
        
    </div>
  );
};

export default Login