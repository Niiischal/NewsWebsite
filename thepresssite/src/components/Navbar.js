import React from 'react';

const Navbar = () => {

    const headerStyles = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        padding: '20px 80px',
        display: 'flex',
        justifyContent: 'space-between',
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
        marginLeft: '20px'
      }

      const a={
        textDecoration:'none',
        padding:'6px 15px',
        color:'#fff',
        borderRadius: '20px',
      }

      
  return (
<>
<header style={headerStyles}>
    <a href="/" className='Logo' style={logoStyles}>ThePressSite</a>
    <ul style={ul}>
        <li style={li}>
            <div>
            <a href="/" style={a}>Home</a>
            </div>
        </li>
        <li style={li}>
            <div>
            <a href="/general" style={a}>General</a>
            </div>
        </li>
        <li style={li}>
            <div>
            <a href="/business" style={a}>Business</a>
            </div>
        </li>
        <li style={li}>
            <div>
            <a href="/entertainment" style={a}>Entertainment</a>
            </div>
        </li>
        <li style={li}>
            <div>
            <a href="/sports" style={a}>Sports</a>
            </div>
        </li>
    </ul>
</header>
</>
  )
}

export default Navbar
