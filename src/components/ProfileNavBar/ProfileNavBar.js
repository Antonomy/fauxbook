import './ProfileNavBar.css'
import { Link } from 'react-router-dom'

export default function ProfileNavBar ({ user }) {
  return (
    <div className='styles.ProfileNavBar'>
      <div className='styles.coverPhoto'>
        <img src='' alt='cover photo goes here' />
        <button>Add Cover Photo</button>
      </div>
      <img src={user.profilePhoto} alt='profile picture' />
      <h2 className="username">{user.firstName} {user.lastName}</h2>
      <button>Request Friend</button>
      <button>Unfriend</button>
      <br />

      <Link to={`/${user._id}/posts`}>Profile</Link>
            &nbsp; | &nbsp;
      <Link to={`/${user._id}/about`}>About</Link>
            &nbsp; | &nbsp;
      <Link to='/friends'>Friends</Link>
            &nbsp; | &nbsp;
      <Link to={`/${user._id}/photos`}>Photos</Link>
    </div>
  )
}
