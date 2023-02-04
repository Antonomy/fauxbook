import styles from './RequestsPage.module.scss'
import ProfileNavBar from '../../components/ProfileNavBar/ProfileNavBar'
import Request from '../../components/Request/Request'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function RequestsListPage ({ user }) {
  const [currentUser, setCurrentUser] = useState({})
  const [token, setToken] = useState('')
  const { userId } = useParams()

  const getOneUser = async () => {
    try {
      const response = await fetch(`/api/users/${userId}`)
      const data = await response.json()
      setCurrentUser(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getOneUser()
    setToken(localStorage.getItem('token'))
  }, [userId])

  return (
    <div>
      <ProfileNavBar user={user} />
      <ul>
        <h2>Requests</h2>
        <Request />
        <Request />
        <Request />
      </ul>
    </div>
  )
}
