import React from 'react'
import { NavLink } from 'react-router-dom'
import './navBarComponent.css'

const NavBarComponent = () => {
    return (
        <div>
            <ul className='navBar'>
                <li><NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>HOME</NavLink></li>
                <li><NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : '')}>ABOUT</NavLink></li>
            </ul>
        </div>
    )
}

export default NavBarComponent