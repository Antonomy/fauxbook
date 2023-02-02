import styles from './FriendsPage.module.scss'
import User from '../../components/User/User'
// import Photo from '../components/Photo/Photo'
// import ProfileNavBar from '../../components/ProfileNavBar/ProfileNavBar'
import { useState, useEffect } from 'react';


export default function FriendsPage({ user }) {
    const [friends, setFriends] = useState([])
    const [token, setToken] = useState('')

    useEffect(() => {
        const getFriends = async () => {
            try {
                const response = await fetch('/api/users', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
                const data = await response.json()
                setFriends(data)
            } catch (error) {
                console.error(error)
            }
        }
        getFriends();
        setToken(localStorage.getItem('token'))


    }, [])

    return (
        <div>
            {/* <ProfileNavBar /> */}
            <ul>
                {
                    friends.map((user) => {
                        return (
                            // <h2>HELLO FRIEND!</h2>

                            <User
                                user = {user}
                                // user = {friend.user}
                                // key = {friend._id}
                           
                            />
                        )
                    })
                }
            </ul>
        </div>
    )
}

