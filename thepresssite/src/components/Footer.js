import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="dark:bg-white-900" >
<div className="offcanvas-footer d-flex justify-content-evenly sticky-bottom" >
  <a href="/" class="footer-icon" style={{marginTop:"15px"}}>
    <i class="fab fa-facebook fa-lg" style={{ color: 'white' }}></i>
    <span class="sr-only">Facebook page</span>
  </a>
  <a href="/" class="footer-icon" style={{marginTop:"15px"}}>
    <i class="fab fa-twitter fa-lg" style={{ color: 'white' }}></i>
    <span class="sr-only">Twitter page</span>
  </a>
  <a href="/" class="footer-icon" style={{marginTop:"15px"}}>
    <i class="fab fa-instagram fa-lg" style={{ color: 'white' }}></i>
    <span class="sr-only">Instagram page</span>
  </a>
  <a href="/" class="footer-icon" style={{marginTop:"15px"}}>
    <i class="fab fa-discord"style={{ color: 'white' }} ></i>
    <span class="sr-only">Discord server</span>
  </a>
</div>
</footer>
    </div>
  )
}

export default Footer
