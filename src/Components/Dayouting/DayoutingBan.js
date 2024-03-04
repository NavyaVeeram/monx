import React from 'react'
import image from './dayouting.webp'
import { Packages } from './DayoutPackages/DayoutPackages'
import { Dayoutactivities } from './DayoutActivities/Dayoutactivities'
import { Container } from 'react-bootstrap'



function DayoutingBan() {
  return (
    <>

      <img src={image} alt='image' style={{height: 'auto', width: '100%'}} />

      <Packages />
      <Dayoutactivities />
    </>
    
  )
}

export default DayoutingBan
