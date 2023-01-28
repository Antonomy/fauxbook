import { Link } from 'react-router-dom';
import './NavBar.css'
import { logOut } from '../../utilities/users-service';
import logo from './images/logo.png'
import homeIcon from './images/home-icon.png'

export default function NavBar({setUser}) {
  function handleLogOut() {
    logOut();
    setUser(null);
}
  return (
    <nav className="nav">
       <Link to="/newsfeed" className='logo'><img height='100rem' src={logo} /></Link>
       &nbsp; | &nbsp;
      <Link to="/newsfeed"><img height='25rem' src={homeIcon} /></Link>
      &nbsp; | &nbsp;
      <Link to="/about">About</Link>
      &nbsp; | &nbsp;
      <Link to="/friends">Friends</Link>
      &nbsp; | &nbsp;
      <Link to="/requests">Requests</Link>
      &nbsp; | &nbsp;
      <Link to="/photos">Photos</Link>
      &nbsp; | &nbsp;
      <Link to="/posts">USERNAME</Link>
      &nbsp; | &nbsp;
      <br />
      &nbsp;TO BE REMOVED - only here for convenience: &nbsp;
      <Link to="/policy">Policy</Link>
      &nbsp; | &nbsp;
      <Link to="/login">Login</Link>
      &nbsp; | &nbsp;
      <Link to="/forgotpassword">Forgot Password</Link>
      &nbsp; | &nbsp;
      <Link onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}