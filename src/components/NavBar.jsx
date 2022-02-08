import './Main.css'
import { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import logo from '../../resources/hackaruto-logo.png'

const NavBarItem = ({ title , classProps}) =>{
    return (
       <li className={`mx-4 cursor-pointer ${classProps}`} > 
          {title}
       </li>
    )
}


const Navbar = () => {
   const [toggleMenu , setToggleMenu ] = useState(false);
   const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 50){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);

    return (
        <nav className={colorChange?"w-full flex md:justify-center justify-between items-center p-4 fixed top-0 z-1 bg-white drop-shadow":"w-full flex md:justify-center justify-between items-center p-4 fixed top-0 z-10000 bg-white z-1"}>
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <a href="#"><img src={logo} alt="logo" className="h-10 cursor-pointer" /></a>
      </div>
      <ul className="text-black md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Home", "About", "Projects","Events", "Team"].map((item, index) => (
          <a href={"#"+ item} ><NavBarItem key={item + index} title={item} /></a>
        ))}
        <li className="border-2 border-orange-500 py-1.5 px-7 mx-4 rounded-xl cursor-pointer text-orange-500 hover:bg-orange-500 hover:text-white hover:border-white">
          Join Us
        </li>
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-black md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-center rounded-md bg-white text-black animate-slide-in text-2xl font-semibold"
          >
            <li className='bg-gray-100 p-4 pt-2 pb-2 rounded-[50%]  text-right absolute right-5'><AiOutlineClose className="text-2xl my-2" onClick={() => setToggleMenu(false)} /></li>
            <div className='mb-12'></div>
            {["Home", "About", "Projects","Events", "Team"].map(
              (item, index) => <a href={"#" + item} onClick={() => setToggleMenu(false)} className='pt-5 pb-5'><NavBarItem key={item + index} title={item} classprops="my-2 text-lg" /></a>,
            )}
          </ul>
        )}
      </div>
    </nav>
    )
}

export default Navbar;
