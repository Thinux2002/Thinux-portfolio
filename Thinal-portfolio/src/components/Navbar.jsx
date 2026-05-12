import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import { styles } from '../style';
import { navLinks, socialLinks } from '../constants';
import { menu, close } from '../assets';

const Navigation = ({ active, setActive, onLinkClick, isMobile = false }) => {
  return (
    <ul className={isMobile ? 'flex flex-col items-center gap-8 py-8' : 'nav-ul'}>
      {navLinks.map((link) => (
        <li
          key={link.id}
          className='nav-li group'
          onClick={() => {
            setActive(link.title);
            if (onLinkClick) onLinkClick();
          }}
        >
          <a 
            href={`#${link.id}`} 
            className={`nav-link text-[16px] font-medium tracking-wider transition-colors duration-300 ${active === link.title ? 'text-white' : 'text-secondary/70'}`}
          >
            {link.title}
          </a>
          <div
            className={`nav-indicator ${active === link.title ? 'active' : ''}`}
          />
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar-container ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className='navbar-inner'>
        {/* Brand */}
        <Link
          to='/'
          className='navbar-brand'
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <span className='navbar-name font-black tracking-[4px] uppercase text-white lg:text-[22px] text-[18px]'>Thinal</span>
          <div className='navbar-logo-dot' />
        </Link>

        {/* Desktop Navigation */}
        <div className='hidden md:flex items-center gap-6'>
          <Navigation active={active} setActive={setActive} />
          
          <div className='flex items-center gap-3 border-l border-white/10 pl-10 ml-4 h-8'>
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target='_blank'
                rel='noopener noreferrer'
                className='navbar-social-link transition-all duration-300'
                title={link.name}
              >
                <img
                  src={link.icon}
                  alt={link.name}
                  className='navbar-social-icon'
                />
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className='navbar-toggle md:hidden ml-auto flex items-center justify-center'
          onClick={() => setToggle(!toggle)}
          aria-label='Toggle menu'
        >
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-7 h-7 object-contain'
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {toggle && (
          <motion.div
            className='navbar-mobile-menu bg-[#020402]/98 backdrop-blur-3xl'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className='px-6 py-12 flex flex-col items-center'>
              <Navigation
                active={active}
                setActive={setActive}
                onLinkClick={() => setToggle(false)}
                isMobile={true}
              />
              
              <div className='flex items-center justify-center gap-8 mt-8 pt-10 border-t border-white/5 w-full'>
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='navbar-social-link w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-full'
                    title={link.name}
                  >
                    <img
                      src={link.icon}
                      alt={link.name}
                      className='navbar-social-icon w-6 h-6'
                    />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;