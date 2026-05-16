import { useState } from 'react';
import './openpage.css';
import Nav from './Nav';
import Slide from './sliding';
import LoginModal from './LoginModal';
import SignUp from './SignUp';
import SignUpsuccess from './SignUpsuccess';
import slideimage from '../assets/shopingslide.webp';

function Openpage() {
    const [open, setOpen] = useState(false);
    const menu = ["Home", "About Us", "Career", "Products", "Sale", "login", "signup"];
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isSignUpOpen, setIsSignUpOpen] = useState(false);
   /*  const [isSignUpsuccessOpen, setIsSignUpsuccessOpen] = useState(false); */

    const handleNavClick = (item) => {
        if (item == "login") {
            setIsLoginOpen(true);
        } else if (item == "signup") {
            setIsSignUpOpen(true);
        }
    }

    return (
        <div className='page' onClick={() => setOpen(false)}>
            <div className='main-nav-bar'>
                <div className='company-name'><h1>Company</h1></div>
                <div className='nav-bar'>
                    {menu.map((item) => (
                        <div className="individual-nav" key={item} onClick={() => handleNavClick(item)}>
                            <Nav title={item} />
                        </div>
                    ))}
                </div>
                {/* User Area logic here */}
                {isLoginOpen && <LoginModal onClose={() => setIsLoginOpen(false)} />}
                {isSignUpOpen && <SignUp onClose={() => setIsSignUpOpen(false)} />}
                
               {/*  {isSignUpsuccessOpen && (
                    <SignUpsuccess
                        onClose={() => setIsSignUpsuccessOpen(false)}
                    />
                )} */}
            </div>
            <Slide image={slideimage} />
        </div>
    );
}

export default Openpage; // Ensure this matches the name in App.jsx