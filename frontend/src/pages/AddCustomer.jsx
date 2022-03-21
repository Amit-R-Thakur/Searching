import React from 'react'
import Navbar from '../components/Navbar'
import sidebarData from '../components/sidebarData'
import AddUser from '../components/AddUser'
export default function AddCustomer() {
  return (
    <div style={{height:"100%"}}>
        <Navbar list={sidebarData}/>
        <div style={{height:"calc(100% - 8%)"}}>
            <AddUser/>


        </div>

    </div>
  )
}
