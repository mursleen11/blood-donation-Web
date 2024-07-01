import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons'; 
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from "react";
import DataTable, { SortOrder } from "react-data-table-component";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from '../Navbar';
import Footer from '../Footer';


export const TeamList = ({ isEnabled, toggleEnable }) => {
    const[Doner,setDoner]=useState([]);
    const[filteredStudents,setFilteredStudents]=useState([]);
    const[search,setSearch]=useState();
    const navigate = useNavigate();
    
    const [showDetails, setShowDetails] = useState(false);
    const [selectedStudentId, setSelectedStudentId] = useState(null);
    
    
    const handledelete = async (id) => {
        try {
            const response = await fetch(`https://localhost:44390/api/TeamPerson/delete/${id}`, {
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
        const response=await axios.get("https://localhost:44390/api/TeamPerson/Memberlist")
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
        name:'FullName',
        selector:(row)=>row.FullName,
        sortable:true,
    },
  
    {
        name:'Email',
        selector:(row)=>row.Email
    },
    
    {
        name:'Phone',
        selector:(row)=>row.Phone
    }, 
    {
      name:'Gender',
      selector:(row)=>row.Gender
  }, 
  {
    name: 'Actions',
    cell: (row) => (
        <div className="actionButtons">
            <button className="actionButton" onClick={() => handleRead(row.ID)} title="ReadDetails">
                <FontAwesomeIcon icon={faBookOpen} />
            </button>
            <button className="actionButton" onClick={() => handleUpdate(row.ID)} title="UpdateDoner">
                <FontAwesomeIcon icon={faEdit} />
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
        const checkoutUrl = `/ReadTeam/${id}`; 
        navigate(checkoutUrl,{ state: { DonerData: selectedDoner } });
        console.log(`Doner  ID: ${id}`);
    };
    
    
    
    
      const handleUpdate = (id) => {
        const selectedDoner = Doner.find(DNR => DNR.ID === id);
        const checkoutUrl = `/UpdateTeam/${id}`; 
        navigate(checkoutUrl,{ state: { DonerData: selectedDoner } });
        console.log(`Member  ID: ${id}`);
    };
    
    /* 
    const handleCheckout = (id) => {
        const selectedCD = cddetails.find((CD) => CD.ID === id);
        const checkoutUrl = `/checkout/${id}`; // Include ID in the URL
        navigate(checkoutUrl,{ state: { studentData: selectedStudent } });
        console.log(`Checked out CD with ID: ${id}`);
      };
      */
    
    useEffect(()=>{
        getDoner();
    },[])
  
    useEffect(() => {
        const result = Doner.filter((DNR) => {
            if (!DNR.FullName) {
                console.error("Undefined fName:", DNR);
            }
            return DNR.FullName && DNR.FullName.toLowerCase().includes(search.toLowerCase());
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
                <h2>Team List</h2>
            </div>
            <DataTable 
columns={columns} data={filteredStudents}
pagination
fixedHeader
fixedHeaderScrollHeight="450px"
selectableRows={false}
selectableRowsHighlight
highlightOnHover
actions={<Link to={"/TeamMember"} className="btn export btn-sm btn-info" >ADD Member</Link>}
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
export default TeamList

