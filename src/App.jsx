import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/nav.jsx'
import Slide from './components/sliding.jsx'
import slideimage from './assets/shopingslide.webp' 

function App() {
  const [count, setCount] = useState(0)
  const menu = ["Home", "About Us", "Career", "Products", "Sale"];
  const [open, setOpen] = useState(false);
  /* function userDetails(){
    document.getElementById("user")
    
  } */

  return (
    <>
      {/*  <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
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
            {/* This is Hardcode nav bar */}
            {/* <div className='individual-nav'>
              <Nav title="Home" />
            </div>
            <div className='individual-nav'>
              <Nav title="About Us" />
            </div>
            <div className='individual-nav'>
              <Nav title="Career" />
            </div>
            <div className='individual-nav'>
              <Nav title="Products" />
            </div> */}
          </div>
          <div className='user-area' onClick={(e) => {e.stopPropagation(); setOpen(!open);}}>
            <div className='user-details' id='user'>
              <h1>K</h1>
              {open && (
                <div className="user-popup">
                  <p>About Me</p>
                  <p>LogOut</p>
                  <p>Cart</p>
                  <p>Settings</p>
                </div>
              )}

            </div>
          </div>

        </div>
        <Slide image = {slideimage}/>

      </div>

    </>
  )
}

export default App;
