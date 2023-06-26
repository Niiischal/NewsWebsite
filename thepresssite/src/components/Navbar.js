import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const headerStyles = {
        position: 'fixed',
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
            <Link to="/" style={a}>Home</Link>
        </li>
        <li style={li}>
            <Link to="/" style={a}>General</Link>
        </li>
        <li style={li}>
            <Link to="/" style={a}>Business</Link>
        </li>
        <li style={li}>
            <Link to="/" style={a}>Entertainment</Link>
        </li>
        <li style={li}>
            <Link to="/" style={a}>Sports</Link>
        </li>
        <li style={li}>
            <Link to="/" style={a}>Health</Link>
        </li>
        <li style={li}>
            <Link to="/" style={a}>Science</Link>
        </li>
        <li style={li}>
            <Link to="/" style={a}>Technology</Link>
        </li>
    </ul>
</header>
</>
  )
}

export default Navbar
