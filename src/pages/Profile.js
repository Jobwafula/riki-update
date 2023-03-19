import { hover } from '@testing-library/user-event/dist/hover'
import React from 'react'

export default function Profile({onLogout}) {

    // function display
    const DisplayProf =()=>{
       const  prof = document.getElementById('displayer')
        prof.innerHTML='profile information'
    }
    const DisplaySet =()=>{
        const  set = document.getElementById('displayer')
         set.innerHTML='settings information'
     }
    const styles ={
        mainheader:{
             display:'flex',
             justifyContent:'space-between'
        },
        ulLists:{
            display:'block'
        },
        profinfo:{
                marginTop:'100px'
        },
        space:{
            height:'400px',
            width:'100%',
            backgroundColor:'white'
        },
        button:{
            borderColor:'white',
        

        },
        
    }


  return (
    <div className='jumbotron'>
        <div className='container'>
                <div style={styles.mainheader}>
                <div>
                    {/* <img src={process.env.PUBLIC_URL +'logo192.png'} /> */}
                </div>
                
                <div style={styles.profinfo}>
                    <button onClick={DisplayProf} className='btn-lg' id='btnprof' style={styles.button}>Profile information</button>
                    
                </div>
                <div style={styles.profinfo}>
                    <button onClick={DisplaySet}className='btn-lg' id='btnprof' style={styles.button}>Settings</button> 
                </div>
                
            
            </div>

            <div style={{display:'flex'}}>
                <div>
                    <ul style={styles.ulLists}>
                        <li>country</li>
                        <li>State</li>
                        <li>primary language</li>
                        <li>contract type</li>
                    </ul>
                    <button onClick={onLogout}>Logout</button>
                </div>
                <div id='displayer'style={styles.space}>
                        
                </div>
               
                
            </div>
            
            <>Edit</>
        </div>


        <p className='text-center'>All rights reserved</p>
        
     
    </div>
  )
}
