import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { useNavigate } from "react-router-dom";

export default function Explore() {
  const navigate = useNavigate();
  const handleContact = () => {
    navigate("/Contact");
  };
  return (
    
    <>
    <Navbar/>
    <div>
           <div className="baner_about">
                <h2 ><a href="/About"style={{color:"white"}}>About Us</a> / Explore Now</h2>
            </div>
        <div className='Organization_Explore'>
            <h1>Welcome to Blood Donors Organization</h1>
            <p>Welcome to Blood Donors Organization, where selfless individuals unite to save lives. Our mission is to provide a crucial lifeline by connecting donors with those in need. Together, we make a profound impact on the health and well-being of our community.</p><br />
            <h2>Our Mission:</h2>
            <p>At Blood Donors Organization, we are dedicated to saving lives by facilitating blood donations and connecting donors with patients in need. Our mission is to ensure that every individual has access to life-saving blood when they need it the most.</p>
            <h2>Our Services:</h2>
            <ul>
              <li><b style={{color:"#EA062B"}}>Good Service:</b> We provide exceptional service to donors and patients alike, ensuring a smooth and efficient donation process.</li><br />
              <li><b style={{color:"#EA062B"}}>Help People:</b> By donating blood, you can directly help people in need and make a positive impact on their lives.</li><br />
              <li><b style={{color:"#EA062B"}}>Cutting-edge Tools:</b>We utilize cutting-edge technology and tools to streamline the donation process and ensure the safety and well-being of donors and recipients.</li><br />
              <li><b style={{color:"#EA062B"}}>24/7 Service: </b>Our services are available round-the-clock, ensuring that blood donations are accessible whenever they are needed.</li><br />
              <li><b style={{color:"#EA062B"}}>Health Check: </b>We offer free health checks for donors to ensure that they are eligible to donate blood and maintain their overall health.</li><br />
              <li><b style={{color:"#EA062B"}}>Blood Bank:</b>Our blood bank is well-equipped to store and distribute blood to hospitals and medical facilities, ensuring that life-saving blood is readily available.</li><br />
            </ul>
            <h2>Why Donate Blood?</h2>
            <ul>
              <li><b style={{color:"#EA062B"}}>Save Lives:</b>Every blood donation has the potential to save up to three lives, making a significant impact on individuals and their families.</li><br />
              <li><b style={{color:"#EA062B"}}>Community Impact:</b>Blood donation is a powerful way to give back to your community and support those in need during times of crisis.</li><br />
              <li><b style={{color:"#EA062B"}}>Personal Fulfillment:</b>Donating blood is a selfless act that brings a sense of fulfillment and satisfaction, knowing that you have helped someone in need.</li><br />

            </ul>
        </div>
        <div className='we_six'>
                <div>
                    <h2>Let's change the world, Join us now!</h2>
                    <p>Join us now to be part of a transformative journey. Together, we can change the world. Embrace the power </p>
                    <p>of collective action and make a lasting impact. Your contribution matters in shaping a better future for all.</p>
                </div>
                <div><button onClick={handleContact}>Contact Us</button></div>
            </div>
    </div>
    <Footer/>
    </>
  )
}
