import { Link } from 'react-router-dom';
import './NavBar.css'

export default function NavBar() {
  return (
    <nav className="nav">
       <Link to="/newsfeed" className='logo'>LOGO</Link>
       &nbsp; | &nbsp;
      <Link to="/newsfeed">HOMEICON</Link>
      &nbsp; | &nbsp;
      <Link to="/about">About</Link>
      &nbsp; | &nbsp;
      <Link to="/friends">Friends</Link>
      &nbsp; | &nbsp;
      <Link to="/photos">Photos</Link>
      &nbsp; | &nbsp;
      <Link to="/postspage">USERNAME</Link>
      &nbsp; | &nbsp;
      <br />
      &nbsp;TO BE REMOVED - only here for convenience: &nbsp;
      <Link to="/policy">Policy</Link>
      &nbsp; | &nbsp;
      <Link to="/login">Login</Link>
      &nbsp; | &nbsp;
      <Link to="/forgotpassword">Forgot Password</Link>
      &nbsp; | &nbsp;
      <Link to="/login">Log Out</Link>
    </nav>
  );
}