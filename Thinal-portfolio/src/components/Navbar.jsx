import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import {styles} from '../style'
import { navLinks,socialLinks } from '../constants';
import {menu,close} from '../assets';

const Navbar = () => {

  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`
        ${styles.paddingX} w-full flex justify-between items-center py-5 fixed top-0 z-20 glass-effect`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
      <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((Link) => (
            <li
              key={Link.id}
              className={`${active===Link.title ? "text-white" : "text-secondary"} hover:text-white text-[22px] font-medium cursor-pointer`} onClick={()=>setActive(Link.title)}
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
              <div className={`${active===Link.title ? "visible" : "hidden"} opacity-80 red-orange-gradient w-[15px] h-[3px] rounded-full -mt-1`}/>
            </li>
          ))}
        </ul>
        <Link 
          to='/' 
          className='flex items-center gap' 
          onClick={()=>{
            setActive("");
            window.scrollTo(0,0);
           }}
        >
          {/* <img src={logo} alt="logo" className="w-9 h-9 object-contain"/> */}
          <p className='text-white text-[22px] cursor-pointer flex'><span className='sm:block visible lg:block lg:hidden sm:hidden uppercase'>&nbsp; Thinal &nbsp;</span></p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-5'>
          {socialLinks.map((Link) => (
            <li
              key={Link.id}
              className={`${active===Link.title ? "text-white" : "text-secondary"} hover:text-white text-[22px] font-medium cursor-pointer`} 
              onClick={()=>{
                setActive(Link.title);
                window.location.href = Link.url;
              }}
            >
              <div className='w-[30px] h-[30px] rounded-full bg-red-700 opacity-120 flex items-center justify-center'><img src={Link.icon} className='w-[28px]'/></div>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu}
            alt="menu"
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={()=>setToggle(!toggle)}
          />

          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
          <ul className='nav-bar-font list-none flex items-start flex-col gap-4'>
          {navLinks.map((Link) => (
            <li
              key={Link.id}
              className={`${active===Link.title ? "text-white" : "text-secondary"} text-[24px] font-medium cursor-pointer`}
              onClick={()=>{
                setToggle(!toggle);
                setActive(Link.title);
              }}
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar