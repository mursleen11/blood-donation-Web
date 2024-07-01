import React, { useState,useEffect } from 'react'
import { useNavigate, useParams,useLocation } from 'react-router-dom'
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function Update() {
  const { id } = useParams(); 
  const [fName, setFName] =useState('');
const [lName, setLName] =useState('');
const [fatherName, setFatherName] =useState('');
const[email,setEmail]=useState("")
const[idCard,setIdCard]=useState("")

const [address, setAddress] =useState('');
const [dateofbirth, setDateofBirth] =useState('');
const [gender, setGender] =useState('');
const[country,setCountry]=useState("")
const[province,setProvince]=useState("")
const[city ,setCity ]=useState("")
const[lastDonate ,setLastDonate  ]=useState("")

const[userId ,setUserId  ]=useState("")
const[bloodGroup ,setBloodGroup]=useState("")
const[weight ,setWeight ]=useState("")
const[message ,setMessage  ]=useState("")
const[phone ,setPhone ]=useState("")
const[medical,setMedical]=useState("")
const navigate = useNavigate();
const location = useLocation();




useEffect(() => {
  if (location.state && location.state.DonerData) {
      const {
    ID,
    FirstName,
    LastName,
    FatherName,
    Email,
    IdCard,
    Address ,
    DateOfBirth ,
    Gender,
    Country,
    Province,
    City,
    LastBloodDate,
    BloodGroup,
    Weight,
    AboutYourMessage,
    PhoneNumber,
    Medical,
   
   } = location.state.DonerData;
   setUserId(ID);
   setFName(FirstName);
   setLName(LastName);
      setFatherName(FatherName);
      setEmail(Email);
  setIdCard(IdCard);
  setAddress(Address);
  setDateofBirth(DateOfBirth);
  setGender(Gender)

  setCountry(Country)
  setProvince(Province)
  setCity(City)
  setLastDonate(LastBloodDate)
  setBloodGroup(BloodGroup)
  setWeight(Weight)

  setMessage(AboutYourMessage)
  setPhone(PhoneNumber)
  setMedical(Medical)
  }
}, [location]);
const handlesubmit = async (e) => {
    e.preventDefault();
    const data = {
        ID: userId,
        FirstName: fName,
        LastName: lName,
        FatherName: fatherName,
        Email: email,
        IdCard: idCard,
        Address: address,
        DateOfBirth: dateofbirth,
        Gender: gender,
        Country: country,
        Province: province,
        City: city,
        LastBloodDate: lastDonate,
        BloodGroup: bloodGroup,
        Weight: weight,
        AboutYourMessage: message,
        PhoneNumber: phone,
        Medical: medical,
        IsActive: 1,
    };
    debugger;
    console.log(data)

 

        // Assuming cdId is the variable that holds the ID of the CD you want to update
        const url = `https://localhost:44390/api/DonerPerson/DonerUpdate/${id}`;
      
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
          alert('Failed to update Doner data');
        }
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
                <h2>DONATE BLOOD</h2>
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
                <h1 className='Donor_aa'>Donor's Details Update</h1>
                </div> <form onSubmit={handlesubmit} >

<label htmlFor="borrowerName">ID:</label>
<input
  style={{color:"red"}}
  type="text"
  id="userId"
  value={userId}
  onChange={(e) => setUserId(e.target.value)}
  required
/>
      <br></br>
            <label htmlFor="">Name :</label>
            <input type="text" placeholder="First Name" className="f_name1" 
            required 
            value={fName} firstName="firstName" onChange={(e) => setFName(e.target.value)}/>
            <input type="text"  placeholder="Last Name" className="f_name1" 
            required 
            value={lName} firstName="firstName" onChange={(e) => setLName(e.target.value)}/><br />
            <label htmlFor="">Father Name :</label><br />
            <input type="text"  placeholder="Father Name" className="fields" 
            required 
            value={fatherName}  onChange={(e) => setFatherName(e.target.value)}/><br />
            <label htmlFor="">Email :</label><br />
            <input type="email" placeholder="Email" className="fields" 
             value={email}  onChange={(e) => setEmail(e.target.value)}
            /> <br />
            <label htmlFor="">Id Card :</label><br />
            <input type="tel" placeholder="Enter Your ID Card Number" className="fields"
             value={idCard}  onChange={(e) => setIdCard(e.target.value)}
            /><br />
            <label htmlFor="">Address :</label><br />
            <input type="text"  placeholder='Enter Your address' className="fields"
             value={address}  onChange={(e) => setAddress(e.target.value)}
            /><br />
            <label htmlFor="date">Date of Birth :</label>
            <input
               value={dateofbirth}  onChange={(e) => setDateofBirth(e.target.value)}
            type="text"
            name="date"
            /* value={dob}
            onChange={(e) => setDOB(e.target.value)} */
            />
            {/* <label htmlFor="number">Age :</label>
            <input type="number" /> */}
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

            <label htmlFor="Country">Country :</label>
            <select name="Country" id="Country" 
             value={country} city="city" onChange={(e) => setCountry(e.target.value)}  >
                <option value="city">Select Your Country</option>
                <option value="Afghanistan">Afghanistan</option>
                <option value="Algeria">Algeria</option>
                <option value="Angola">Angola</option>
                <option value="Gujranwala">Australia</option>
                <option value="Belgium">Belgium</option>
                <option value="	Brazil">Brazil	</option>
                <option value="Canada">Canada</option>
                <option value="	Egypt">	Egypt</option>
                <option value="	France">	France</option>
                <option value="	India">	India</option>
                <option value="Iran">Iran</option>
                <option value="	North Korea">	North Korea</option>
                <option value="	New Zealand">	New Zealand</option>
                <option value="Nepal">Nepal</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Qatar">Qatar</option>
                <option value="South Africa">South Africa</option>
                <option value="South Korea">South Korea</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Switzerland">Switzerland</option>
            </select><br /><br /> 
            <label htmlFor="province">Province :</label>
            <select name="Province" id="Province" 
             value={province} province="province" onChange={(e) => setProvince(e.target.value)}  >
            <option value="city">Select Your Province</option>
                <option value="Punjab">Punjab</option>
                <option value="Sindh">Sindh</option>
                <option value="Khyber">Khyber Pakhtunkhwa</option>
                <option value="Balochistan">Balochistan</option>
            </select >
            <label htmlFor="city">City :</label>
            <select name="city" id="city" 
             value={city} city="city" onChange={(e) => setCity(e.target.value)}  >
                <option value="city">Select Your City</option>
                <option value="Lahore">Lahore</option>
                <option value="Faisalabad">Faisalabad</option>
                <option value="Rawalpindi">Rawalpindi</option>
                <option value="Gujranwala">Gujranwala</option>
                <option value="Peshawar">Peshawar</option>
                <option value="Multan">Multan</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Islamabad">Islamabad</option>
                <option value="Quetta">Quetta</option>
                <option value="Bahawalpur">Bahawalpur</option>
                <option value="Sargodha">Sargodha</option>
                <option value="Sukkur">Sukkur</option>
                <option value="Sialkot">Sialkot</option>
                <option value="Rahim">Rahim Yar Khan</option>
                <option value="Sheikhupura">Sheikhupura</option>
                <option value="Jhelum">Jhelum</option>
                <option value="Khanpur">Khanpur</option>
            </select><br/>
              <label>Phone:</label>
              <input type="text"  placeholder="PhoneNumber" className="fields" 
            required 
            value={phone}  onChange={(e) => setPhone(e.target.value)}/><br />
            <h2>Donor's Medical Details</h2>
            <p>When did you last Donate?</p>
            <input
            type="text"
            name="date"
            value={lastDonate}
            onChange={(e) => setLastDonate(e.target.value)} 
            />
            <br /><br />
            <label htmlFor="">Medical Condition:</label><br />
            <input type="text" placeholder="Medical Condition" className="f_name1" 
            required 
            value={medical} firstName="firstName" onChange={(e) => setMedical(e.target.value)}/>
<br /><br />

            <label htmlFor="bloodgroup">Blood Group :</label>
            <select name="group" id="blood-group" form="group"
            value={bloodGroup}
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
          </select><br></br>
          <label htmlFor="number">Weight :</label>
          <input type="number" 
          value={weight}
          onChange={(e)=>setWeight(e.target.value)}
          /><br />
            
            <label htmlFor="">Drop Your Message :</label>
            <textarea name="" id="" cols="67" rows="10" placeholder="Message here!"
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
            
            ></textarea><br />
            <button type="submit" value="Submit">Donate Now</button>
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
