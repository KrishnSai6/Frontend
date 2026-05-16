import { useState } from 'react'
import viteLogo from '/vite.svg'
import './openpage.css'
import Nav from './nav.jsx'
import Slide from './sliding.jsx'
import slideimage from '../assets/shopingslide.webp'
import { useNavigate } from 'react-router-dom';

function Userlogin() {
    const navigate = useNavigate();
    const [count, setCount] = useState(0)
    const menu = ["Home", "About Us", "Career", "Products", "Sale"];
    const [open, setOpen] = useState(false);
    const user = JSON.parse(localStorage.getItem("user")) || {};

    const logOut = () => {
        localStorage.removeItem("user");
        navigate("/");
    }

    return (
        <>
            <div className='page' onClick={() => setOpen(false)} >
                {/* Nav bar */}
                <div className='main-nav-bar'>
                    <div className='company-name'>
                        <h1>Company</h1>
                    </div>
                    <div className='nav-bar'>

                        {menu.map((item) => (
                            <div className="individual-nav" key={item}>
                                <Nav title={item} />
                            </div>
                        ))}
                    </div>

                    {/* if user is login */}
                    <div className='user-area' onClick={(e) => { e.stopPropagation(); setOpen(!open); }}>
                        <div className='user-details' id='user'>
                            <h1>{user.email?.charAt(0).toUpperCase()}</h1>
                            {open && (
                                <div className="user-popup">
                                    <p>About Me</p>
                                    <p onClick={logOut}>LogOut</p>
                                    <p>Cart</p>
                                    <p>Settings</p>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
                <Slide image={slideimage} />

            </div>

        </>
    )
}

export default Userlogin;