import { useState } from 'react'
import styles from './AboutPage.module.scss'
import User from '../../components/User/User'
import ProfileNavBar from '../../components/ProfileNavBar/ProfileNavBar'
import editIcon from './images/editpencilicon.png'

export default function AboutPage({ user }) {
    const [showFirstNameInput, setShowFirstNameInput] = useState(false)
    const [showLastNameInput, setShowLastNameInput] = useState(false)
    const [showEmailInput, setShowEmailInput] = useState(false)
    const [showBirthdayInput, setShowBirthdayInput] = useState(false)
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

    return (
        <div>
            <ProfileNavBar />
            <div>First Name: {user.firstName}
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
            </div>
            <div>Last Name: {user.lastName}
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
            </div>
            <div>Email: {user.email}
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
            </div>
            <div>Birthday: {user.birthday}
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
            </div>
            <div>user.workplace</div>
            <div>user.High School</div>
            <div>user.College</div>
            <div>user.Current City</div>
            <div>user.Hometown</div>
            <div>user.Relationship Status</div>
            <div>user.Workplace</div>
        </div>
    )
}