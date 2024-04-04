import React from 'react';
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
          <div className='nav-box'>Home</div>
          <div className='nav-box'>About</div>
          <div className='nav-box'>Contact</div>
          <div className='nav-box-btn' ><button >Apply</button></div>
        </div>

        <div className='side-menu-icon' id='menu_line'>
          <img src={menuImg} alt='logo-img' onClick={openNav}/>
        </div>
      </div>

      <div class="Curtain_Menu">
        <div id="myNav" class="overlay">

          <div className="menu-top">
            <img src={menuImg} />
          </div>
          <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>

          <div class="overlay-content">
         <div onClick={closeNav}>home</div>
         <div onClick={closeNav}>home</div>
         <div onClick={closeNav}>home</div>
         <div onClick={closeNav}>home</div>
            
          </div>
        </div>
      </div>

    </>
  )
}

export default Navbar;