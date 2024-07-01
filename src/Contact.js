import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { SocialIcon } from 'react-social-icons'

function Contact(){

    const[fname,setFName]=useState('')
    const[lname,setLName]=useState('')
    const[email,setEmail]=useState('')
    const[subject,setSubject]=useState('')
    const[message,setMessage]=useState('')

const navigate = useNavigate();


const handleSubmit=(e)=>{
   
    debugger;
    e.preventDefault();
    debugger;
    const data = {
      FirstName: fname,
      LastName:lname,
      Email: email,
      Subject: subject,
      MessageHere:message ,
      IsActive: 1
    };
    console.log('Data ',data);
    const url = "https://localhost:44390/api/ContactPerson/CreateContact";
  
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(result => {
      if (result.success) {
        alert("email  is Already exist");
      } else {
        alert("request submitted is  successfull");
      }
    })
    .catch(error => {
      alert("Email is Already Exist . " + error.message);
    });
  }



    const handleContact = () => {
        navigate('/Contact');
    }
    return(
        <>
        <div>
            <Navbar/>
           <div>
           <div className="baner_about">
                <h2>CONTACT US</h2>
            </div>
           </div>
           <div>
            <div className="blodi">
                    <div className="blodi_form" >
                      <div className="form_contact">
                      <h2>Get In Touch</h2>
                         <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled<br />  and demoralized by the charms</p>
                    <form onSubmit={handleSubmit}>

                    <input type="text" placeholder="First Name" className="form_name1" value={fname} onChange={(e) => setFName(e.target.value)} required/>
                        <input type="text"  placeholder="Last Name" className="form_name1"value={lname} onChange={(e) => setLName(e.target.value)} required/><br />
                        <input type="email" placeholder="Email" className="form_name1" value={email} onChange={(e) => setEmail(e.target.value)} required/> 
                        <input type="text" placeholder="Subject" className="form_name1" value={subject} onChange={(e) => setSubject(e.target.value)} required/><br />
                        <textarea name="" id="" cols="36" rows="5" placeholder="Message here!" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea><br />
                        <button className="submit_req">Submit Request</button>

                    </form>
                      </div>
                      <div className="form_sidebr">
                        <h3>Blood Excellence!</h3>
                        <h2>Expanded Blood Donate Services Here</h2>
                        <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms</p>
                        <h3>Emergency Line: (+92)3053135437</h3>
                        Address:
                        <h5>Formanites Housing Scheme Lahore, Punjab</h5>
                        <h3>Mon -Fri: 8:00 am - 7:00 pm</h3>
                      </div>
                    </div>
            </div>
           </div>
           <div>
               <div className="social_icon">
                    <SocialIcon url="https://facebook.com/mursleenmushtaq.prince/" target="_blank" className="icons"/>
                    <SocialIcon url="https://instagram.com/itx_prince804" target="_blank" className="icons"/>
                    <SocialIcon url="https://twitter.com" target="_blank" className="icons"/>
                    <SocialIcon url="https://linkedin.com/mursleen-mushtaq-242556181/" target="_blank" className="icons"/>
                </div>
           </div>


           <div className='we_six'>
                <div>
                    <h2>Let's change the world, Join us now!</h2>
                    <p>Join us now to be part of a transformative journey. Together, we can change the world. Embrace the power</p>
                    <p>of collective action and make a lasting impact. Your contribution matters in shaping a better future for all. </p>
                </div>
                <div><button onClick={handleContact}>Contact Us</button></div>
            </div>
            <Footer/>
        </div>

        </>
    )
}
export default Contact

