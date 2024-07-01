/* // App.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function InputForm() {
  const [click, setClick] = useState(false);
const[fname,setFname]=useState('')
const[lname,setLname]=useState('')  
const[email,setEmail]=useState('')
const[password,setPassword]=useState('')
const[confirmpassword,setConfirmpassword]=useState('')
const[gender,setGender]=useState('')

const handleSubmit=(e)=>{
  if (password !== confirmpassword) {
    alert("Password and Confirm Password must match.");
    return;
  }
  debugger;
  e.preventDefault();
  debugger;
  const data = {
    FirstName: fname,
    LastName:lname,
    Email: email,
    Password: password,
    ConfirmPassword: confirmpassword,
    Gender: gender,
    IsActive: 1
  };
  console.log('Data ',data);
  const url = "https://localhost:44390/api/user/information";

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
      alert("Signup is  successfull");
    }
  })
  .catch(error => {
    alert("Email is Already Exist . " + error.message);
  });
}
const navigate =useNavigate();
  const handleLoginClick=()=>{
    navigate('/login');
  }


return (
    <div className="App_inputform">
      <fieldset>
        <h1>Registration Form</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
          value={fname}
          onChange={(e)=>setFname(e.target.value)}
            className="name"
            type="text"
            name="firstname"
            id="firstname"
            placeholder="First Name"
            required
          />
          <input
           value={lname}
           onChange={(e)=>setLname(e.target.value)}
            className="name"
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Last Name"
            required
          />
          <br />
          <input
           value={email}
           onChange={(e)=>setEmail(e.target.value)}
           pattern="[a-zA-Z0-9._%+-]+@gmail\.com"
           title="Please enter a valid email address"
            className="email"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
          <br />
          <input
           value={password}
           pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}"
           title="Password must contain at least 8 characters, including at least one number, one uppercase letter, one lowercase letter, and one special character"
           
           onChange={(e)=>setPassword(e.target.value)}
            type="text"
            placeholder="Password"
            className="password"
            required
          />
          <br />
          <input
     value={confirmpassword}
     pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}"
     title="Password must contain at least 8 characters, including at least one number, one uppercase letter, one lowercase letter, and one special character"
     
     onChange={(e)=>setConfirmpassword(e.target.value)}
            type="text"
            placeholder="Confirm Password"
            className="password"
          />
          <br />
          <input
            type="radio"
            name="gender"
            value="Male"
            id="male"
            checked={gender==='Male'}
            onChange={(e)=>setGender(e.target.value)}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="Female"
            id="female"
            checked={gender==='Female'}
            onChange={(e)=>setGender(e.target.value)}
          />
          Female
          <input
            type="radio"
            name="gender"
            value="Other"
            id="other"
            checked={gender==='Other'}
            onChange={(e)=>setGender(e.target.value)}
          />
          Other
          <br /><br />
          <button type="submit" >
            Create Account
          </button><br />
          <br />
          <div>
            
            <p className="btn-anchor">Already have an account?<a href="" onClick={handleLoginClick}>Login</a></p>
            </div>
        </form>
      </fieldset>
    </div>
  );
}

export default InputForm; */





import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function InputForm() {

  const [click, setClick] = useState(false);
  const[fname,setFname]=useState('')
  const[lname,setLname]=useState('')  
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[confirmpassword,setConfirmpassword]=useState('')
  const[gender,setGender]=useState('')
  
  const handleSubmit=(e)=>{
    if (password !== confirmpassword) {
      alert("Password and Confirm Password must match.");
      return;
    }
    debugger;
    e.preventDefault();
    debugger;
    const data = {
      FirstName: fname,
      LastName:lname,
      Email: email,
      Password: password,
      ConfirmPassword: confirmpassword,
      Gender: gender,
      IsActive: 1
    };
    console.log('Data ',data);
    const url = "https://localhost:44390/api/user/information";
  
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
        alert("Signup is  successfull");
      }
    })
    .catch(error => {
      alert("Email is Already Exist . " + error.message);
    });
  }
  return (
    <>
    <div className='loginContainer'>
    <section>    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 

   <div className="signin"> 

    <div className="content"> 

     <h2>Sign In</h2> 
<form onSubmit={handleSubmit}>
     <div className="form"> 

      <div className="inputBox"> 
        
       <input  value={fname}
          onChange={(e)=>setFname(e.target.value)}
            className="name"
            type="text"
            name="firstname"
            id="firstname"
              required
            /> <i>FirstName</i> 

      </div> 
      <div className="inputBox"> 
        
       <input    value={lname}
           onChange={(e)=>setLname(e.target.value)}
            className="name"
            type="text"
            name="lastname"
            id="lastname"
   
            required
            /> <i>LastName</i> 

      </div> 
      <div className="inputBox"> 
        
       <input        
             value={email}
           onChange={(e)=>setEmail(e.target.value)}
           pattern="[a-zA-Z0-9._%+-]+@gmail\.com"
           title="Please enter a valid email address"
            className="email"
            type="email"
            name="email"
            id="email"
     
            required/> <i>Email</i> 

      </div> 

      <div className="inputBox"> 
       <input    
       value={password}
           pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}"
           title="Password must contain at least 8 characters, including at least one number, one uppercase letter, one lowercase letter, and one special character"
           
           onChange={(e)=>setPassword(e.target.value)}
            type="text"
        
            className="password"
            required/> <i>Password</i>  

      </div> 
      <div className="inputBox"> 
       <input  
        value={confirmpassword}
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}"
        title="Password must contain at least 8 characters, including at least one number, one uppercase letter, one lowercase letter, and one special character"
        
        onChange={(e)=>setConfirmpassword(e.target.value)}
         type="text"
     
         className="password"
         required/> <i>ConfirmPassword</i>

      </div> 
      <div className="" style={{color:"white"}}> 
      <label htmlFor="">Gender :</label><br /><br/>
       <input    type="radio"
            name="gender"
            value="Male"
            id="male"
            checked={gender==='Male'}
            onChange={(e)=>setGender(e.target.value)}/> <i>Male</i>  
       <input  type="radio"
            name="gender"
            value="Female"
            id="female"
            checked={gender==='Female'}
            onChange={(e)=>setGender(e.target.value)}/> <i>FeMale</i>  
       <input  type="radio"
            name="gender"
            value="Other"
            id="other"
            checked={gender==='Other'}
            onChange={(e)=>setGender(e.target.value)}/> <i>Other</i>  

      </div> 

      <div className="links"> <p style={{color:"white"}}>Already have an account?</p> <a href="/">Login</a> 

      </div> 

      <div className="inputBox"> 

       <input type="submit" value="SignUP" /> 

      </div> 

     </div> 
     </form>
    </div> 

   </div> 

  </section>
  </div> 
    </>
  )
}