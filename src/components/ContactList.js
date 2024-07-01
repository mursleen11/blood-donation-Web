import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/* import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';  */
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'; 
import axios from 'axios';
import React, { useEffect, useState } from "react";
import DataTable, { SortOrder } from "react-data-table-component";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from '../Navbar';
import Footer from '../Footer';
import DonerRead from './DonerRead';


export const DonerList = () => {
    const[Doner,setDoner]=useState([]);
    const[filteredStudents,setFilteredStudents]=useState([]);
    const[search,setSearch]=useState();
    const navigate = useNavigate();
    
    const [showDetails, setShowDetails] = useState(false);
    const [selectedStudentId, setSelectedStudentId] = useState(null);
    
/*     
    const handledelete = async (id) => {
        try {
            const response = await fetch(`https://localhost:44390/api/DonerPerson/delete/${id}`, {
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
    
     */
    
    
    
    
    
    
    
    const getDoner=async()=>{
    try{
        const response=await axios.get("https://localhost:44390/api/ContactPerson/Contactlist")
        setDoner(response.data);
    setFilteredStudents (response.data);
    console.log(getDoner)
    }catch(error){
        console.log(error);
    }
    };
    const columns=[
        {
            name:'id',
            selector:(row)=>row.ID,
            sortable:true,
        },
    {
        name:'FirstName',
        selector:(row)=>row.FirstName,
        sortable:true,
    },
    {
        name:'Email',
        selector:(row)=>row.Email
    },
    {
        name:'Subject',
        selector:(row)=>row.Subject
    },
    
  
 
    {
        name: 'Actions',
        cell: (row) => (
            <div className="actionButtons">
                <button className="actionButton" onClick={() => handleRead(row.ID)} title="ReadDetails">
                    <FontAwesomeIcon icon={faBookOpen} />
                </button>
              {/*   <button className="actionButton" onClick={() => handleUpdate(row.ID)} title="UpdateDoner">
                    <FontAwesomeIcon icon={faEdit} />
                </button>
                <button className="actionButton" onClick={() => handledelete(row.ID)} title="DeleteDoner">
                    <FontAwesomeIcon icon={faTrash} />
                </button> */}
            </div>
        ),
    }, 
        
    ]

    
    
/*       const handleUpdate = (id) => {
        const selectedDoner = Doner.find(DNR => DNR.ID === id);
        const checkoutUrl = `/Update/${id}`; 
        navigate(checkoutUrl,{ state: { DonerData: selectedDoner } });
        console.log(`Doner  ID: ${id}`);
    };
     */
    const handleRead = (id) => {
        const selectedDoner = Doner.find(DNR => DNR.ID === id);
        const checkoutUrl = `/ConatctRequestRead/${id}`; 
        navigate(checkoutUrl,{ state: { DonerData: selectedDoner } });
        console.log(`Doner  ID: ${id}`);
    };
    
    useEffect(()=>{
        getDoner();
    },[])
    useEffect(() => {
        const result = Doner.filter((DNR) => {
            if (!DNR.FirstName) {
                console.error("Undefined fName:", DNR);
            }
            return DNR.FirstName && DNR.FirstName.toLowerCase().includes(search.toLowerCase());
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
         
                <h2>Contact List</h2>
            </div>
            <DataTable 
columns={columns} data={filteredStudents}
pagination
fixedHeader
fixedHeaderScrollHeight="450px"
selectableRows={false}
selectableRowsHighlight
highlightOnHover
/* actions={<Link to={"/Donate"} className="btn export btn-sm btn-info" >ADD Doner</Link>} */
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
   
	/> {showDetails && <DonerRead studentId={selectedStudentId} />}
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
export default DonerList

