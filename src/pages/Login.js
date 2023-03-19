import React from 'react'
import {useState} from 'react'
import LoginForm from '../components/LoginForm'
import Navbar from '../components/MainLayout/Navbar';
import Content from '../components/Content';
import Footer from '../components/MainLayout/Footer';

export default function Login() {






  // profile authenticate
  const [isLoggedIn,setIsLoggedIn] = useState(false)

  const handleLogin = ()=>{
		  // post details to the server
    setIsLoggedIn(true)
  }

  const handleLogout = ()=>{
    setIsLoggedIn(false)
  }

  return (
    <div>
		  <Navbar />
		  {isLoggedIn?(
				  <div>
				  <Content />
				  </div>
		  ):(
			 <div>
			 <LoginForm onLogin={handleLogin}/> 
			 </div>)}

		  <Footer />
    </div>
  )
}
