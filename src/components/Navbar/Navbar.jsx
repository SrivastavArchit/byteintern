import React from 'react';
import { NavLink,Link } from 'react-router-dom';
import './navbar.css';
import menuImg from '../../Icon/menu-line.png'


const Navbar = () => {

  function openNav() {
    document.getElementById("myNav").style.width = "100%";
    setTimeout(() => {
      document.getElementById("menu_line").style.display = "none";
    }, 300)

  }

  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("menu_line").style.display = "block";
    console.log("ok")
  }
  return (
    <>
      <div className='Navbar-container'>
        <div className='navbox-logo-box'>
          logo
        </div>
        <div className='navbar-navigation-box'>
          <div className='nav-box'><NavLink to='/'>Home</NavLink></div>
          <div className='nav-box'>About</div>
          <div className='nav-box'>Contact</div>
          <div className='nav-box-btn' ><button ><Link to='/form'>Apply</Link></button></div>
        </div>

        <div className='side-menu-icon' id='menu_line'>
          <img src={menuImg} alt='logo-img' onClick={openNav}/>
        </div>
      </div>

      <div class="Curtain_Menu">
        <div id="myNav" class="overlay">

          <div className="menu-top">
            {/* <img src={menuImg} /> */}
          </div>
          <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>

          <div class="overlay-content">
          <div className='nav-box' onClick={closeNav}><NavLink to='/'>Home</NavLink></div>
          <div className='nav-box' onClick={closeNav}>About</div>
          <div className='nav-box' onClick={closeNav}>Contact</div>
          <Link to='/form' className='nav-box-btn' onClick={closeNav}><div  ><button >Apply</button></div></Link>
            
          </div>
        </div>
      </div>

    </>
  )
}

export default Navbar;