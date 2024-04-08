import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../Components/SideNavBar/Sidebar/SideBar'
import './DashBoardLayout.css'
import TopBar from '../Components/SideNavBar/TopBar/TopBar'


const DashBoardLayout = () => {
  return (
    <>
    <div id='layout'>
        <SideBar/>
      <Outlet/>
    </div>
    
    </>
  )
}

export default DashBoardLayout;
