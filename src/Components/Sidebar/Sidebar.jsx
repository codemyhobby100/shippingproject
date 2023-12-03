import React from 'react';
import './Sidebar.css'
import { Link } from 'react-router-dom';
import { LuLayoutDashboard } from "react-icons/lu";

const Sidebar = () => {
  return (
    <div className="sidebar">
        <ul className="sidebar-menu">
            <li className='active'>
                <Link to="/overview">
                    <span><LuLayoutDashboard /></span>
                    <span>Overview</span>
                </Link>
            </li>
            <li>
            <Link to="/payment">Payment</Link>
            </li>
            <li>
            <Link to="/shipping">Shipping</Link>
            </li>
            <li>
            <Link to="/profile">User Profile</Link>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar