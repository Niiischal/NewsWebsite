import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style.css';

const Navbar = () => {

    const headerStyles = {
        position: 'relative',
        top: 0,
        left: 0,
        width: '100%',
        padding: '20px',
        display: 'flex',
        justifyContent:'space-evenly',
        alignItems: 'center',
      };

      const logoStyles = {
        color: '#fff',
        fontWeight: 700,
        textDecoration: 'none',
        fontSize: '2em',
        letterSpacing: '2px',
      };

      const ul={
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',

      }

      const li={
        listStyle: 'none',
      }

      const a={
        textDecoration:'none',
        padding:'6px 20px',
        color:'#fff',
        borderRadius: '20px',
      }
      
  return (
<>
<header style={headerStyles}>
    <a href="/" className='Logo' style={logoStyles}>ThePressSite</a>
    <ul style={ul}>
        <li style={li}>
            <NavLink to="/" className="links" style={({ isActive }) => ({
    ...a,
    color: isActive ? '#2b1055' : '#fff',
    background: isActive ? '#fff' : '',
  })}>Home</NavLink>
        </li>
        <li style={li}>
            <NavLink to="/general" className="links" style={({ isActive }) => ({
    ...a,
    color: isActive ? '#2b1055' : '#fff',
    background: isActive ? '#fff' : '',
  })}>General</NavLink>
        </li>
        <li style={li}>
            <NavLink to="/business" className="links" style={({ isActive }) => ({
    ...a,
    color: isActive ? '#2b1055' : '#fff',
    background: isActive ? '#fff' : '',
  })}>Business</NavLink>
        </li>
        <li style={li}>
            <NavLink to="/entertainment" className="links" style={({ isActive }) => ({
    ...a,
    color: isActive ? '#2b1055' : '#fff',
    background: isActive ? '#fff' : '',
  })}>Entertainment</NavLink>
        </li>
        <li style={li}>
            <NavLink to="/sports" className="links" style={({ isActive }) => ({
    ...a,
    color: isActive ? '#2b1055' : '#fff',
    background: isActive ? '#fff' : '',
  })}>Sports</NavLink>
        </li>
        <li style={li}>
            <NavLink to="/health" className="links" style={({ isActive }) => ({
    ...a,
    color: isActive ? '#2b1055' : '#fff',
    background: isActive ? '#fff' : '',
  })}>Health</NavLink>
        </li>
        <li style={li}>
            <NavLink to="/science" className="links" style={({ isActive }) => ({
    ...a,
    color: isActive ? '#2b1055' : '#fff',
    background: isActive ? '#fff' : '',
  })}>Science</NavLink>
        </li>
        <li style={li}>
            <NavLink to="/technology" className="links" style={({ isActive }) => ({
    ...a,
    color: isActive ? '#2b1055' : '#fff',
    background: isActive ? '#fff' : '',
  })}>Technology</NavLink>
        </li>
    </ul>
</header>
</>
  )
}

export default Navbar
