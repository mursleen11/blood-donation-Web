import React, { useState } from 'react'
import Navbar from '../Navbar';

export default function FeedBack() {
  const [id, setId] =useState('');
  const [name, setName] =useState('');
  const[email,setEmail]=useState("")
  const[feedback,setFeedBack]=useState("")


  const handlesubmit = async (e) => {
     
    debugger;
    e.preventDefault();
  
 
		
		debugger;
		const data = {
      Donerid:id,
			Name: name,
      FeedBack1:feedback,
			Email: email,
      IsActive:1,
      
		
		};
	console.log('Data ',data);
	const url = "https://localhost:44390/api/FeedBack/Doner";
	
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
			alert("The IdCard in already Exist  ");
		  });
  }






  return (
    <>
    <Navbar/>
    <div >
    <div>
      <form onSubmit={handlesubmit}>
      <div>
          <label htmlFor="name">Your ID:</label><br/>
          <input type="text" id="id" name="id" placeholder="Enter your ID number from list"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required />
        </div>
        <div>
          <label htmlFor="name">Your Name:</label><br/>
          <input type="text" id="name" name="name" placeholder="Enter your name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          required />
        </div>
        <div>
          <label htmlFor="email">Your Email:</label><br/>
          <input type="email" id="email" name="email" placeholder="Enter your email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          conChange
          required />
        </div>
        <div>
          <label htmlFor="feedback">Your Feedback:</label><br/>
          <textarea id="feedback" name="feedback" rows="4" placeholder="Enter your feedback"
          value={feedback}
          onChange={(e) => setFeedBack(e.target.value)}
          required></textarea>
        </div>
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
    </div>
    </>
  );
}
