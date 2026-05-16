import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
function SignUpsuccess({ onClose }) {

    const navigate = useNavigate();

    const handleClose = () => {
        onClose();
        navigate("/",{ replace: true });
    };

    
    return (

        <>
            <div className="modal-backdrop"  onClick={handleClose}></div>
            <div className="main-login-popup" onClick={handleClose}>
                

                   <h2>Sign Up Successfull</h2>
                
            </div>
        </>
    )
}

export default SignUpsuccess;