import "./LoginModal.css";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function LoginModal({onClose}){

    const navigate = useNavigate();
        const [form, setForm] = useState({
            username: "",
            password: ""
        });
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const login = async () => {
        // basic validation
        /* if (form.password !== form.confirmPassword) {
            alert("Passwords do not match");
            return;
        } */

        try {
            const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
            const res = await fetch(`${API_BASE_URL}/auth/api/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            if (res.ok) {
                /* alert("login successful!");  */
                localStorage.setItem("user", JSON.stringify(data));
                onClose();          // close popup
              /*   alert("lo Successfully") */
                navigate("/user"); // go to login page
            } else {
                alert(data.message || "Login failed");
            }
        } catch (err) {
            console.error(err);
            alert("Error during login", err);
        }
    };
    return(

        <>
           <div className="modal-backdrop" onClick={onClose}></div>
           <div className="main-login-popup">
              <div className="login-header">
                    
                    <button className="close-btn" onClick={onClose}>&times;</button>

                </div>
                <div className="login-body">
                    <h2>Login</h2>
                    <input type="text" name="username"  placeholder="Username" value={form.username} onChange={handleChange}/>
                    <input type="text" name="password" placeholder="Password" value={form.password} onChange={handleChange} />
                    <button onClick={login}>Submit</button>
                </div>
           </div>
        </>
    )
}

export default LoginModal;