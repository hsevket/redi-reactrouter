import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    

    
  return (
    <ul>
        <NavLink to='/' style={({ isActive }) => (isActive ? {textDecoration: 'none'} : null)}>Home</NavLink>
        <NavLink to='/about' style={({ isActive }) => (isActive ? {textDecoration: 'none'} : null)}>About</NavLink>
        <NavLink to='/products' style={({ isActive }) => (isActive ? {textDecoration: 'none'} : null)}>Products</NavLink>

    </ul>
  )
}
