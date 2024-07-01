import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

const ReadTeam = () => {
  debugger;

  const [Details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const navigate = useNavigate();
  const { id } = useParams(); 
  const handleBack = () => {
  navigate("/TeamList")
  };
  useEffect(() => {
    const fetchRead = async () => {
      try {
        setLoading(true); 
        const response = await axios.get(`https://localhost:44390/api/TeamPerson/Member/${id}`);
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
      <p><span style={{fontWeight:"bold"}}>2.  FullName:</span> {Details.FullName}</p>
      <p><span style={{fontWeight:"bold"}}>3.  Email:</span>{Details.Email}</p>
      <p><span style={{fontWeight:"bold"}}>4.  Phone:</span> {Details.Phone}</p>
      <p><span style={{fontWeight:"bold"}}>5.  Address:</span> {Details.Address}</p>
      <p><span style={{fontWeight:"bold"}}>6.  Availability:</span>{Details.Availability}</p>
      <p><span style={{fontWeight:"bold"}}>7.  BloodType:</span> {Details.BloodType}</p>
 
      <p><span style={{fontWeight:"bold"}}>9.  Age:</span>{Details.Age}</p>
      <p><span style={{fontWeight:"bold"}}>10.  Gender:</span> {Details.Gender}</p>

    
    <button onClick={handleBack}>Back</button>
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default ReadTeam;
