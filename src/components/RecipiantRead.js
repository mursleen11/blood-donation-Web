import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

const RecipiantRead = () => {
  debugger;

  const [Details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const navigate = useNavigate();
  const { id } = useParams(); 
  const handleBack = () => {
  navigate("/RecipiantList")
  };
  useEffect(() => {
    const fetchRead = async () => {
      try {
        setLoading(true); 
        const response = await axios.get(`https://localhost:44390/api/Receiver/give/${id}`);
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
    return <div>Error: Recipipiant details not found</div>;
  }

  return (
    <>
    <Navbar/>
    <div className="details-2">
    <div className="details">
      <h2>Doner Details</h2>
  


      <p><span style={{fontWeight:"bold"}}>1.  ID:</span> {Details.ID}</p>
      <p><span style={{fontWeight:"bold"}}>2.  PatientName:</span> {Details.PatientName}</p>
      <p><span style={{fontWeight:"bold"}}>3.  Phone:</span>{Details.Phone}</p>
      <p><span style={{fontWeight:"bold"}}>4.  IdCard:</span> {Details.IdCard}</p>
      <p><span style={{fontWeight:"bold"}}>5.  HospitalAddress:</span> {Details.HospitalAddress}</p>
      <p><span style={{fontWeight:"bold"}}>6.  IdCard:</span>{Details.IdCard}</p>
      <p><span style={{fontWeight:"bold"}}>7.  RequiredDate:</span> {Details.RequiredDate}</p>
 
      <p><span style={{fontWeight:"bold"}}>9.  BloodGroup:</span>{Details.BloodGroup}</p>
      <p><span style={{fontWeight:"bold"}}>10.  BloodReceiveBefore:</span> {Details.BloodReceiveBefore}</p>
      <p><span style={{fontWeight:"bold"}}>11.  AboutYourMessage:</span> {Details.AboutYourMessage}</p>
       <img src={Details.ImageURL} alt="Recipiant Image" style={{ maxWidth: "100%", height: "auto" }} />
    
    <button onClick={handleBack}>Back</button>
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default RecipiantRead;
