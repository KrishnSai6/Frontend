import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
function SignUp({ onClose }) {

    const navigate = useNavigate();
    const [form, setForm] = useState({
        username: "",
        mobile: "",
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSignup = async () => {
        // basic validation
        /* if (form.password !== form.confirmPassword) {
            alert("Passwords do not match");
            return;
        } */

        try {
            const res = await fetch("http://localhost:8081/auth/api/create-account", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            if (res.ok) {
                alert("Signup successful!");

                onClose();          // close popup
                alert("sign up Successfully")
               /*  navigate("/signupsuccess"); // go to login page */
            } else {
                const msg = await res.text();
                alert(msg);
            }
        } catch (err) {
            console.error(err);
            alert("Error during signup");
        }
    };
    return (

        <>
            <div className="modal-backdrop" onClick={onClose}></div>
            <div className="main-login-popup">
                <div className="login-header">

                    <button className="close-btn" onClick={onClose}>&times;</button>

                </div>
                <div className="login-body">
                    <h2>Sign Up</h2>
                    <input type="text" name="username" placeholder="Username" value={form.username}
                        onChange={handleChange} />
                    <input type="text"name="mobile" placeholder="Mobile" value={form.mobile}
                        onChange={handleChange} />
                    <input type="text" name="name" placeholder="Name" value={form.name}
                        onChange={handleChange} />
                    <input type="text" name="email" placeholder="Email" value={form.email}
                        onChange={handleChange} />
                    <input type="text" name="password" placeholder="Password" value={form.password}
                        onChange={handleChange} />
                    {/* <input type="text" name="confirmPassword" placeholder="Conform password" value={form.confirmPassword}
                        onChange={handleChange} /> */}
                    <button onClick={handleSignup} >SignUp</button>
                </div>
            </div>
        </>
    )
}

export default SignUp;