import { useState, useEffect } from 'react'
import styles from './AboutPage.module.scss'
import User from '../../components/User/User'
import ProfileNavBar from '../../components/ProfileNavBar/ProfileNavBar'
import editIcon from './images/editpencilicon.png'
import { useParams } from 'react-router-dom'

export default function AboutPage (user) {
  const [loggedInUser, setLoggedInUser] = useState(null)
  const [showSelfEditRights, setShowSelfEditRights] = useState(false)
  const [showFirstNameInput, setShowFirstNameInput] = useState(false)
  const [showLastNameInput, setShowLastNameInput] = useState(false)
  const [showEmailInput, setShowEmailInput] = useState(false)
  const [showBirthdayInput, setShowBirthdayInput] = useState(false)
  const [showHighSchoolInput, setShowHighSchoolInput] = useState(false)
  const [showCollegeInput, setShowCollegeInput] = useState(false)
  const [showCurrentCityInput, setShowCurrentCityInput] = useState(false)
  const [showHometownInput, setShowHometownInput] = useState(false)
  const [showRelationshipStatusInput, setShowRelationshipStatusInput] = useState(false)

  const [foundUser, setFoundUser] = useState(null)
  const [currentUser, setCurrentUser] = useState({})
  const { userId } = useParams()

  // update
  const updateUser = async (id, updatedData) => {
    try {
      const response = await fetch(`/api/user/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...updatedData })
      })
      const data = await response.json()
      setCurrentUser(data)
    } catch (error) {
      console.error(error)
    }
  }
  const getOneUser = async () => {
    try {
      const response = await fetch(`/api/users/${userId}`)
      const data = await response.json()
      setCurrentUser(data)
    } catch (error) {
      console.error(error)
    }
  }

  const handleUpdate = (evt) => {
    setFoundUser({ ...foundUser, [evt.target.name]: evt.target.value })
  }

  useEffect(() => {
    getOneUser()
  }, [userId])

  // if(user._id=req.params.id) setShowSelfEditRights(true)

  return (

    <main className=''>
      <div>
        <ProfileNavBar user={currentUser} />

        <div>First Name: {currentUser.firstName}
          {showSelfEditRights
            ? <>
              <span onClick={(e) => { setShowFirstNameInput('true') }}>
                <img className={styles.editIcon} height='10' src={editIcon} />
              </span>
              <input
                style={{ display: showFirstNameInput ? 'block' : 'none' }}
                type='text'
                name='firstName'
                onChange={handleUpdate}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    updateUser(user._id, { message: e.target.value })
                    setShowFirstNameInput('false')
                  }
                }}
              />
              </>
            : <></>}
        </div>
        <div>Last Name: {currentUser.lastName}
          {showSelfEditRights
            ? <>
              <span onClick={(e) => { setShowLastNameInput('true') }}>
                <img className={styles.editIcon} height='10' src={editIcon} />
              </span>
              <input
                style={{ display: showLastNameInput ? 'block' : 'none' }}
                type='text'
                name='lastName'
                onChange={handleUpdate}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    updateUser(user._id, { message: e.target.value })
                    setShowLastNameInput('false')
                  }
                }}
              />
              </>
            : <></>}
        </div>
        <div>Email: {currentUser.email}
          {showSelfEditRights
            ? <>
              <span onClick={(e) => { setShowEmailInput('true') }}>
                <img className={styles.editIcon} height='10' src={editIcon} />
              </span>
              <input
                style={{ display: showEmailInput ? 'block' : 'none' }}
                type='text'
                name='email'
                onChange={handleUpdate}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    updateUser(user._id, { message: e.target.value })
                    setShowEmailInput('false')
                  }
                }}
              />

              </>
            : <></>}
        </div>

        <div>Birthday: {currentUser.birthday}

          {showSelfEditRights
            ? <>
              <span onClick={(e) => { setShowBirthdayInput('true') }}>
                <img className={styles.editIcon} height='10' src={editIcon} />
              </span>
              <input
                style={{ display: showBirthdayInput ? 'block' : 'none' }}
                type='text'
                name='birthday'
                onChange={handleUpdate}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    updateUser(user._id, { message: e.target.value })
                    setShowBirthdayInput('false')
                  }
                }}
              />

              </>
            : <></>}
        </div>

        <div>High School: {currentUser.highSchool}
          {showSelfEditRights
            ? <>
              <span onClick={(e) => { setShowHighSchoolInput('true') }}>
                <img className={styles.editIcon} height='10' src={editIcon} />
              </span>
              <input
                style={{ display: showHighSchoolInput ? 'block' : 'none' }}
                type='text'
                name='highSchool'
                onChange={handleUpdate}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    updateUser(user._id, { message: e.target.value })
                    setShowHighSchoolInput('false')
                  }
                }}
              />
              </>
            : <></>}
        </div>
        <div>College: {currentUser.college}
          {showSelfEditRights
            ? <>
              <span onClick={(e) => { setShowCollegeInput('true') }}>
                <img className={styles.editIcon} height='10' src={editIcon} />
              </span>
              <input
                style={{ display: showCollegeInput ? 'block' : 'none' }}
                type='text'
                name='college'
                onChange={handleUpdate}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    updateUser(user._id, { message: e.target.value })
                    setShowCollegeInput('false')
                  }
                }}
              />

              </>
            : <></>}
        </div>

        <div>Current City: {currentUser.currentCity}
          {showSelfEditRights
            ? <>
              <span onClick={(e) => { setShowCurrentCityInput('true') }}>
                <img className={styles.editIcon} height='10' src={editIcon} />
              </span>
              <input
                style={{ display: showCurrentCityInput ? 'block' : 'none' }}
                type='text'
                name='currentCity'
                onChange={handleUpdate}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    updateUser(user._id, { message: e.target.value })
                    setShowCurrentCityInput('false')
                  }
                }}
              />

              </>
            : <></>}
        </div>

        <div>Home Town: {currentUser.hometown}
          {showSelfEditRights
            ? <>
              <span onClick={(e) => { setShowHometownInput('true') }}>
                <img className={styles.editIcon} height='10' src={editIcon} />
              </span>
              <input
                style={{ display: showHometownInput ? 'block' : 'none' }}
                type='text'
                name='hometown'
                onChange={handleUpdate}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    updateUser(user._id, { message: e.target.value })
                    setShowHometownInput('false')
                  }
                }}
              />

              </>
            : <></>}
        </div>

        <div>Relationship Status: {currentUser.relationshipStatus}
          {showSelfEditRights
            ? <>
              <span onClick={(e) => { setShowRelationshipStatusInput('true') }}>
                <img className={styles.editIcon} height='10' src={editIcon} />
              </span>
              <input
                style={{ display: showRelationshipStatusInput ? 'block' : 'none' }}
                type='text'
                name='relationshipStatus'
                onChange={handleUpdate}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    updateUser(user._id, { message: e.target.value })
                    setShowRelationshipStatusInput('false')
                  }
                }}
              />

              </>
            : <></>}

        </div>
      </div>
    </main>
  )
}
