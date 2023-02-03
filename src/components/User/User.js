import styles from './User.module.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import AboutPage from '../../pages/AboutPage/AboutPage'

export default function User ({ user }) {
  return (
    <div>

      <div className={styles.friend}>
        <div>
          <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' height='100' alt='photo' />
        </div>
        <li> <Link to={`/${user._id}/posts`}>{user.firstName} {user.lastName}</Link></li>
        <li>{user.email}</li>
        <li>{user.birthday}</li>
        <li>{user.highSchool}</li>
        <li>{user.college}</li>
        <li>{user.currentCity}</li>
        <li>{user.hometown}</li>
        <li>{user.relationshipStatus}</li>
      </div>
    </div>
  )
}

{ /* <div>
<img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" height="100" alt="photo" />
</div> */ }
