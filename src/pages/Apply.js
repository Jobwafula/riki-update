import React, {useState}from 'react'
import {NavLink} from 'react-router-dom'
import Navbar from '../components/MainLayout/Navbar';
import Content from '../components/Content';
import Footer from '../components/MainLayout/Footer';


import axios from 'axios'

export default function Apply() {
		const [email,setEmail] = useState('example@gmail.com')
		const [lastName,setLastName] = useState('Wafula')
		const [firstName,setFirstName] = useState('Job')
		const [password,setPassword] = useState(123456)
		const [country,setCountry] = useState("Uganda")

		//email state
		const  handleEmail=(event)=>{

				setEmail(event.target.value)
		}
		// first name state
		const  handlFirstName=(event)=>{

				setFirstName(event.target.value)
		}
		// lastname state
		const  handlLastName=(event)=>{

				setLastName(
						event.target.value
				)
		}
		// password state
		const  handlePassword=(event)=>{

				setPassword(event.target.value)
		}
		// country
		const handleCountry =(event)=>{
				setCountry(
						event.target.value
				)
		}


		// form handle && fetch api
		const handleSubmit=(event)=>{
				event.preventDefault()

				const user = {
						email:email,
						firstName:firstName,
						lastName:lastName,
						password:password,
						country:country}


				// axios post

				axios.post("",user)
						.then(response=>{
								console.log("data sent successfully")
						})
						.catch(error=>{
								console.log(error)
						})

		}

		//axios get data
		axios.get("",{
				headers: {
						"Content-Type":'application/json'
				}
		})
				.then(response=>{
						console.log(response.data)
				})
				.catch(error=>{
						console.log(error)
				})


		const NavLinkStyles = ({isActive}) =>{
				return {
						fontWeight:isActive? 'bold':'normal',
						textDecoration:isActive? 'none':'normal',
						color:isActive?'blue':'white'
				}

		}

		const styles = {
				formcontainer:{
						display:'block'
				},
				names:{
						display:'flex',
						gap:'95px'
				},
				labeltext:{
						fontWeight:'light'
				},
				width:{
						width:'50%'
				}

		}
		return (
				<div>
					<Navbar />
					<div className='container'>
						<h1 style={styles.labeltext}>create account</h1>
						<form  onSubmit={handleSubmit} name='myForm' style={styles.formcontainer}>
							<div className='form-group'>
								<label>Email addres:</label>
									<input style={styles.width} className='form-control' onChange={handleEmail} value={email} name='email' type='text'/>
							</div>
							<div style={styles.names}>
								<div>
									<label style={styles.labeltext}>First Name:</label>
									<input className='form-control' onChange={handlFirstName} value={firstName} name='firstName'type='text'/>
								</div>
								<div>
									<label style={styles.labeltext}>Last Name: </label>
									<input className='form-control' onChange={handlLastName} value={lastName} name='lastName'type='text'/>
								</div>

							</div>
							<div>
								<label style={styles.labeltext}>password:</label>
								<input style={styles.width}  value={password} onChange={handlePassword} className='form-control'  type='password'/>
							</div>
							<div>
								<label style={styles.labeltext}>country of residence</label>
				{/* <input style={styles.width} className='form-control' placeholder='select' /> */}
								<select value={country} onChange={handleCountry} style={styles.width} className='form-control' placeholder='select'>
									<option>Kenya</option>
									<option>Tanzania</option>
									<option>Somalia</option>
									<option>Ethiopia</option>
									<option>Uganda</option>
									<option>South Sudan</option>
								</select>
							</div>
							<div style={styles.names}>
								<input type='checkbox'/>
								<p className='text-center'>I certify that i'm 18 years and above old and read and understood the data privacy.  </p>
							</div>
							<input  type='submit' placeholder='submit'/>
					</form>
					<div>
						<NavLink to='/Apply'>create account</NavLink>
						<h2>Have an account?</h2>
						<NavLink>Sign in!</NavLink>
					</div>
					<div>
						<p>Need help?</p>
						<NavLink to='/ContactSupport'>ContactSupport</NavLink>
					</div>
				</div>
				<Footer />
			</div>
		)
}
