import React, { useState,useEffect} from 'react'
import { useNavigate, useParams,useLocation } from 'react-router-dom'
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function UpdateTeam() {
  const { id } = useParams(); 
  const [Memberid, setMemberID] =useState('');
  const navigate = useNavigate();

  const [fName, setFName] =useState('');
  const[email,setEmail]=useState("");
  const[phone,setPhone]=useState("");
  const [address, setAddress] =useState('');
  const [availability, setAvailability] =useState('');
  const[blood,setBloodType]=useState("");
  const[age,setAge]=useState("");
  const [gender, setGender] =useState('');
  const location = useLocation();




  useEffect(() => {
    if (location.state && location.state.DonerData) {
        const {
          ID,
          FullName,	
          Email,
          Phone,
          Address,	
          Gender,
          Availability,
          BloodType,
          Age,
     
     } = location.state.DonerData;
     setMemberID(ID);
     setFName(FullName);
     setEmail(Email);
        setPhone(Phone);
        setGender(Gender)
        setAddress(Address);
    setAvailability(Availability);
    setBloodType(BloodType);
    setAge(Age);

  
    }
  }, [location]);
const handlesubmit1 = async (e) => {
   
  debugger;
  e.preventDefault();


      
      debugger;
      const data = {
        ID:Memberid,
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
  const url = `https://localhost:44390/api/TeamPerson/MemberUpdate/${id}`;
  try {
    const response = await fetch(url, {
      method: 'PUT', // Change the method to PUT
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const result = await response.json();
      alert(result);
    } else {
      throw new Error('Failed to submit data');
    }
  } catch (error) {
    alert('Failed to update CD data');
  }
};
  
  
const handleBack = () => {
  navigate("/TeamList")
  };    


    const handleContact = () => {
        navigate('/Contact');
    }
  return (
    <>
    <div>
        <Navbar/>
        <div>
        <div className="baner_about">
                <h2>Update Team Member</h2>
            </div>
        </div>
        <div className='make_donatate'>
          <div>
            <h2>Make a Donation</h2>
          </div>
        </div>
        <div>
           <div className='fd_main'>
               <div className="form_donate">
               <div>
                {/* <img src={require('./image/Best_Donor.png')} alt="" className='Best_Donor' /> */}
                <h1 className='Donor_aa'>Member's Details Update</h1>
                </div><form action="" className='team_form'onSubmit={handlesubmit1}>
                <label htmlFor="id">ID :</label><br />
                <input type="text"  className="fields"  placeholder='id'
                value={Memberid}
                onChange={(e)=>setMemberID(e.target.value)}
                
                /><br />


            <label htmlFor="">Name :</label><br />
                <input type="text"  className="fields"  placeholder='Enter Your Full Name'
                value={fName}
                onChange={(e)=>setFName(e.target.value)}
                
                /><br />
                <label htmlFor="">Email :</label><br />
                <input type="email" placeholder="Enter Email" className="fields" 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                
                /> <br />
                <label htmlFor="">Phone Number :</label><br />
                <input type="tel" className="fields" placeholder='Enter Your Phone Number'
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
                /><br />
                <label htmlFor="">Address :</label><br />
                <input type="text"  placeholder='Enter Your address' className="fields" 
                value={address}
                onChange={(e)=>setAddress(e.target.value)}
                
                /><br />
                <label htmlFor="">Availability (Days/Times):</label><br />
                <input type="text" placeholder='Weekends, Evenings, ' className="fields" 
                value={availability}
                onChange={(e)=>setAvailability(e.target.value)}
                
                /><br />
                <label htmlFor="">Blood Type:</label>
                <select name="group" id="blood-group" form="group"
                value={blood}
                onChange={(e)=>setBloodType(e.target.value)}
                
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
                          <button value="Submit" type='Submit' className="submit_btn">UpdateTeam</button>
                          <button className="submit_btn" onClick={handleBack}>Back</button>
                
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
        <Footer/>
    </div>

    </>
  )
}
