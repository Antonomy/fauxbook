import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
       <Link to="">Fauxbook logo</Link>
       &nbsp; | &nbsp;
      <Link to="">Home</Link>
      &nbsp; | &nbsp;
      <Link to="">Profile Pic</Link>
    </nav>
  );
}