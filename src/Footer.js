import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Footer() {
    const navigate =useNavigate();
    const email = 'mursleenmushtaq237@gmail.com';
    const secemail = 'waqargold@gmail.com' 
    const handleFooter =()=>{
        navigate('/Home')
    }
    const handleClick = () => {
        window.location.href = `mailto:${email}`;
      };
    const handleEmail = () => {
        window.location.href = `mailto:${secemail}`;
      };
  return (
    <>
    <div className='footer'>
                <div className='main_footer'>
                    <div>
                        <img src={ require('./image/Center_Logo-removebg-preview.png')} alt="" className='footer-logo' onClick={handleFooter}/>
                    </div>
                    <div>
                        <h2>Links</h2>
                        <p><a href="/Home">HOME</a></p>
                        <p><a href="/About">ABOUT US</a></p>
                        <p><a href="/Donate">DONATE BLOOD</a></p>
                        <p><a href="/Contact">CONTACT US</a></p>
                    </div>
                    <div className='contn'>
                        <h2>Contact</h2>
                        <p onClick={handleClick}>mursleenmushtaq237@gmail.com</p>
                        <p onClick={handleEmail}>waqarglod@gmail.com</p>
                        <p>Formanites Housing Scheme Lahore</p>
                        <p>+92-3053135437</p>
                    </div>  
                    <div className='contn'>
                        <h1>HEALTH MEDICAL</h1>
                        <p className='para_fotr'>Blood donation is the selfless act of giving a portion of one's blood to help others in need, supporting medical treatments, surgeries, and emergency care, ultimately saving lives..</p>
                    </div>
                </div>
                <div className='footer_copy'>
                    <p>Copyright@2024: Designd by HEALTH MEDICAL Developers</p>
                </div>
            </div>
    </>
  )
}
