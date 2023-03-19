import React from 'react'
import Footer from '../components/MainLayout/Footer'
import Navbar from '../components/MainLayout/Navbar'


export default function HowItWorks() {
  return (
    <div>
        <div>
            <Navbar />
        </div>
       
      <div>
        <h1>HOW IT WORKS</h1>
      </div>
      
        <div>
            <h1>Flexible work opportunities</h1>
            <p>We are looking for people from all over the world to participate in some of our many exciting work-from-home opportunities. These opportunities range from simple surveys that can be completed in less than one hour to on-going projects that last for months or longer. Leverage your social media interest, mobile device savviness, your college degree in linguistics, online research skills, or passion for images, video, or audio. With so many diverse projects, chances are we’ve got something for you.</p>
        </div>
        
        <div className='row'>
            <div className='col-sm-6'>
                <img src={process.env.PUBLIC_URL+'/images/What-you-need-to-be-successful.jpg'} alt='image' />
            </div>
            <div className='col-sm-6'>
                <h1>why appen</h1>
                <p>You enjoy competitive pay and benefit from having no set work hours or schedules. You will have the flexibility to schedule your hours to fit your lifestyle and to work around your career and family demands. You have the freedom to choose when and how much you would like to work.</p>
            </div>
        </div>    
           
            <div className='row'>
                
                <div className='col-sm-6'>
                    <h1>Getting started</h1>
                    <p>Click the Apply Now button and choose your country of residence to complete a short registration form. After that, our team will review your application and if there is a project that’s a good fit, we will send you a link to a Project Page that lists all the projects available to you. There are always new and exciting projects being added, so visit this page often!</p>
                </div>
                <div className='col-sm-6'>
                    <img src={process.env.PUBLIC_URL+'/images/Getting-Started.jpg'} alt='image'/>
                </div>
            </div>
            <div>
                <h1>Types of Jobs</h1>
                <p>Appen contributors conduct in depth internet-based research and provide information evaluation for leading companies from around the globe. Ideal candidates are self-reliant, self-motivated, are very internet savvy, have a broad range of interests, and enjoy online research and evaluation. Here are examples of some of the opportunities that may be available:</p>
            </div>
            <div className='row'>
                <div className='col-sm-6'>
                    <img src={process.env.PUBLIC_URL+'/images/Why-Appen.jpg'} alt='image'/>
                </div>
                <div className='col-sm-6'>
                    <h1>What you need to be sucesful</h1>
                    <p>Successful Appen contributors are smart, curious, and enjoy online research. Many projects may require you to pass a qualification exam to make sure you understand the requirements, so if you are a motivated, self-driven, organized individual, you should do well.</p>
                </div>
            </div>
            <div className='row'> 
                <div className='col-sm-6'>
                    <h1>General requirements</h1>
                    <ul>
                        <li>18 years of age and above</li>
                    </ul>
                </div>
                <div className='col-sm-6'>
                    <img src={process.env.PUBLIC_URL+'/images/General-Requirements-1.jpg'} alt='image' />
                </div>
            </div>
            <div>
                <h1>Frequently asked questions</h1>
            </div>   
      <Footer />
    </div>
  )
}
