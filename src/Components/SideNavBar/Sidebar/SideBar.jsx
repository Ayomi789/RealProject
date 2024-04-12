
import { NavLink } from 'react-router-dom';
import './SideBar.css'
import {FaHome, FaUser} from "react-icons/fa"
import { AiOutlineSetting } from "react-icons/ai"


const links= [
    {to: "/", icon: <FaHome/>, label:"Home",id:1},
    {to: "/user", icon:<FaUser/>, label:"User", id:2},
    {to: "/settings", icon:<AiOutlineSetting/>, label:"Settings", id:3},
];



const SideBar = () => {
    return (
        <>
            <div className="sidebar">
                <div id='links'>
                    {
                        links.map(({to, icon, label , id})=>(
                        <NavLink key={id} to={to}> {icon} {label}</NavLink>))
                    }
                </div>
            </div>
        </>
    )
}

export default SideBar;