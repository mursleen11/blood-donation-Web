import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import InputForm from "./InputForm";
import Login from './Login';
import Home from './Home'
import About from './About';
import Contact from './Contact';
import Donate from './Donate';
import DonationsRead from './components/DonationsRead';
import HealthRead from './components/HealthRead';
import BloodBank from './components/BloodBank';
import Explore from './components/Explore';
import ExploreNow from './components/ExploreNow';
import TeamList from './components/TeamList';
import DonerList from './components/DonerList';
import Update from './components/Update';
import UpdateTeam from './components/UpdateTeam';
import TeamMember from './components/TeamMember';
import Receiver from './components/Receiver';
import RecipiantList from './components/RecipiantList';
import DonerRead from './components/DonerRead';
import RecipiantRead from './components/RecipiantRead';
import ReadTeam from './components/ReadTeam';
import ContactList from './components/ContactList';
import ConatctRequestRead from './components/ConatctRequestRead';
import FeedBack from './components/FeedBack';
function App() {
  return (
    <Router>
      
      <div className="App">
        {/* Define routes using the <Routes> component */}
        <Routes>
          {/* Define the route for the InputForm component */}
          <Route path="/" element={<Login />} />
          <Route path="/InputForm" element={<InputForm />} />

          {/* Define the route for the Login component with exact path */}
      

          {/* Add other routes as needed */}
          <Route path='/home' element={<Home /> }/>
          <Route path='/about' element={<About/>}/>
          <Route path='/donate' element={<Donate/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/DonerList' element={<DonerList/>}/>
          <Route path='/recipiantlist' element={<RecipiantList/>}/>
          <Route path='/DonationsRead' element={<DonationsRead/>}/>
          <Route path='/HealthRead' element={<HealthRead/>}/>
          <Route path='/BloodBank' element={<BloodBank/>}/>
          <Route path='/Explore' element={<Explore/>}/>
          <Route path='/ExploreNow' element={<ExploreNow/>}/>
          <Route path='/DonerRead/:id' element={<DonerRead/>}/>
          <Route path='/FeedBack' element={<FeedBack/>}/>
          <Route path='/ConatctRequestRead/:id' element={<ConatctRequestRead/>}/>
          <Route path='/ContactList' element={<ContactList/>}/>
          <Route path='/ReadTeam/:id' element={<ReadTeam/>}/>
          <Route path='/RecipiantRead/:id' element={<RecipiantRead/>}/>
          <Route path='/TeamList' element={<TeamList/>}/>
          <Route path='/TeamMember' element={<TeamMember/>}/>
          <Route path='/Receiver' element={<Receiver/>}/>
          <Route path='/Update/:id' element={<Update/>}/>
          <Route path='/UpdateTeam/:id' element={<UpdateTeam/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;