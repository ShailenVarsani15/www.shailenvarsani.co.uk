import React, { useState, useEffect } from 'react';
import './global.css'
import './navBar.css';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === 'Escape') setIsOpen(false);
        };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
    }, []);

  return (
    <>
    <div className="logoContainer">
        <svg viewBox="0 0 307.24 373.05" width="50" height="50">
            <path className="logo-path" d="M262.85,224.99c-2.39-3.91-5.25-7.88-8.03-11.16-7.61-8.96-15.66-14.73-21.61-18.2L307.24.22h-39.72l-17.24,45.04c-3.82-5.27-9.53-11.93-17.6-18.64-9.32-7.74-19.89-13.91-31.44-18.33-14.37-5.5-30.27-8.29-47.26-8.29s-32.83,2.8-47.26,8.31c-11.59,4.43-22.24,10.61-31.67,18.37-8.43,6.94-14.34,13.89-18.01,18.84L39.7.22H0l126.77,335.18c-15.86-2.18-28.64-8.21-38.97-18.35-4.81-4.72-8.9-10.17-11.84-15.76-6.56-12.47-7.71-23.67-8.01-31.01l-.38-9.33H31.65v11.48c.03,11.87,2.64,42.15,26.2,66.92,10.36,10.9,20.92,18.38,33.23,23.53,16.35,6.84,36.98,10.17,63.06,10.17,17.27,0,31.49-1.46,43.47-4.45,4.04-1.01,7.87-2.36,11.4-3.67,16-5.92,28.64-14.06,38.64-24.86,6.3-6.81,12-15.1,16.05-23.34,5.85-11.92,9.39-23.91,10.52-35.66,1.28-13.29.4-25.75-2.54-36.03-1.99-6.97-4.96-13.71-8.83-20.05ZM220.07,230.52c11.09,8.75,17.16,20.6,18.06,35.27.83,13.51-3.11,26.77-6.72,34.01-9.27,18.57-28.11,31.6-50.88,35.41l39.54-104.69ZM219.96,125.77l-.8,2.08-20.01,53.25c-4.97-2.07-12.28-5.14-19.94-8.36-8.89-3.74-18.09-7.61-23.79-9.96-31.5-13.02-51.38-24.2-62.57-35.21-9.65-9.49-13.58-19.2-13.58-33.5,0-34.18,30.83-58.05,74.97-58.05,29.41,0,53.72,11.39,66.65,31.18,13.23,22.01,7.6,36.55-.93,58.57ZM115.03,186.27c11.2,4.64,58.29,23.51,70.41,28.36l-31.83,83.16-43.49-113.61c1.77.77,3.41,1.47,4.91,2.09Z"/>
        </svg>
    </div>
    <button className="menu-btn" onClick={toggleMenu} aria-label="Toggle Menu">
        <div className={`hamburger ${isOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </button>
    <div className={`overlay ${isOpen ? 'visible' : ''}`} onClick={toggleMenu} />
        <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className="multiLayerReveal layer-1"></div>
            <div className="multiLayerReveal layer-2"></div>
            <div className="sidebarContent">
                <ul className="navLinks">
                    <li><a href="#hero" onClick={toggleMenu}>Home</a></li>
                    <li><a href="#work" onClick={toggleMenu}>Work</a></li>
                    <li><a href="#about" onClick={toggleMenu}>About</a></li>
                    <li><a href="#news" onClick={toggleMenu}>News</a></li>
                    <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
                </ul>
            </div>
        </nav>
    </>
  );
};

export default NavBar;