import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ApplyLogin() {

    const styles = {
        container:{
            display:"flex",
			// 'justify-content': 'center',
          float:'right',
            gap:"40%",
			'font-weight': 'bold'
        }
    }
  return (
    
      
      <div style={styles.container}> 
                 <div id="button-wrapper">
                    <button id="apply" className="btn-lg  "><NavLink to='/Login'>Join As Worker</NavLink></button>
                    <button id="how-it-works" className="btn-lg  "><NavLink to='/Login'>Join As Company</NavLink></button>
                </div>
      </div>
    
  )
}
