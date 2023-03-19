import React,{useState,useEffect} from 'react'
import Navbar from '../components/MainLayout/Navbar';
import ApplyLogin from '../components/ApplyLogin';
import Content from '../components/Content';
import Footer from '../components/MainLayout/Footer';
import Hamburger from '../mobile/Hamburger';

export default function Home() {
  //small screen

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768)
    }
    handleResize() //initialized state
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div>
      {isMobile?<Hamburger />:<Navbar />}
        
     {isMobile?  "":<ApplyLogin /> }
        <Content />
        <Footer />   
    </div>
  )
}
