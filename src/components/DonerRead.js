import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

const DonerRead = () => {
  debugger;

  const [Details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const navigate = useNavigate();
  const { id } = useParams(); 
  const handleBack = () => {
  navigate("/DonerList")
  };
  useEffect(() => {
    const fetchRead = async () => {
      try {
        setLoading(true); 
        const response = await axios.get(`https://localhost:44390/api/DonerPerson/Doner/${id}`);
        setDetails(response.data);
        console.log(response.data); 
      } catch (error) {
        console.error("Error fetching student details:", error);
        setDetails(null); 
      } finally {
        setLoading(false); 
      }
    };

    fetchRead();
  }, [id]); 

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (!Details) {
    return <div>Error: Doner details not found</div>;
  }

  return (
    <>
    <Navbar/>
    <div className="details-2">
    <div className="details">
      <h2>Doner Details</h2>
      <p><span style={{fontWeight:"bold"}}>1.  ID:</span> {Details.ID}</p>
      <p><span style={{fontWeight:"bold"}}>2.  FirstName:</span> {Details.FirstName}</p>
      <p><span style={{fontWeight:"bold"}}>3.  LastName:</span>{Details.LastName}</p>
      <p><span style={{fontWeight:"bold"}}>4.  FatherName:</span> {Details.FatherName}</p>
      <p><span style={{fontWeight:"bold"}}>5.  Email:</span> {Details.Email}</p>
      <p><span style={{fontWeight:"bold"}}>6.  IdCard:</span>{Details.IdCard}</p>
      <p><span style={{fontWeight:"bold"}}>7.  DateOfBirth:</span> {Details.DateOfBirth}</p>
      <p><span style={{fontWeight:"bold"}}>8.  Gender:</span> {Details.Gender}</p>
      <p><span style={{fontWeight:"bold"}}>9.  Country:</span>{Details.Country}</p>
      <p><span style={{fontWeight:"bold"}}>10.  Province:</span> {Details.Province}</p>
      <p><span style={{fontWeight:"bold"}}>11.  LastBloodDate:</span> {Details.LastBloodDate}</p>
      <p><span style={{fontWeight:"bold"}}>12.  BloodGroup:</span> {Details.BloodGroup}</p>
      <p><span style={{fontWeight:"bold"}}>13.  Weight:</span> {Details.Weight}</p>
      <p><span style={{fontWeight:"bold"}}>14.  AboutYourMessage:</span> {Details.AboutYourMessage}</p>
     

     {/*  <img src={Details.ImageURL} alt="Student Image" style={{ maxWidth: "100%", height: "auto" }} />
    */}
    <button onClick={handleBack}>Back</button>
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default DonerRead;
