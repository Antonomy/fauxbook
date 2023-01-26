import { Link } from 'react-router-dom';


export default function NavBar() {
  return (
    <nav>
       <Link to="/newsfeed">LOGO</Link>
       &nbsp; | &nbsp;
      <Link to="/newsfeed">HOMEICON</Link>
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
      <Link to="/login">Log Out</Link>
    </nav>
  );
}