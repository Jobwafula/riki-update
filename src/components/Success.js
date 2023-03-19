import React from 'react'

export default function Success(props) {
  return (
    <div class='container-fluid success-background' style={{backgroundColor:'whitesmoke',padding:'20px'}}>
      <h2>Feedback from our customers</h2>
      
      <div className='container'>
      <span style={{marginRight:'5px'}}><i style={{color:'red'}} className="fas fa-quote-left fa-2x mb-4"></i></span>
      
        <div className='container' style={{backgroundColor:'white',width:'60%',padding:'10px'}}>
        
          <h1 style={{'font-weight': 'bolder'}}> <small>{props.text}</small> </h1>
          <p className='bold'>{props.name}</p>
          <span><small>{props.country}.</small></span>
        </div>
          
      </div>
     
      
    </div>
  )
}
