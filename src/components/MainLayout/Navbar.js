import React from 'react'
import { NavLink } from 'react-router-dom'
import Blog from '../../pages/Blog'
import Faqs from '../../pages/Faqs'
import Home from '../../pages/Home'
import HowItWorks from '../../pages/HowItWorks'

export default function Navbar() {

  const styles ={
    container:{
      backgroundColor:'black',
	  height: '10vh',
	  display: 'flex',
	  'justify-content': 'space-between',
	  'align-items': 'center'

    },
    li:{
      color:'white'
    },
    ul:{
      display:'flex',
      gap:'100px'
      // 'justify-content': 'space-between'
    }

  }
  return (
    <div >
      

      <div style={styles.container}>
      
            <ul style={styles.ul} class="breadcrumb-cover">
		  		      <li><NavLink id='nav-link' to='/' >Home</NavLink></li>
                <li><NavLink  id='nav-link' to='HowItWorks' >How it Works</NavLink></li>
                <li><NavLink id='nav-link' to='Faqs' >FAQS</NavLink></li>
                <li><NavLink id='nav-link' >Company</NavLink></li>
                <li><NavLink id='nav-link' to='Blog'>Blog</NavLink></li>
            </ul>
      
         <ul id='ul-nav'>
                <li><i style={{color:'white'}} class="fab fa-twitter"></i></li>
                <li> <i style={{color:'white'}} class="fab fa-youtube"></i> </li>
                <li> <i style={{color:'white'}} class="fab fa-linkedin"></i> </li>
                <li><i style={{color:'white'}}class="fab fa-facebook"></i> </li>
                <li> <i style={{color:'white'}} class="fab fa-instagram"></i> </li>
          </ul>
      </div>
    </div>
    
  )
}
