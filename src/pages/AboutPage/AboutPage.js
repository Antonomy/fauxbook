import { useState } from 'react'
import styles from './AboutPage.module.scss'
import User from '../../components/User/User'
import ProfileNavBar from '../../components/ProfileNavBar/ProfileNavBar'
import editIcon from './images/editpencilicon.png'
import coverPhoto from './images/cover.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'

export default function AboutPage(user) {
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
            setFoundUser(data)
        } catch (error) {
            console.error(error)
        }
    }
    const handleUpdate = (evt) => {
        setFoundUser({ ...foundUser, [evt.target.name]: evt.target.value })
    }

    // if(user._id=req.params.id) setShowSelfEditRights(true)
    return (
    
    <main>
    
        
            <div className={styles.aboutPage}>
                <ProfileNavBar user={user} />
<Container style={{"width":"100%"}} align='left'>
    <Col>
                
                <div>First Name:My name is Crystal {user.firstName}
                    {showSelfEditRights ?
                        <>
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
                        :
                        <></>
                    }
                </div>
                <div>Last Name: {user.lastName}
                    {showSelfEditRights ?
                        <>
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
                        :
                        <></>
                    }
                </div>
                <div>Email: {user.email}
                    {showSelfEditRights ?
                        <>
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
                        :
                        <></>
                    }
                </div>
                <div>Birthday: {user.birthday}
                    {showSelfEditRights ?
                        <>
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
                        :
                        <></>
                    }
                </div>
                <div>High School: {user.highSchool}
                    {showSelfEditRights ?
                        <>
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
                        :
                        <></>
                    }
                </div>
                <div>College: {user.college}
                    {showSelfEditRights ?
                        <>
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
                        :
                        <></>
                    }
                </div>
                <div>Current City: {user.currentCity}
                    {showSelfEditRights ?
                        <>
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
                        :
                        <></>
                    }
                </div>
                <div>Home Town: {user.hometown}
                    {showSelfEditRights ?
                        <>
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
                        :
                        <></>
                    }
                </div>
                <div>Relationship Status: {user.relationshipStatus}
                    {showSelfEditRights ?
                        <>
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
                        :
                        <></>
                    }
                </div>
                <div className={styles.pageContainer}>Page Container
                <header className={styles.bigHeader}>header</header>

                <div className={styles.afterForm}>
                    <div className={styles.littleHeader}>A header
                        {/* <div className={styles.coverPhoto} > Cover Picture<img src={coverPhoto} alt="logo" /> */}
                            <div className={styles.profileInfo}>Count Friends
                                <div className={styles.middleStuff}>Five
                                </div>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
                {/* <div className={styles.profileBody}>
                    <div className={styles.cards}><h1>INTRO</h1>
                        <img src='./images.cover.png' />
                    </div>
                    <div className={styles.cards}>
                        <img src='./images.cover.png' /><h1>Say Something to ...</h1>
                    </div>
                    <div className={styles.cards}>
                        <img src='./images.cover.png' /><h1>Photos</h1>
                    </div>
                    <div className={styles.cards}>
                        <img src='./images.cover.png' /><h1>Posts</h1>
                    </div>
                </div> */}
                </div>
                </Col>
              </Container>
            </div> 
            
        </main>
    )
}