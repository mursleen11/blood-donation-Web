/* 
import React, { useState } from "react";

import "./App.css";
import { useNavigate } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
  
    const data = {
      Email: email,
      Password: pass,
    };
  
    const url = "https://localhost:44390/api/user/login";
  
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
      // Check if login was successful or not
      if (result) {
        // If successful, redirect the user to the dashboard or any other page
        navigate("/Home");
      } else {
        // If not successful, show an error message to the user
        throw new Error( 'Login failed');
      }
    })
    .catch(error => {
      console.error('Login error:', error);
      alert("Login Failed: " + error.message);
    });
  };
  
  const handleSignup=()=>{
    navigate('/')
  }


  return (
    <div className="login_form">
      <form onSubmit={onSubmit} className="pri_log">
        <h1 className="title">DONATE BLOOD+</h1>
      
                    <img src={ require('./image/istockphoto-1266747084-170667a.webp')} alt="" className='donation-img2' />
        <div className="form-group">
          <br />
          <input
           value={email}
            type="email"
            placeholder="Email"
            className="lginput"
            id="Email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          /> <br /><br />
          <input
              value={pass}
             onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="********"
            className="lginput"
            name="password"
            required
          />
        </div>
        <div>
       <br />
        <button type="submit" className="lgbtn" >
          Login
        </button>
        
        <p className="btn-anchor">Don't have an account? <a href="" onClick={handleSignup}>SignUp</a></p>
        </div>
      </form>
    </div>
  );
}

export default Login; */
import React, { useState, useEffect } from "react";

import { GoogleLogin } from '@react-oauth/google';


import { useNavigate } from "react-router-dom";

export default function Login() {
  const [logoutTimer, setLogoutTimer] = useState(null);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [isUserActive, setIsUserActive] = useState(false);
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
  
    const data = {
      Email: email,
      Password: pass,
    };
  
    const url = "https://localhost:44390/api/user/login";
  
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
      // Check if login was successful or not
      if (result) {
        // If successful, redirect the user to the dashboard or any other page
        navigate("/Home");
      } else {
        // If not successful, show an error message to the user
        throw new Error( 'Login failed');
      }
    })
    .catch(error => {
      console.error('Login error:', error);
      alert("Login Failed: " + error.message);
    });
  };
  const handleGoogleLoginSuccess = (credentialResponse) => {
    if (credentialResponse && credentialResponse.credential) {
        navigate("/Home");
        // Mark user as active
        setIsUserActive(true);
        
        // Log the credential response to console
        console.log("Google credential response:", credentialResponse);
        console.log("Google credential response:", credentialResponse.clientid);
        // Start logout timer
        startLogoutTimer();
    } else {
        console.log("Invalid credential response");
    }
};

const handleGoogleLoginError = () => {
    console.log("Google Login Failed");
};

const startLogoutTimer = () => {
    // Set a timer for 30 minutes (30 * 60 * 1000 milliseconds)
    const timer = setTimeout(() => {
        // Logout the user after 30 minutes of inactivity
        logoutUser();
    }, 30 * 60 * 1000); // 30 minutes
    setLogoutTimer(timer);
};

const logoutUser = () => {
    // Clear the logout timer
    clearTimeout(logoutTimer);
    // Remove token from local storage
    localStorage.removeItem('token');
    // Navigate to login page
    navigate("/");
};

// Event listener to track user activity
useEffect(() => {
    let inactivityTimer;

    const resetInactivityTimer = () => {
        // Clear the previous inactivity timer
        clearTimeout(inactivityTimer);
        // Set a new inactivity timer
        inactivityTimer = setTimeout(() => {
            // Logout the user if no activity after login
            logoutUser();
        }, 20 * 1000); // 20 seconds
        //console.log("Inactivity timer reset.");
    };
    

    // Event listeners for user activity
    const activityEvents = ["mousemove", "keydown"];

    const handleActivity = () => {
        setIsUserActive(true);
        resetInactivityTimer();
        console.log("User activity detected.");
    };

    activityEvents.forEach(event => {
        document.addEventListener(event, handleActivity);
    });

    // Start the inactivity timer
    resetInactivityTimer();

    // Clean up function to remove event listeners
    return () => {
        activityEvents.forEach(event => {
            document.removeEventListener(event, handleActivity);
        });
        clearTimeout(inactivityTimer);
    };
}, []);
  return (
    <>
    <div className='loginContainer'>
    <section>     <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 

   <div className="signin"> 

    <div className="content"> 

     <h2>BLOOD DONATION</h2> 

     <form onSubmit={onSubmit}>
              <div className="form">
                <div className="inputBox">
                  <input
                    value={email}
                    type="email"
                    id="Email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required />
                  <i>Email</i>
                </div>
<br/>
                <div className="inputBox">
                  <input
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    type="password"
                    name="password"
                    required />
                  <i>Password</i>
                </div>

                <div className="links">
                  <p style={{ color: "white" }}>Don't have an account?</p>
                  <a href="/InputForm">Signup</a>
                </div>

                <div className="inputBox">
                  <input type="submit" value="Login" />
                </div>

                <GoogleLogin
                        onSuccess={handleGoogleLoginSuccess}
                        onError={handleGoogleLoginError}
                    />
              </div>
            </form>
    </div> 

   </div> 

  </section>
  </div> 
    </>
  )
}