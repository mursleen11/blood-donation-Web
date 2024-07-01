import Footer from './Footer'
import Navbar from './Navbar'
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { SocialIcon } from 'react-social-icons'
function About(){
    const navigate = useNavigate();
  const [counter, setCounter] = useState(0);
  const [counterYear, setCounterYear] =useState(0);
  const [awards , setAwards] =useState(0);
  const [cooperations , setCooperations] =useState(0);

/* *************     YEARS OF EXPERIENCE     **************** */
  useEffect(() => {
    const interval = setInterval(() => {
      if (counter < 4) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [counter]);

/* *************     BLOOD DONATIONS     **************** */
  useEffect(() => {
    const interval = setInterval(() => {
      if (counterYear < 500) {
        setCounterYear((prevCounter) => prevCounter + 1);
      } else {
        clearInterval(interval);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [counterYear]);


  /* *************     TOTAL AWARDS     **************** */
  useEffect(() => {
    const interval = setInterval(() => {
      if (awards < 150) {
        setAwards((prevAwards) => prevAwards + 1);
      } else {
        clearInterval(interval);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [awards]);


  /* *************     BLOOD COOPERATIONS     **************** */
  useEffect(() => {
    const interval = setInterval(() => {
      if (cooperations < 50) {
        setCooperations((prevcooperations) => prevcooperations + 1);
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [cooperations]);

  const handledonation = () => {
    navigate("/DonationsRead");
  };

  const handleHealth = () => {
    navigate("/HealthRead");
  };

  const handleBank = () => {
    navigate("/BloodBank");
  };

  const handleContact = () => {
    navigate("/Contact");
  };
  const handleExplore = () =>{
    navigate('/Explore')
  }
  const Explore = () =>{
    navigate('/ExploreNow')
  }
    return(
        <>
        <div>
            <Navbar/>
            <div className="baner_about">
                <h2>About us</h2>
            </div>



            {/* ***************      Who We Are    **************** */}
            <div>
                <div className='who_we'>
                    <div>
                        <h2>Who We Are</h2>
                        <h5>We are here not for income, but for outcome</h5>
                        <p>Which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when untrammelled and when nothing prevents</p>
                        <button onClick={Explore}>Explore Now</button>
                    </div>
                    <div><img src={require('./image/doctor.jpg')} alt="" /></div>
                </div>
            </div>




            {/* **********      Counter     ********* */}
            <div className='counter'>
                <div>
                    <span>{counter}</span>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <div>
                    <span>{counterYear}+</span>
                    <p>BLOOD DONATIONS</p>
                </div>
                <div>
                    <span>{awards}+</span>
                    <p>TOTAL AWARDS</p>
                </div>
                <div>
                    <span>{cooperations}</span>
                    <p>BLOOD COOPERATIONS</p>
                </div>
            </div>


            {/* ****************    Welcome to Blood     ************* */}
            <div>
                <div className='help_people'>
                    <div>
                        <img src={require("./image/a2.jpg")} alt="" />
                    </div>
                    <div className='need'>
                        <h5>HELP THE PEOPLE IN NEED</h5>
                        <h2>Welcome to Blood</h2>
                        <h2> Donors Organization</h2>
                        <p>where selfless individuals unite to save lives. Our mission is to provide a crucial lifeline by connecting donors with those in need. Join us in this noble cause, as together, we make a profound impact on the health and well-being of our community.</p>
                        <div className='list_item'>
                        <div>
                            <ul>
                                <li> Good Service</li>
                                <li>Help People</li>
                                <li> Hugine Tools</li>
                            </ul>
                        </div>
                        <div className='list2'>
                            <ul>
                                <li> 24h Service</li>
                                <li> Health Check</li>
                                <li>Blood Bank</li>
                            </ul>
                        </div>
                        </div>
                        <button onClick={handleExplore}>Explore Now</button>
                    </div>
                </div>
            </div>





            {/* ****************     TESTIMONIALS      ************* */}
            <div className='our_main'>
                <div className='our_view'>
                    <p>Our Teams</p>
                    <h2>Meet Our Team</h2>
                </div>
                <div className='our_team'>
                    <div>
                        <img src={require("./image/mursleen.jpg")} alt="" />
                        <h4>Mursleen Mushtaq</h4>
                        <p>CEO and Founder Health Medical</p>
                        <p>
                        <SocialIcon url="https://facebook.com/mursleenmushtaq.prince/" target="_blank" />
                        <SocialIcon url="https://instagram.com/itx_prince804" target="_blank" />
                        <SocialIcon url="https://twitter.com" target="_blank" />
                        <SocialIcon url="https://www.linkedin.com/in/mursleen-mushtaq-242556181/" target="_blank" />
                        </p>
                    </div>
                    <div>
                        <img src={require("./image/waqar.jpeg")} alt="" />
                        <h4>Waqar Ali</h4>
                        <p>React.js  & .Net Developer</p>
                        <p>
                        <SocialIcon url="https://facebook.com/mursleenmushtaq.prince/" target="_blank" />
                        <SocialIcon url="https://instagram.com/itx_prince804" target="_blank" />
                        <SocialIcon url="https://twitter.com" target="_blank" />
                        <SocialIcon url="https://linkedin.com/mursleen-mushtaq-242556181/" target="_blank" />
                        </p>
                    </div>
                    <div>
                        <img src={require("./image/wardan.jpeg")} alt="" />
                        <h4>Ali Wardan Tariq</h4>
                        <p>Front End Developer </p>
                        <p>
                        <SocialIcon url="https://facebook.com/mursleenmushtaq.prince/" target="_blank" />
                        <SocialIcon url="https://instagram.com/itx_prince804" target="_blank" />
                        <SocialIcon url="https://twitter.com" target="_blank" />
                        <SocialIcon url="https://linkedin.com/mursleen-mushtaq-242556181/" target="_blank" />
                        </p>
                    </div>
                </div>
                {/* <div className='testi_service'>
                    <p className='sami_clon'>"</p>
                    <h2>Professional services all the way</h2>
                    <p>" These cases are perfectly simple and easy to distinguish. In a free hour, when our</p>
                    <p> power of choice is untrammelled and when nothing prevents our being able to do</p>
                    <p> what we like best, every pleasure is to be welcomed and every pain avoided. "</p>
                    <img src={require("./image/user.png")} alt="" />
                    <h3>"Jhon Alexis "</h3>
                </div> */}
            </div>




            {/* ***************     START DONATING       ************ */}
            <div className='start_donte'>
                <div className='start_donte2'>
                <div className='start_donte3'>
                    <p>START DONATING</p>
                    <h2>Call Now: +92-3053135437</h2>
                    <span>Formanites Housing Scheme Lahore, Punjab <br />  mursleenmushtaq237@gamil.com</span>
                </div>
                </div>
            </div>



            <div>

            </div>




            {/* *********      Our Best Services      *********** */}
            <div>
                <div>
                    <div className='what_we'>
                        <p>WHAT WE DO</p>
                        <h2>Our Best Services</h2>
                    </div>
                    <div className='do-services'>
                        <div><img src={require("./image/s1.jpg")} alt="" /></div>
                        <div>
                            <h1>01</h1>
                            <h2>Blood Donation</h2>
                            <p>Blood donation is a noble act that saves lives. Donating blood </p> 
                            <p>provides a lifeline for those in need. Join the cause and make </p>
                            <p>the cause and make a difference in someone's life today.</p>
                            <button onClick={handledonation}>Read More</button>
                        </div>
                    </div>
                    <div className='do-services'>
                        <div>
                            <h1>02</h1>
                            <h2>Health Check</h2>
                            <p>Regular health check-ups are essential for preventive care. They detect </p> 
                            <p>potential issues early, allowing timely intervention. Prioritize your well-</p>
                            <p>being with routine check-ups to maintain a healthy and fulfilling life.</p>
                            <button onClick={handleHealth}>Read More</button>
                        </div>
                        <div><img src={require("./image/s2.jpg")} alt="" /></div>
                    </div>
                    <div className='do-services'>
                        <div><img src={require("./image/s3.jpg")} alt="" /></div>
                        <div>
                            <h1>03</h1>
                            <h2>Blood Bank</h2>
                            <p>A blood bank serves as a crucial resource, collecting, testing, </p> 
                            <p>and storing blood to meet medical needs. It plays a vital role in </p>
                            <p>ensuring a steady supply for life-saving transfusions.</p>
                            <button onClick={handleBank}>Read More</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className='we_six'>
                <div>
                    <h2>Let's change the world, Join us now!</h2>
                    <p>Join us now to be part of a transformative journey. Together, we can change the world. Embrace the power </p>
                    <p>of collective action and make a lasting impact. Your contribution matters in shaping a better future for all.</p>
                </div>
                <div><button onClick={handleContact}>Contact Us</button></div>
            </div>
            <Footer/>
        </div>
        </>
    )
}
export default About