import React from 'react'
import Navbar from '../components/Navbar'
import sidebarData from '../components/sidebarData'
import CustomerListContainer from '../components/CustomerListContainer'
export default function Dashboard() {
  return (
    <div style={{height:"100%"}}>
        <Navbar list={sidebarData}/>
        <CustomerListContainer/>
    </div>
  )
}
