import React from 'react'
import data from './data'
import { useState, useEffect } from 'react'

export default function Dataone() {
  // hover
  const [hoveredItem, setHoveredItem] = useState(null)

  const handleHover = (itemid) => {
    setHoveredItem(itemid)
  }

  const handleMouseLeave = () => {
    setHoveredItem(null)
  }

  
  
  // is small screen?
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768)
    }
    handleResize() //initialized state
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const styles = {
    container: {
      padding: '20px',
      margin: '10px',
      fontWeight: 'bolder',
    },
    item: {
      display: isMobile ? 'block' : 'inline-block',
      width: isMobile ? '100%' : '50%',
       padding: hoveredItem ? '10px' : '10px',
      //  transformstyle: 'preserve-3d',
      //  transform: hoveredItem !== null ? 'rotateY(360deg)' : 'none',
       transition: 'all 0.3s ease'
      
    },
    title: {
      color: 'red',
      textTransform: 'capitalize',
    },
    text: {
      fontSize: '3rem',
      fontWeight: 'light',
    },
    image: {
      width: '100px',
      height: '100px',
    },
    hover: {},
  }

  const arrayelement = data.map((item) => (
    <div
    onMouseEnter={()=>handleHover(item.id)}
    onMouseLeave={handleMouseLeave}
    style={styles.item}
    key={item.id}
    
    >
      <div
        style={{
          boxShadow: '0 0 0 0.1rem rgba(78, 115, 223, 0.25)',
          display: 'flex',
          flexDirection: 'column',
          height: isMobile ? '90vh' : '50vh',
          padding: '10px',
        }}
      >
        <div class="AddHeader">
          <img src={item.img} alt="" />
          <h2 style={styles.title}>{item.title}</h2>
        </div>
        <h1 style={styles.text}>
          <small>{item.text}</small>
        </h1>
      </div>
    </div>
  ))

  return <div style={styles.container}>{arrayelement}</div>
}
