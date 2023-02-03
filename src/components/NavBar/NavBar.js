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
            <Link to="/newsfeed" className='logo' id="btn_logo"><img height='40rem' src={logo} className='logo' /></Link>
          </li>
          <li>
            <Link to="/newsfeed" id="btn_home"><img height='25rem' src={homeIcon} /></Link>

          </li>
          <li>
            <Link to={`/${user._id}/about`} class="tooltip" data-tooltip="About" id="btn_About" className='navbarlink'>About</Link>

          </li>
          <li>
            <Link to="/friends" class="tooltip" data-tooltip="Friends" id="btn_friends" className='navbarlink'>All Users</Link>

          </li>
          <li>
            <Link to={`/${user._id}/requests`} class="tooltip" data-tooltip="Requests" id="btn_requests" className='navbarlink'>Requests</Link>

          </li>
          <li>
            <Link to="/photos" class="tooltip" data-tooltip="Photos" id="btn_photos" className='navbarlink'>Photos</Link>

          </li>
          <li>
            <Link to={`/${user._id}/posts`} class="tooltip" data-tooltip="Profile" id="btn_profile" className='navbarlink'>{user.firstName} {user.lastName}'s Profile </Link>

          </li>
          <li>
            <Link to="/policy" class="tooltip" data-tooltip="Policy" id="btn_policy">Policy</Link>
          </li>
          <li>
            <Link onClick={handleLogOut} className='navbarlink' >Log Out</Link>
          </li>
        </ul>
    </nav>
    </nav>
  );
}