import { useState, useEffect } from 'react';
import LoginPage from '../LoginPage.js/LoginPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import SignUpPage from '../SignUpPage/SignUpPage';
import ForgotPasswordPage from '../ForgotPasswordPage/ForgotPasswordPage';
import NavBar from '../../components/NavBar/NavBar';
import { Routes, Route} from 'react-router-dom'

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
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage/>} />
            <Route path="/signup" element={<SignUpPage />}/>
            <Route path="/forgotpassword" element={<ForgotPasswordPage />}/>
            <Route path="/" element={<LoginPage />}/>
          </Routes>
        </>
        //  :
        // <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

export default App;