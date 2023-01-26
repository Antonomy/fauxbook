import { useState, useEffect } from 'react';
import { Routes, Route} from 'react-router-dom';
// Components
import NavBar from '../../components/NavBar/NavBar';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
// Pages
import SignUpPage from '../SignUpPage/SignUpPage';
import LoginPage from '../LoginPage.js/LoginPage';
import ForgotPasswordPage from '../ForgotPasswordPage/ForgotPasswordPage';
import PolicyPage from '../PolicyPage/PolicyPage';
import AboutPage from '../AboutPage/AboutPage';
import FriendsPage from '../FriendsPage/FriendsPage';
import PhotosPage from '../PhotosPage/PhotosPage';
import NewsFeedPage from '../NewsFeedPage/NewsFeedPage';
import PostsPage from '../PostsPage/PostsPage';


function App() {
  const [state, setState] = useState(null)
  const [user, setUser ] = useState(null)

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
        // user ?
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<LoginPage />}/>
            <Route path="/signup" element={<SignUpPage />}/>
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/forgotpassword" element={<ForgotPasswordPage />}/>
            <Route path="/policy" element={<PolicyPage />}/>
            <Route path="/newsfeed" element={<NewsFeedPage />} />
            <Route path="/posts" element={<PostsPage />} />
            <Route path="/about" element={<AboutPage />}/>
            <Route path="/friends" element={<FriendsPage />}/>
            <Route path="/photos" element={<PhotosPage />}/>
            <Route path="/logout" element={<UserLogOut />}/>
          </Routes>
        </>
        //  :
        // <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

export default App;