import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function TeamMember() {
    const navigate = useNavigate();

    const [fName, setFName] =useState('');
    const[email,setEmail]=useState("");
    const[phone,setPhone]=useState("");
    const [address, setAddress] =useState('');
    const [availability, setAvailability] =useState('');
    const[blood,setBloodType]=useState("");
    const[age,setAge]=useState("");
    const [gender, setGender] =useState('');
 
  const handlesubmit1 = async (e) => {
     
    debugger;
    e.preventDefault();
  
 
		
		debugger;
		const data = {
			FullName: fName,	
			Email: email,
			Phone: phone,
			Address: address,	
			Gender: gender,
			Availability: availability,
			BloodType: blood,
			Age: age,
      IsActive:1,		
		};
	console.log('Data ',data);
	const url = "https://localhost:44390/api/TeamPerson/CreateMember";
	
		fetch(url, {
		  method: 'POST',
		  headers: {
			'Content-Type': 'application/json',
		  },
		  body: JSON.stringify(data),
		})
		  .then(response => response.json())
		  .then(result => {
			alert(result);
			
		  })
		  .catch(error => {
			alert("The Email in already Exist  ");
		  });
  }
  
        


    const handleContact = () => {
        navigate('/Contact');
    }
  return (
    <>
    <div>
        <Navbar/>
        <div>
        <div className="baner_about">
                <h2>Team Member</h2>
            </div>
        </div>
        <div className='make_donatate'>
          <div>
            <h2>Join Us Team</h2>
          </div>
        </div>
        <div>
           <div className='fd_main'>
               <div className="form_donate">
               <div>
                {/* <img src={require('./image/Best_Donor.png')} alt="" className='Best_Donor' /> */}
                <h1 className='Donor_aa'>Member's Details </h1>
                </div>
                
                
                <form action="" className='team_form'onSubmit={handlesubmit1}>
            <label htmlFor="">Name :</label><br />
                <input type="text"  className="fieldsForm"  placeholder='Enter Your Full Name'
                value={fName}
                required
                onChange={(e)=>setFName(e.target.value)}
                
                /><br />
                <label htmlFor="">Email :</label><br />
                <input type="email" placeholder="Enter Email" className="fieldsForm" 
                value={email}required
                onChange={(e)=>setEmail(e.target.value)}
                
                /> <br />
                <label htmlFor="">Phone Number :</label><br />
                <input type="tel" className="fieldsForm" placeholder='Enter Your Phone Number'
                value={phone}required
                onChange={(e)=>setPhone(e.target.value)}
                /><br />
                <label htmlFor="">Address :</label><br />
                <input type="text"  placeholder='Enter Your address' className="fieldsForm" 
                value={address}required
                onChange={(e)=>setAddress(e.target.value)}
                
                /><br />
                <label htmlFor="">Availability (Days):</label>
                <select type="text" placeholder='Weekends, Evenings, '
                value={availability}required
                onChange={(e)=>setAvailability(e.target.value)}>  
            
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option></select>
                <br /> <br />
                <label htmlFor="">Blood Type:</label>
                <select name="group" id="blood-group" form="group"
                value={blood}required
                onChange={(e)=>setBloodType(e.target.value)}
                
                >
                        <option value="group">Enter Your Blood Group</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                        <option value="AB">AB+</option>
                        <option value="AB-">AB-</option>
                      </select><br />
                <label htmlFor="">Age:</label>
                <input type="number"  value={age}
                onChange={(e)=>setAge(e.target.value)}
                />
                <p>Gender :</p>
                        <label htmlFor="male">Male:</label>
                <input
                    type="radio"
                    name="gender"
                    value="Male"
                    id="male"
                    checked={gender === 'Male'}
                    onChange={(e) => setGender(e.target.value)}
                />

                <label htmlFor="female">Female:</label>
                <input
                    type="radio"
                    name="gender"
                    value="Female"
                    id="female"
                    checked={gender === 'Female'}
                    onChange={(e) => setGender(e.target.value)}
                />

                <label htmlFor="others">Others:</label>
                <input
                    type="radio"
                    name="gender"
                    value="Others"
                    id="others"
                    checked={gender === 'Others'}
                    onChange={(e) => setGender(e.target.value)}
                />
                <br></br>
                          <button value="Submit" type='Submit' className="submit_btn">Submit</button>
                         
                
            </form>             </div>
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
        <Footer/>
    </div>

    </>
  )
}
