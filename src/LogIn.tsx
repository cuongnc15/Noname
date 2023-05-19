import { useState } from "react";
import styles from "./LogIn.module.css"
import Register from "./Register"

const LogIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleInputUsername = () => {
        
    }

    return (
        <div className={styles.form}>
            <div>
            <h3 className={styles.loginText}>Log in</h3>
            </div>
            <div className={styles.formLogin}>
                <div className={styles.loginEmail}>
                <label htmlFor="">Your Email</label>
                <br />
                <input 
                    type="text" 
                    placeholder="Enter your username"
                    value={email}
                    onChange={handleInputUsername}
                />
                <br />
                </div>

                <div className={styles.loginEmail}>
                <label htmlFor="">Your Password</label>
                <br />
                <input 
                    type="text" 
                    placeholder="Enter your password"  
                    value={password}                 
                />
                <br />
                </div>
                <button>Sign in</button>
                <p>Not a member yet? <Register/></p>
            </div>
        </div>
    )
}

export default LogIn