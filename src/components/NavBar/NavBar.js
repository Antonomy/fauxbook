import { Link } from 'react-router-dom';
import './NavBar.css'
import { logOut } from '../../utilities/users-service';
import logo from './images/logo.png'
import homeIcon from './images/home-icon.png'

export default function NavBar({
  setUser,
  user
}) {
  function handleLogOut() {
    logOut();
    setUser(null);
}
  return (
    <nav className="nav">
      <nav className='body'>
      <ul>
        <li>
       <Link to="/newsfeed" className='logo' class="tooltip" data-tooltip="Logo" id="btn_logo"><img height='40rem' src={logo} className='logo' /></Link>
       &nbsp; | &nbsp;
       </li>
      <li>
      <Link to="/newsfeed" class="tooltip" data-tooltip="Home" id="btn_home"><img height='25rem' src={homeIcon} /></Link>
      &nbsp; | &nbsp;
      </li>
      <li>
      <Link to="/about" class="tooltip" data-tooltip="About" id="btn_About" className='navbarlink'>About</Link>
      &nbsp; | &nbsp;
      </li>
      <li>
      <Link to="/friends" class="tooltip" data-tooltip="Friends" id="btn_friends" className='navbarlink'>All Users</Link>
      &nbsp; | &nbsp;
      </li>
      <li>
      <Link to="/requests" class="tooltip" data-tooltip="Requests" id="btn_requests" className='navbarlink'>Requests</Link>
      &nbsp; | &nbsp;
      </li>
      <li>
      <Link to="/photos" class="tooltip" data-tooltip="Photos" id="btn_photos" className='navbarlink'>Photos</Link>
      &nbsp; | &nbsp;
      </li>

      <br />
      {/* &nbsp;TO BE REMOVED - only here for convenience: &nbsp; */}
      <br/>
      <li>
      <Link to="/posts" class="tooltip" data-tooltip="Profile" id="btn_profile">{user.firstName} {user.lastName}</Link>
      &nbsp; | &nbsp;
      </li>
      <li>
      <Link to="/policy" class="tooltip" data-tooltip="Policy" id="btn_policy">Policy</Link>
      &nbsp; | &nbsp;
      </li>
      <li>
      <Link to="/login">Login</Link>
      &nbsp; | &nbsp;
      </li>
      <li>
      <Link to="/forgotpassword">Forgot Password</Link>
      &nbsp; | &nbsp;
      </li>
      <li>
      <Link onClick={handleLogOut}>Log Out</Link>
    </li>
    </ul>
    </nav>
        </nav>
  );
}