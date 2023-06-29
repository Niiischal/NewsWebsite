import React from 'react'
import { NavLink } from 'react-router-dom'
import '../style.css'

const Navbar1 = () => {
    const navNames={
        padding:'10px',
        textAlign:'center',
        fontSize:'1rem',
    }
    
    const navNames1={
        padding:'15px',
        textAlign:'center',
        fontSize:'1rem',
    }
  return (
    <div>
      <nav className="navbar fixed-top">
  <div className="container-fluid" >
    <a className="navbar-brand" href="#" style={{color:'#fff', fontWeight:'700', letterSpacing:'2.5px'}}>ThePressSite</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation" style={{backgroundColor:'#fff'}}>
      <span className="navbar-toggler-icon" style={{color:"white"}}></span>
    </button>
    <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel" style={{color:'#fff', fontWeight:'700', letterSpacing:'2.5px', fontSize:'1.3rem'}}>Navigation</h5>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item" style={navNames}>
          <NavLink to="/" className="links" style={({ isActive }) => ({
    color: isActive ? 'red' : '#fff',
  })}>Home</NavLink>
          </li>
          <li className="nav-item" style={navNames1}>
          <NavLink to="/general" className="links" style={({ isActive }) => ({
    color: isActive ? 'red' : '#fff',
  })}>General</NavLink>
          </li>
          <li className="nav-item" style={navNames1}>
          <NavLink to="/business" className="links" style={({ isActive }) => ({
    color: isActive ? 'red' : '#fff',
  })}>Business</NavLink>
          </li>
          <li className="nav-item" style={navNames1}>
          <NavLink to="/entertainment" className="links" style={({ isActive }) => ({
    color: isActive ? 'red' : '#fff',
  })}>Entertainment</NavLink>
          </li>
          <li className="nav-item" style={navNames1}>
          <NavLink to="/sports" className="links" style={({ isActive }) => ({
    color: isActive ? 'red' : '#fff',
  })}>Sports</NavLink>
          </li>
          <li className="nav-item" style={navNames1}>
          <NavLink to="/health" className="links" style={({ isActive }) => ({
    color: isActive ? 'red' : '#fff',
  })}>Health</NavLink>
          </li>
          <li className="nav-item" style={navNames1}>
          <NavLink to="/science" className="links" style={({ isActive }) => ({
    color: isActive ? 'red' : '#fff',
  })}>Science</NavLink>
          </li>
          <li className="nav-item" style={navNames1}>
          <NavLink to="/technology" className="links" style={({ isActive }) => ({
    color: isActive ? 'red' : '#fff',
  })}>Technology</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar1
