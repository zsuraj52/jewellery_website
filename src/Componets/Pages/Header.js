import React from 'react'
import '../styles/Header.css';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header id="home">
    <div className="container">
        <div className="brand d-flex align-items-center justify-content-center w-100s">
          <Link to="/"><img src="https://cdn.logojoy.com/wp-content/uploads/2018/07/30124049/jewelry11.png" style={{width:'100px', marginRight: "20px", borderRadius: "20px", cursor:"pointer"}} alt='img' /></Link>
          <p className='brand-name'>Chanel Golden Jewelry <span><br></br>A Personal Touch.</span></p>
        </div>
     </div>
      
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/home">Custom Jewelry</Link></li>
            <li><Link to="/home">Designer Jewelry</Link></li>
            <li><Link to="/home">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
  
    </header>
    
  )
}
