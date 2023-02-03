import { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
// Components
import NavBar from '../../components/NavBar/NavBar'
import UserLogOut from '../../components/UserLogOut/UserLogOut'
// Pages
import AuthPage from '../AuthPage/AuthPage'
import ForgotPasswordPage from '../ForgotPasswordPage/ForgotPasswordPage'
import PolicyPage from '../PolicyPage/PolicyPage'
import AboutPage from '../AboutPage/AboutPage'
import FriendsPage from '../FriendsPage/FriendsPage'
import PhotosPage from '../PhotosPage/PhotosPage'
import NewsFeedPage from '../NewsFeedPage/NewsFeedPage'
import PostsPage from '../PostsPage/PostsPage'
import RequestsPage from '../RequestsPage/RequestsPage'
import ProfilePage from '../ProfilePage/ProfilePage'

function App () {
  const [state, setState] = useState(null)
  const [user, setUser] = useState(getUser())
  const fetchState = async () => {
    try {
      const response = await fetch('/api/test')
      const data = await response.json()
      setState(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchState()
  }, [])

  return (
    <main className='App'>
      {
        user
          ? <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* <Route path="/" element={<LoginPage user={user} setUser={setUser}/>}/>
            <Route path="/signup" element={<SignUpPage user={user} setUser={setUser} />}/>
            <Route path="/login" element={<LoginPage user={user} setUser={setUser}/>}/>
            <Route path="/forgotpassword" element={<ForgotPasswordPage />}/> */}
              <Route path='/policy' element={<PolicyPage />} />
              <Route path='/newsfeed' element={<NewsFeedPage user={user} />} />
              <Route path='/posts' element={<PostsPage user={user} />} />
              <Route path='/:userId/posts' element={<ProfilePage user={user} />} />
              <Route path='/:userId/about' element={<AboutPage user={user} />} />
              <Route path='/:userId/requests' element={<RequestsPage user={user} />} />
              <Route path='/friends' element={<FriendsPage user={user} />} />
              * ----- * Delete later possibly? * --- *
              <Route path='/:userId/users' element={<ProfilePage user={user._id} />} />
              * ----- * ---------------------------------------------------- * --- *
              <Route path='/:userId/photos' element={<PhotosPage user={user} />} />
              <Route path='/logout' element={<UserLogOut user={user} setUser={setUser} />} />
              {/* <Route path="/*" element={<Navigate to="/newsfeed" />} /> */}
            </Routes>
          </>
          : <AuthPage setUser={setUser} />

      }
    </main>
  )
}

export default App
