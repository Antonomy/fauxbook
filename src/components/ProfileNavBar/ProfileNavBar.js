import './ProfileNavBar.css'
import { Link } from 'react-router-dom'

export default function ProfileNavBar ({ user }) {
  return (
    <div className='styles-ProfileNavBar'>
      <img src={user.profilePhoto} alt='profile picture' className='profilephoto' />
      <h2 className='username'>{user.firstName} {user.lastName}</h2>
      <div className='request-unfriend-container'>
        <button className='friendrequestbutton'>Request Friend</button>
        <button className='friendrequestbutton'>Unfriend</button>
      </div>
      <div className='profilenavlinks'>
        <Link to={`/${user._id}/posts`}>Profile</Link>
        &nbsp; | &nbsp;
        <Link to={`/${user._id}/about`}>About</Link>
        &nbsp; | &nbsp;
        <Link to='/friends'>Friends</Link>
        &nbsp; | &nbsp;
        <Link to={`/${user._id}/photos`}>Photos</Link>
      </div>
    </div>
  )
}
