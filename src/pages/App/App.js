import { useState, useEffect } from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
// Components
import NavBar from '../../components/NavBar/NavBar';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
// Pages
import AuthPage from '../AuthPage/AuthPage';
import ForgotPasswordPage from '../ForgotPasswordPage/ForgotPasswordPage';
import PolicyPage from '../PolicyPage/PolicyPage';
import AboutPage from '../AboutPage/AboutPage';
import FriendsPage from '../FriendsPage/FriendsPage';
import PhotosPage from '../PhotosPage/PhotosPage';
import NewsFeedPage from '../NewsFeedPage/NewsFeedPage';
import PostsPage from '../PostsPage/PostsPage';
import RequestsPage from '../RequestsPage/RequestsPage';
import ShowAboutPage from '../ShowAboutPage/ShowAboutPage';


function App() {
  const [state, setState] = useState(null)
  const [user, setUser ] = useState(getUser())
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
    <main className="App">
      {
        user ?
        <>
          <NavBar setUser={setUser} />
          <Routes>
            {/* <Route path="/" element={<LoginPage user={user} setUser={setUser}/>}/>
            <Route path="/signup" element={<SignUpPage user={user} setUser={setUser} />}/>
            <Route path="/login" element={<LoginPage user={user} setUser={setUser}/>}/>
            <Route path="/forgotpassword" element={<ForgotPasswordPage />}/> */}
            <Route path="/policy" element={<PolicyPage />}/>
            <Route path="/newsfeed" element={<NewsFeedPage />} />
            <Route path="/posts" element={<PostsPage user={user}/>} />
            <Route path="/:id/posts" element={<ShowAboutPage user={user._id}/>}/>
            <Route path="/about" element={<AboutPage user={user}/>}/>
            <Route path="/requests" element={<RequestsPage />}/>
            <Route path="/friends" element={<FriendsPage user={user}/>}/>
            <Route path="/:id/users" element={<ShowAboutPage user={user._id}/>}/>
            <Route path="/photos" element={<PhotosPage />}/>
            <Route path="/logout" element={<UserLogOut user={user} setUser={setUser}/>}/>
            <Route path="/*" element={<Navigate to="/newsfeed" />} />
          </Routes>
        </>
         :
        <AuthPage setUser={setUser}/>
        
      }
    </main>
  );
}

export default App;