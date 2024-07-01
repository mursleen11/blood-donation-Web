import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogout =()=>{
    navigate('/')
  }
  const handleHome =()=>{
    navigate('/Home')
  }
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
        <div class="header">
               <div><img src={require('./image/Center_Logo-removebg-preview.png')} alt="" className='logo' onClick={handleHome}/></div>
               <div className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
               <div className="bar"></div>
               <div className="bar"></div>
               <div className="bar"></div>
        </div>
                <nav className={`nav shift ${isOpen ? 'open' : ''}`}>
                    <ul>
                        <li className='Effect'activeClassName="active"><Link to="/home">HOME</Link></li>
                        <li className='Effect'activeClassName="active"><Link to="/about">ABOUT</Link></li>
                        <li className='Effect'activeClassName="active"><Link to="/donate">DONATE BLOOD</Link></li>
                        <li className='Effect'activeClassName="active"><Link to="/RecipiantList">RECIPIANT LIST</Link></li>
                        <li className='Effect'activeClassName="active"><Link to="/donerList">DONER LIST</Link></li>
                        <li className='Effect'activeClassName="active"><Link to="/contact">CONTACT US</Link></li>
                        <button className='logout' onClick={handleLogout}>Logout</button>
                    </ul>
                </nav>
                
            </div>
    </div>
  )
}
