import React from 'react'
import Navbar from '../components/Navbar'
import sidebarData from '../components/sidebarData'
export default function Dashboard() {
  return (
    <div style={{height:"100%"}}>
        <Navbar list={sidebarData}/>
    </div>
  )
}
