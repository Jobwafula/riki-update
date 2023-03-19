import React from 'react';
import { NavLink ,Link} from 'react-router-dom';

import appen from '../images/Appen-Connect-Flower.png'
import {useState,useEffect} from 'react'

export default function Join() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768)
    }
    handleResize() //initialized state
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const styles={
    main:{
        padding :"15px",
		'font-weight': 'bolder',
    marginTop:isMobile?'50px':'10px'
    },
    htext:{
      fontSize:'6rem'
    }
  }
  return (
    <div style={styles.main} >
      <div className='row'>
      	<div className="col-sm-6 col-md-6 col-lg-6">
        	<div className='container-fluid'>
            	<h1 style={styles.htext}>Join Our Tasking</h1>
                <h1 style={styles.htext}>Community</h1> 
                <h1> 
                 	<small class="text" style={{color: 'black', 'font-weight':'light'}}>Join our global tasking community and enjoy working with
		  			the best team in the world.</small>    
                </h1>   
            </div>
            <div className='container' id="button-wrapper">
                    <button id="apply" className="btn-lg "><Link to='/Apply' id='applylink'>Apply Now</Link></button>
                    <button id="how-it-works" className="btn-lg  "><NavLink to='/HowItWorks'>How it works</NavLink></button>
                </div>
            </div>
            <div className="col-sm-6  col-md-6  col-lg-6 appen-flower ">
                <img  src={appen}  width="390px"
              className="img-responsive"  alt="" />
            </div>
            
      </div>
	</div>
  )
}
