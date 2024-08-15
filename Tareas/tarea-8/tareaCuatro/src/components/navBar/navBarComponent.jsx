import React from 'react'
import { NavLink } from 'react-router-dom'
import './navBarComponent.css'

const NavBarComponent = () => {
    return (
        <div>
            <ul className='navBar'>
                <li><NavLink to='./' className={({ isActive }) => (isActive ? 'active' : '')}>HOME</NavLink></li>
                <li><NavLink to='./episodes' className={({ isActive }) => (isActive ? 'active' : '')}>EPISODES</NavLink></li>
                <li><NavLink to='./characters' className={({ isActive }) => (isActive ? 'active' : '')}>CHARACTERS</NavLink></li>
            </ul>
        </div>
    )
}

export default NavBarComponent