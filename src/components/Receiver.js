import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function Receiver() {
    const [patientName, setPatientName] =useState('');
    const[idCard,setIdCard]=useState("")
    const [address, setAddress] =useState('');
    const [gender, setGender] =useState('');
    const[bloodGroup ,setBloodGroup]=useState("")
    const[message ,setMessage  ]=useState("")
    const[date ,setDate  ]=useState("")
    const[phone ,setPhone ]=useState("")
    const[image ,setImage ]=useState("")
    const [patientDocument, setPatientDocument] = useState('');
    const navigate = useNavigate();
    const handlesubmit= async (e) => {
        e.preventDefault();
        
         const formData = new FormData();
                formData.append('patientName', patientName);
                formData.append('idCard', idCard);
                formData.append('address', address);
                formData.append('gender', gender);
                formData.append('date', date);
                formData.append('bloodGroup', bloodGroup);
                formData.append('message', message);
                formData.append('phone', phone);
                formData.append('image', image);
              
             // Append the image file to FormData
                debugger;
		console.log(formData);
        try {
            const response = await fetch('https://localhost:44390/api/Receiver/information',
			 {
                method: 'POST',
                body: formData, // Send FormData object instead of JSON string
            });
            if (response.ok) {
                const result = await response.json();
                alert(result);
            } else {
                alert('Student Id card number is already exist');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred while submitting the form.');
        }
    };          





    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file); 
			setPatientDocument(URL.createObjectURL(file));
			
        }
    }; 



    const handleContact = () => {
        navigate('/Contact');
    }
  return (
    <>
    <Navbar/>
    <div>
        <div>
        <div className="baner_about">
                <h2>DONATE BLOOD</h2>
            </div>
        </div>
        <div className='make_donatate'>
          <div>
            <h2>Requesting Form</h2>
          </div>
  
        </div>
        <div>
           <div className='fd_main'>
               <div className="form_donate">
               <div>
                </div>
                <form onSubmit={handlesubmit} >

               
                        <label htmlFor="">Patient Name :</label><br />
                        <input type="text" placeholder="Patient Name" className="fieldsForm" 
                        required 
                        value={patientName} patientName="patientName" onChange={(e) => setPatientName(e.target.value)}/>
                       
                    
                        <label htmlFor="">Id Card :</label><br />
                        <input type="tel" placeholder="Enter Your ID Card Number" className="fieldsForm"
                         value={idCard}   required  onChange={(e) => setIdCard(e.target.value)}
                        /><br />
                         <label>Phone:</label>
                          <input type="text"  placeholder="Enter Your Phone Number" className="fieldsForm" 
                        required 
                        value={phone}  onChange={(e) => setPhone(e.target.value)}/><br />
                        <label htmlFor="">Hospital Address :</label><br />
                        <input type="text"  placeholder='Enter  Hospital  Address' className="fieldsForm"
                         value={address}   required  onChange={(e) => setAddress(e.target.value)}
                        /><br />
                       <label htmlFor="image">Upload Patient Document :</label><br />
                            <input
                            type="file"
                            id="patientDocument"
                            className='imagefile'
                            name="patientDocument"
                            accept="image/*"
                            onChange={handleFileChange}
                            /><br /><br />
                            {patientDocument && <img src={patientDocument} alt="Selected"
                            style={{ maxWidth: "300px", height: "200px" }} 
                            
                         />}
                          <label htmlFor="bloodgroup">Blood Group :</label><br />
                        <select name="group" id="blood-group" form="group"
                        value={bloodGroup}   required 
                        onChange={(e)=>setBloodGroup(e.target.value)}
                        
                        >
                        <option value="group">Enter Your Donate Blood Group</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                        <option value="AB">AB+</option>
                        <option value="AB-">AB-</option>
                      </select><br />
                        <p>Have you done blood donation before :</p>
                        <label htmlFor="yes">Yes:</label>
                        <input
                            type="radio"
                            name="gender"
                            value="Yes"
                            id="yes"
                            checked={gender === 'Yes'}
                            onChange={(e) => setGender(e.target.value)}
                        />

                        <label htmlFor="no">No</label>
                        <input
                            type="radio"
                            name="gender"
                            value="No"
                            id="no"
                            checked={gender === 'No'}
                            onChange={(e) => setGender(e.target.value)}
                        />

                        
                        <br></br>
                        <label for="dob">Required-Date:</label><br/>
    <input type="date" id="date" name="dob" required
		value={date} date="date" onChange={(e) => setDate(e.target.value)}

		title="Please enter your Date of birth"
	></input>
                
                      <br />
                        
                        <label htmlFor="">Why You need to blood :</label><br />
                        <textarea name="" id="" cols="auto" rows="8" placeholder="Message here!"
                        value={message} required
                        onChange={(e)=>setMessage(e.target.value)}
                        
                        ></textarea><br />
                        <button type="submit" value="Submit">Request Now</button>
                        </form>
                      </div>

           </div>
        </div>
        <div className='we_six'>
                <div>
                    <h2>Let's change the world, Join us now!</h2>
                    <p>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but </p>
                    <p>occasionally circumstances occur in which toil and pain can procure reat pleasure. </p>
                </div>
                <div><button onClick={handleContact}>Contact Us</button></div>
            </div>
    </div>
    <Footer/>
    </>
  )
}