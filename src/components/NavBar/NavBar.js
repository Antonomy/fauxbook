import { Link } from 'react-router-dom';
import './NavBar.css'
import { logOut } from '../../utilities/users-service';

export default function NavBar({setUser}) {
  function handleLogOut() {
    logOut();
    setUser(null);
}
  return (
    <nav className='body'>
      <ul>
        <li>
       <Link to="/newsfeed" className='logo' class="tooltip" data-tooltip="Logo" id="btn_logo">LOGO</Link>
       &nbsp; | &nbsp;
       </li>

       <li>
      <Link to="/newsfeed" class="tooltip" data-tooltip="Home" id="btn_home">HOMEICON</Link>
      &nbsp; | &nbsp;
      </li>
      
      <li>
      <Link to="/about" class="tooltip" data-tooltip="About" id="btn_About">About</Link>
      &nbsp; | &nbsp;
      </li>

      <li>
      <Link to="/friends" class="tooltip" data-tooltip="Friends" id="btn_friends">Friends</Link>
      &nbsp; | &nbsp;
      </li>
      
      <li>
      <Link to="/requests" class="tooltip" data-tooltip="Requests" id="btn_requests">Requests</Link>
      &nbsp; | &nbsp;
      </li>
     
      <li>
      <Link to="/photos" class="tooltip" data-tooltip="Photos" id="btn_photos">Photos</Link>
      &nbsp; | &nbsp;
      </li>

      <br />


      {/* &nbsp;TO BE REMOVED - only here for convenience: &nbsp; */}
      
      <br />

    <li>
        <button>
         <Link to="/posts" class="tooltip" data-tooltip="Profile" id="btn_profile">Profile</Link>
      &nbsp; | &nbsp;
      </button>    
    </li>

    
      
      <li>
      <Link to="/policy" class="tooltip" data-tooltip="Policy" id="btn_policy">Policy</Link>
      &nbsp; | &nbsp;
      </li>
     {/* <li>
      <Link to="/login">Login</Link>
      &nbsp; | &nbsp;
      </li>
      
      <li>
      <Link to="/forgotpassword">Forgot Password</Link>
      &nbsp; | &nbsp;
      </li> */}
      
      <li>
      <Link onClick={handleLogOut} className='logout'>Log Out</Link>
        </li>
      </ul>    
    </nav>
  );
}