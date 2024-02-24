import React from 'react'
import './SideDrawer.css'
const SideDrawer = ({show}) => {

  const sideDrawerClass = ["sideDrawer"]
  if(show) {
    sideDrawerClass.push("show")
  }
  return (
    <div className={sideDrawerClass.join(" ")}>
      
    </div>
  )
}

export default SideDrawer
