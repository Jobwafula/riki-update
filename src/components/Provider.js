import React from 'react'

export default function Provider() {

  const styles = {
    container:{
		height: '65vh',
      fontSize:"1.8rem",
      padding:'20px',
	  'font-weight':'bold'
    },
    h1:{
      fontWeight:'bold'
    }

  }
  return (
    <div className='container-fluid' style={styles.container}>
        <h1 style={styles.h1}>Global Leading Provider of Flexible Work</h1>
      		<p>We have over 5 years of experience in providing data collection and 
        </p>
        <p>annotation services for Fortune 500 clients, 
        including top global technology companies. 
        </p>
            We are focused on our over 1 million contributor network well-being,
        <p>
            including promoting communication, crowd voice, fair pay, inclusion,
        </p>  
        <p>privacy and confidentiality, and well-being.</p>
            Our commitment is reflected by industry recognition and participation in trade organizations
        
    </div>
  )
}
