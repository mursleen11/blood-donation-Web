
import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
function Home(){
    const navigate = useNavigate();
    const [modal, setModal] =useState(false);
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
    
  const handleRequest = () => {
    navigate('/Receiver');
}
    const handleContact = () => {
        navigate('/Contact');
    }
    const handledonate = () => {
        navigate('/Donate');
    }
    const handleTeam = () =>{
        navigate('/TeamMember');
    }
    if(modal){
        document.body.classList.add('active-modal')
    }else{
        document.body.classList.remove('active-modal')
    }
    return(
        <>
        <div className="main-div">
            <Navbar/>
        {/* *************       NAVBAR     ************** */}
        
            {/* <div>
                <div className="sectwo">
                    <h1>Search the Donors</h1>
                    <div className="line"></div>
                    <div>
                        <select name="gender" className="inpt1">
                           <option selected="selected" value="male">City</option>
                           <option value="female">Female</option>
                        </select>
                        <select name="gender" className="inpt1">
                           <option selected="selected" value="male">Blood</option>
                           <option value="female">Female</option>
                        </select>
                        <button className="btn1">Search</button>
                    </div>
                </div>
            </div> */}


            {/* ******************     Banner        **************** */}

            <div>
                <div className="banner">
                    <p>Donate Blood, Save Life!</p>
                    <h1>YOUR BLOOD</h1>
                    <h1>CAN BRING SMILE</h1>
                    <h1>IN OTHER PERSON FACE</h1>
                    <div>
                    <button className="btn2" onClick={handledonate}>DONTAE NOW</button>
                    <button className="btn2">Call Now: +92-3053135437</button>
                    </div>
                </div>
            </div>


            {/*********** Register Now    and     Donate Now   wala paragraph ********/}
            <div>
                <div className='register1'>
                <div className='register_now'>
                        
                        <div>
                            <h1>Request Now For Blood</h1>
                            <p>Your generous act can mean the gift of life for someone in need. </p>
                            <p> By donating blood, you have the power to save lives and make a profound impact in your community</p>
                        </div>
                        <div><img src={require('./image/right-arrow.png')} alt="" onClick={handleRequest} /></div>
                        
                    </div>
                    <div className='donate_now'>
                        <div>
                            <h1>Donate Now</h1>
                            <p>Support the gift of life—consider blood donation. Your contribution can  </p>
                            <p>save lives. Act now to make a meaningful impact in your community.</p>
                        </div>
                        <div><img src={require('./image/right-arrow.png')} alt=""  onClick={handledonate}/></div>
                    </div>
                </div>
            </div>





            {/* **************            DONATION PROCESS        ************* */}

            <div className='donation-process'>
                <div>
                    <h1>DONATION PROCESS</h1>
                    <p>The donation process from the time you arrive center until the time you leave</p>
                </div>
                <div className="don_process">
                <div>
                    <img src={ require('./image/process_1.webp')} alt="" className='donation-img' />
                    <h2>REGISTRATION</h2>
                    <p>You need to complete a very simple registration form. Which contains all required contact information to enter in the donation process.</p>
                </div>
                <div>
                    <img src={ require('./image/process_2.webp')} alt="" className='donation-img'/>
                    <h2>SCREENING</h2>
                    <p>A drop of blood from your finger will take for simple test to ensure that your blood iron levels are proper enough for donation process.</p>
                </div>
                <div>
                    <img src={ require('./image/process_3.webp')} alt="" className='donation-img'/>
                    <h2>DONATION</h2>
                    <p>After ensuring and passed screening test successfully you will be directed to a donor bed for donation. It will take only 6-10 minutes.</p>
                </div>
                </div>
            </div>





            {/* **************   JOIN WITH US AND SAVE LIFE   ************ */}

            
            {/* ************     DONAOR OPINION       *********** */}
            <div className='secfour'>
                <div><p>Awesome Words From Members</p></div>
                <div><h1>JOIN WITH US AND SAVE LIFE</h1></div>
            </div>


            <div className='secfive'>
                <div className='test_donar'>
                    <h1>DONAOR OPINION</h1>
                    <p>
                    I proudly donate blood on a regular basis because it gives others something they desperately need to survive. Just knowing I can make a difference in someone else’s life makes me feel great!
                    </p>
                    <div className='sunny'>
                        <h3>Muhammad Hussnain</h3>
                        <p>HOD, LAHORE LEADS UNIVERSTY</p>
                    </div>
                </div>
                <div><img src={ require('./image/testimonal.webp')} className='img_test' alt="" /></div>
            </div>




            {/* ************************    Gallery     ******************* */}

            <div className='gallery'>
                <p>Supporter Words</p>
                <h1>GET INVOLVE FOR CHANGE</h1>
                <div>
                <img src={ require('./image/gallery_2.webp')} className='img_gallery' alt="" />
                <img src={ require('./image/gallery_3.webp')} className='img_gallery' alt="" />
                <img src={ require('./image/doner.jpeg')} className='img_gallery' alt="" />
                <img src={ require('./image/download.jpeg')} className='img_gallery' alt="" />
                </div>
                <div>
                <img src={ require('./image/gallery_6.webp')} className='img_gallery' alt="" />
                <img src={ require('./image/gallery_5.webp')} className='img_gallery' alt="" />
                <img src={ require('./image/download (1).jpeg')} className='img_gallery' alt="" />
                <img src={ require('./image/gallery_8.webp')} className='img_gallery' alt="" />
                </div>
            </div>



            {/* ************    Become A Part Of Great Work Today   *********** */}

            <div className='secthree'>
                <div className='become-para'>
                <h1>Become A Part Of Great Work Today</h1>
                <p>You can give blood at any of our blood donation venues all over the world.
                    We have total sixty thousands donor centers and visit thousands of other venues on various occasions.</p>
                <button onClick={handleTeam}>Join Us Team</button>
               
                
                </div>
            </div>





            {/* ****************      CAMPAIGN SPONSORS     *************** */}

            <div className='campaign'>
                <div>
                <div className='iner_campaign'>
                    <h1>CAMPAIGN SPONSORS</h1>
                    <p>We appritiate our honorable sponors. The sponsors who give their valuable amount to fulfill our mission.</p>
                </div>
                <div className='iner_campaign2'>
                <img src={ require('./image/logo_4.webp')} className='img_test2' alt="" />
                <img src={ require('./image/logo_5.webp')} className='img_test2' alt="" />
                <img src={ require('./image/logo_6.webp')} className='img_test2' alt="" />
                </div>
                </div>
            </div>



            {/* ************    Let's change the world    ************** */}

            <div className='we_six'>
                <div>
                    <h2>Let's change the world, Join us now!</h2>
                    <p>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but </p>
                    <p>occasionally circumstances occur in which toil and pain can procure reat pleasure. </p>
                </div>
                <button onClick={handleContact}>Contact Us</button>
            </div>


            {/* ********************   Footer     ******************** */}

            <Footer/>
        </div>
        </>
    )
}
export default Home