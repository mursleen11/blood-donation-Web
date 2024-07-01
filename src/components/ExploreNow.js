import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { useNavigate } from "react-router-dom";

export default function ExploreNow() {
    const navigate = useNavigate();
  const handleContact = () => {
    navigate("/Contact");
  }
  return (
    <>
    <Navbar/>
    <div>
            <div className="baner_about">
                <h2 ><a href="/About"style={{color:"white"}}>About Us</a> / Explore Now</h2>
            </div>
            <div className='Explore_Now'>
                <h1>Welcome to Blood Donation Exploration</h1>
                <h2>Who We Are:</h2>
                <p>We are not here for income, but for outcome. Our dedication to saving lives drives us to work tirelessly, ensuring that every individual has access to life-saving blood when they need it the most. We believe in the power of compassion and solidarity, and we are committed to making a difference in the lives of others, regardless of income, status, or background.</p><br />
                <ol>
                    <li><b style={{color:"#EA062B"}}>Why Donate Blood?</b><br /><br />
                        <ul>
                            <li>
                            Blood donation saves lives. It's a simple act that can have a profound impact on someone in need.</li><br />
                            <li>Every two seconds, someone in the United States needs blood. Your donation could be the difference between life and death <br /><br />for someone undergoing surgery, battling cancer, or facing a traumatic injury.</li>
                        </ul><br /><br />
                    </li>
                    <li><b style={{color:"#EA062B"}}>Who Can Donate?</b><br /><br />
                        <ul>
                            <li>Most healthy adults are eligible to donate blood. However, there are some criteria you need to meet, including age, weight,<br /><br /> and health status.</li><br />
                            <li>Check our eligibility guidelines to see if you qualify to donate blood.</li>
                        </ul><br /><br />
                    </li>
                    <li><b style={{color:"#EA062B"}}>Types of Blood Donations</b><br /><br />
                        <ul>
                            <li>Whole blood donation: The most common type where you donate a pint of whole blood.</li><br />
                            <li>Platelet donation: A special type of donation that helps patients with clotting disorders and cancer.</li><br />
                            <li>Plasma donation: Provides essential proteins for patients with liver disease, burns, and clotting disorders.</li><br />
                            <li>Double red cell donation: Allows you to donate two units of red blood cells while returning your plasma and platelets.</li>
                        </ul><br /><br />
                    </li>
                    <li><b style={{color:"#EA062B"}}>How to Prepare for Donation</b><br /><br />
                        <ul>
                            <li>Ensure you're well-hydrated and have eaten a healthy meal before donating.</li><br />
                            <li>Get a good night's sleep and avoid alcohol consumption for at least 24 hours before donating.</li>
                        </ul><br /><br />
                    </li>
                    <li><b style={{color:"#EA062B"}}>The Donation Process</b><br /><br />
                        <ul>
                            <li>Registration: Provide identification and answer some health-related questions.</li><br />
                            <li>Mini-physical: Check your temperature, blood pressure, pulse, and hemoglobin levels to ensure you're eligible to donate.</li><br />
                            <li>Donation: The actual blood donation process typically takes around 10-15 minutes.</li><br />
                            <li>Donation: The actual blood donation process typically takes around 10-15 minutes.</li><br />
                            <li>Refreshments: Enjoy some snacks and beverages after your donation to replenish your energy.</li>
                        </ul><br /><br />
                    </li>
                    <li><b style={{color:"#EA062B"}}>Find a Donation Center</b><br /><br />
                        <ul>
                            <li>Use our interactive map to locate blood donation centers near you.</li><br />
                            <li>Schedule an appointment online to make the donation process more convenient for you.</li>
                        </ul><br /><br />
                    </li>
                    <li><b style={{color:"#EA062B"}}>Frequently Asked Questions</b><br /><br />
                        <ul>
                            <li>Explore common questions and concerns about blood donation, such as donation frequency, potential side effects, and the safety of the process.</li>
                        </ul><br /><br />
                    </li>
                    <li><b style={{color:"#EA062B"}}>Contact Us</b><br /><br />
                        <ul>
                            <li>Have more questions or need assistance? Reach out to our support team, and we'll be happy to help.</li>
                        </ul><br /><br />
                    </li>

                </ol>
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
