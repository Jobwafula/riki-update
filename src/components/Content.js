import React from 'react'
import Join from './Join'
import Target from './Target'
import Provider from './Provider'
import Success from './Success'
import Tabletasks from './Tabletasks'
import Dataone from './Dataone'
import  Slider from './Slider'
import { useState,useEffect } from 'react'

export default function Content() {
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
      <Join />
      <section id='target'>
         <Target />
         <Dataone />
         {/* <Tabletasks /> */}
         <Provider />
         <Success text="I have been working from home for about 4 years. Currently,
          in these difficult times due to the Covid-19 pandemic, 
          having the opportunity to access extra income is very helpful. In addition to this,
           collaborating on the different types of tasks on the platform helps to invest time,
            and gives you something remunerable to do during quarantine. 
            That’s one of the great benefits of working from home, and Appen is definitely an
          excellent platform to do it, with a wide variety of work to do."
          name='Job'
          country='Kenya'
          />
      </section>
      {/* <Slider /> */}
     
    </div>
  )
}
