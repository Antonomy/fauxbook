import { useState } from 'react'
import styles from './AboutPage.module.scss'
import User from '../../components/User/User'
import ProfileNavBar from '../../components/ProfileNavBar/ProfileNavBar'
import editIcon from './images/editpencilicon.png'

export default function AboutPage() {
    const [showNameInput, setShowNameInput] = useState(false)
    const [showBioInput, setShowBioInput] = useState(false)
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

            Name: user.name
            <br />
            Email: user.email
            <div>Bio - user.bio
                <span onClick={(e) => { setShowBioInput('true') }}>
                    <img className={styles.editIcon} height='10' src={editIcon} />
                </span>
                <input
                    style={{ display: showBioInput ? 'block' : 'none' }}
                    type='text'
                    name='message'
                    onChange={handleUpdate}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            // updateUser (user._id, { message: e.target.value })
                            setShowBioInput('false')
                        }
                    }}
                />
            </div>

            <div>user.birthday</div>
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