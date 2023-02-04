import styles from './User.module.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import AboutPage from '../../pages/AboutPage/AboutPage'

export default function User ({ user }) {
  return (
      <div className={styles.friend}>
        <div>
          <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' height='100' alt='photo' />
        </div>
        <li className={styles.userdetails}> <Link to={`/${user._id}/posts`}>{user.firstName} {user.lastName}</Link></li>
        {user.email?<li className={styles.userdetails}>{user.email}</li>:<></>}
        {user.birthday?<li className={styles.userdetails}>{user.birthday}</li>:<></>}
        {user.highSchool?<li className={styles.userdetails}>{user.highSchool}</li>:<></>}
        {user.college?<li className={styles.userdetails}>{user.college}</li>:<></>}
        {user.currentCity?<li className={styles.userdetails}>{user.currentCity}</li>:<></>}
        {user.hometown?<li className={styles.userdetails}>{user.hometown}</li>:<></>}
        {user.relationshipStatus?<li className={styles.userdetails}>{user.relationshipStatus}</li>:<></>}
      </div>
  )
}

{ /* <div>
<img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" height="100" alt="photo" />
</div> */ }
