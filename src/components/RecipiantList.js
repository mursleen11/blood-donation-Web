
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faTrash } from '@fortawesome/free-solid-svg-icons'; 
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import React, { useEffect, useState } from "react";
import DataTable, { SortOrder } from "react-data-table-component";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from '../Navbar';
import Footer from '../Footer';


export const RecipiantList = () => {
    const[Doner,setDoner]=useState([]);
    const[filteredStudents,setFilteredStudents]=useState([]);
    const[search,setSearch]=useState();
    const navigate = useNavigate();
    
    const [showDetails, setShowDetails] = useState(false);
    const [selectedStudentId, setSelectedStudentId] = useState(null);
    
    
    const handledelete = async (id) => {
        try {
            const response = await fetch(`https://localhost:44390/api/Receiver/delete/${id}`, {
                method: 'DELETE'
            });
    
            if (response.ok) {
                console.log(`Record with ID ${id} deleted successfully`);
             
                const updatedStudents = Doner.filter(std => std.id !== id);
                setDoner(updatedStudents);
                setFilteredStudents(updatedStudents);
            } else {
                throw new Error(`Failed to delete record with ID ${id}`);
            }
        } catch (error) {
            console.error(`Error deleting record with ID ${id}:`, error);
        }
    };
    
    
    
    
    
    
    
    
    
    const getDoner=async()=>{
    try{
        const response=await axios.get("https://localhost:44390/api/Receiver/StudentList")
        setDoner(response.data);
    setFilteredStudents (response.data);
    console.log(getDoner)
    }catch(error){
        console.log(error);
    }
    };
    const columns=[
        {
            name:'ID',
            selector:(row)=>row.ID,
            sortable:true,
        },
    {
        name:'PatientName',
        selector:(row)=>row.PatientName,
        sortable:true,
    },
    {
        name:'Phone',
        selector:(row)=>row.Phone
    },
    {
        name:'BloodGroup',
        selector:(row)=>row.BloodGroup
    },
    
    {
        name:'HospitalAddress',
        selector:(row)=>row.HospitalAddress
    }, 
    {
        name: 'Actions',
        cell: (row) => (
            <div className="actionButtons">
                <button className="actionButton" onClick={() => handleRead(row.ID)} title="ReadDetails">
                    <FontAwesomeIcon icon={faBookOpen} /> Read
                </button> 
                <button className="actionButton" onClick={() => handledelete(row.ID)} title="DeleteDoner">
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        ),
    },
    
        
    ]
    
     
    const handleRead = (id) => {
        const selectedDoner = Doner.find(DNR => DNR.ID === id);
        const checkoutUrl = `/RecipiantRead/${id}`; 
        navigate(checkoutUrl,{ state: { studentData: selectedDoner } });
        console.log(`Doner  ID: ${id}`);
    };
     
    useEffect(()=>{
        getDoner();
    },[])
  
    useEffect(() => {
        const result = Doner.filter((DNR) => {
            if (!DNR.PatientName) {
                console.error("Undefined fName:", DNR);
            }
            return DNR.PatientName && DNR.PatientName.toLowerCase().includes(search.toLowerCase());
        });
        setFilteredStudents(result);
    }, [search, ]);
        
    
    const handleContact = () => {
      navigate("/Contact");
    };

	return( 
	
	<div >
    <Navbar/>
            <div className="baner_about">
                <h2>Recipiant List</h2>
            </div>
            <DataTable 
columns={columns} data={filteredStudents}
pagination
fixedHeader
fixedHeaderScrollHeight="450px"
selectableRows={false}
selectableRowsHighlight
highlightOnHover
actions={<Link to={"/Receiver"} className="btn export btn-sm btn-info" >ADD Recipiant</Link>}
subHeader
subHeaderComponent={
	<input 
	type="text"
	placeholder="search here"
	className="w-25 form-control"
	value={search}
	onChange={(e)=>setSearch(e.target.value)}
	
	/>
	}
	
	/>
            <div className='we_six'>
                          <div>
                              <h2>Let's change the world, Join us now!</h2>
                              <p>Join us now to be part of a transformative journey. Together, we can change the world. Embrace the power </p>
                              <p>of collective action and make a lasting impact. Your contribution matters in shaping a better future for all.</p>
                          </div>
                          <div><button onClick={handleContact}>Contact Us</button></div>
                      </div>
              <Footer/>
	</div>
	)
};
export default RecipiantList;

