import React from 'react'
import {useState} from 'react'
import Profile from '../pages/Profile'
import ApplyLogin from "./ApplyLogin"

export default function LoginForm({onLogin}) {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')




const handleSubmit = (event) =>{
    event.preventDefault()
    // local storage API
// set
localStorage.setItem('username',username)
localStorage.setItem('password',password)
}

const isLoggedIn = ()=>{
    const nameStored = localStorage.getItem('username')
    const passwordStored = localStorage.getItem()
    return nameStored && passwordStored
}

// if(isLoggedIn){
//     return <Profile />
// }
// else {
//     return <LoginForm />
// }



        const handleUsername = (event)=>{
            setUsername(event.target.value)
        }

        const handlePassword = (event) =>{
            setPassword(event.target.value)
        }

    const styles ={
        margin:{
            marginTop:'20px'
        },
        container :{
            display: 'block',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop:'40vh'
          }
    }
  return (
    <div  className='text-center'>
        
    	  
		  {/* <ApplyLogin /> */}
        
	<form style={{height:'100vh'}}>

        <div style={styles.container}>
            <div style={styles.margin} >
                <label>Username</label>
                <input  onChange={handleUsername}type='text' id='username' value={username}/>
            </div>
            <div style={styles.margin}>
                <label>password</label>
                <input onChange={handlePassword} value={password} type='password' />
            </div>
            <button style={styles.margin} onClick ={onLogin}type='submit'>Login</button>
        </div>
       
      </form>
      {/* isLoggedIn?<Profile />:"" */}


      {/* <form>
        <div style={styles.margin} >
            <label>Username</label>
            <input  onChange={handleUsername}type='text' id='username' value={username}/>
        </div>
        <div style={styles.margin}>
            <label>password</label>
            <input onChange={handlePassword} value={password} type='password' />
        </div>
        <button style={styles.margin} onClick ={onLogin}type='submit'>Login As Worker</button>
      </form> */}
    </div>
  )
}
