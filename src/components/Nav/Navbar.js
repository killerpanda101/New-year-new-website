import React, { useState, useEffect } from 'react';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import {Link as ScrollLink} from 'react-scroll'
import { animateScroll as scroll} from 'react-scroll'
import './Navbar.css';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
    closeMobileMenu();
  }

  const toggleSocial = () => {
    closeMobileMenu();
  }

  const toggleAbout = () => {
    closeMobileMenu();
  }

  const toggleProjects = () => {
    closeMobileMenu();
  }

  const toggleArticles = () => {
    closeMobileMenu();
  }

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={toggleHome}>
            PARIJAT CHATTERJEE
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <ScrollLink to='about' smooth={true} duration={1000} className='nav-links' onClick={toggleAbout}>
                ABOUT ME
              </ScrollLink>
            </li>
            <li className='nav-item'>
              <ScrollLink
                to='projects'
                smooth={true} 
                duration={1000}
                className='nav-links'
                onClick={toggleProjects}
              >
                PROJECTS
              </ScrollLink>
            </li>
            <li className='nav-item'>
              <ScrollLink
                to='articles'
                smooth={true} 
                duration={1000}
                className='nav-links'
                onClick={toggleArticles}
              >
                ARTICLES
              </ScrollLink>
            </li>

            <li>
              <ScrollLink
                to='social'
                smooth={true} 
                duration={1000}
                className='nav-links-mobile'
                onClick={toggleSocial}
              >
                LET'S CONNECT
              </ScrollLink>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline' onClick={toggleSocial}>LET'S CONNECT</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
