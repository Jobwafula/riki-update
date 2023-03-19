import React from 'react'
import {NavLink,Link} from 'react-router-dom'
const NavLinkStyles = ({isActive}) =>{
    return {
      fontWeight:isActive? 'bold':'normal',
       textDecoration:isActive? 'none':'normal',
       color:isActive?'blue':'white'
    }
    
  }

const Upload = () => {
  return (
    <div>
        <div style={{backgroundColor:'black'}} id='footer-links'>
            <NavLink to='/'>Home</NavLink>
            
            <NavLink style={NavLinkStyles} to='/HowItWorks' >How it works</NavLink>
            <NavLink style={NavLinkStyles} to='/Company'>Company</NavLink>
            <NavLink style={NavLinkStyles} to='/Bloq'>Bloq</NavLink>
            <NavLink style={NavLinkStyles} to='/Apply'>Apply</NavLink>
            <NavLink style={NavLinkStyles} to='/ContactSupport'>Contact support</NavLink>  

        </div>


        <div>
                <h1>Appen has trusted workers to complete your desired tasks  </h1>

                <div>
                    <div>
                         <h2>Join appen community to upload your tasks</h2>
                         <div id="button-wrapper">
                            <button id="apply" className="btn-lg  "><NavLink to='/Apply'>Apply</NavLink></button>
                            {/* <button id="how-it-works" className="btn-lg  "><NavLink to='/Login'>Login</NavLink></button> */}
                        </div>
                    </div>
                </div>
                


                <h1>Appen job types</h1>


                {/* file upload form */}
            <form>
                <input type='file' placeholder='upload task'></input>
                <input type='submit'></input>
            </form>
        </div>

        {/* footer */}
        <footer>
      <div className='row'>
        <div className='col-sm-6' >
          <div id='footer-links'>
            <NavLink to='/'>Home</NavLink>
            
            <NavLink style={NavLinkStyles} to='/HowItWorks' >How it works</NavLink>
            <NavLink style={NavLinkStyles} to='/Company'>Company</NavLink>
            <NavLink style={NavLinkStyles} to='/Bloq'>Bloq</NavLink>
            <NavLink style={NavLinkStyles} to='/Apply'>Apply</NavLink>
            <NavLink style={NavLinkStyles} to='/ContactSupport'>Contact support</NavLink>  

          </div>
            
            <div>
                <Link to='/'>visit main website</Link>
            </div>
        </div>
        <div className='col-sm-6'>
            <ul id='ul-footer'>
                <li><i style={{color:'white'}} class="fab fa-twitter"></i></li>
                <li> <i style={{color:'white'}} class="fab fa-youtube"></i> </li>
                <li> <i style={{color:'white'}} class="fab fa-linkedin"></i> </li>
                <li><i style={{color:'white'}}class="fab fa-facebook"></i> </li>
                <li> <i style={{color:'white'}} class="fab fa-instagram"></i> </li>
            </ul>
        </div>
      </div>
     

            <h3><small>copyright , All rights reserved</small></h3>
       
    </footer>
        
    </div>
  )
}

export default Upload
