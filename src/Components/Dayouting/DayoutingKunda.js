import React from 'react'
import image from './dayouting.webp'
import { Packages } from './DayoutPackages/DayoutPackages'
import { Dayoutactivities } from './DayoutActivities/Dayoutactivities'

function DayoutingKunda() {
  return (
    <>
      <img src={image} alt='image' style={{height: 'auto', width: '100%'}} />
      <Packages />
      <Dayoutactivities />
    </>
  )
}

export default DayoutingKunda
