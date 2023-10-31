import React, { useState, useEffect } from 'react';
import { slide as Menu } from 'react-burger-menu'
import "./styles/navbar.css"

function scrollToSection(elementId) {
  console.log('scrollToSection called with elementId:', elementId);
  const element = document.getElementById(elementId);
  if(element){
    element.scrollIntoView({ behavior: 'smooth' });
  };
}

function Navbar() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsNavbarVisible(
        currentScrollPos < 10 || currentScrollPos < prevScrollPos
      );
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);
  return (
    <div>
      <div className={`flex fixed justify-between items-center h-20 z-40 w-full bg-opacity-70 lg:mix-blend-difference bg-gradient-to-b from-primary/90 lg:from-white/70 transition-all duration-300 ${isNavbarVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-full'}`}>
        <div className="hidden items-center lg:flex ">
          <h1 className="ml-4 text-3xl cursor-pointer hover:text-4xl duration-100">
            <span className="text-black  font-bold">&lt;</span>
            <span className="text-white font-bold">K0NSTANTIN0S</span>
            <span className="text-black  font-bold">/&gt;</span>
          </h1>
        </div>
        <ul className="hidden font-bold space-x-4 mr-4 text-2xl lg:flex">
          <li className="text-white cursor-pointer opacity-100 hover:opacity-60"><a href='#home' onClick={(e) => {e.preventDefault(); scrollToSection('home')}}>Home</a><span className="text-black font-bold">/&gt;</span></li>
          <li className="text-white cursor-pointer opacity-100 hover:opacity-60"><a href='#education' onClick={(e) => {e.preventDefault(); scrollToSection('education')}}>Education</a><span className="text-black font-bold">/&gt;</span></li>
          <li className="text-white cursor-pointer opacity-100 hover:opacity-60"><a href='#projects' onClick={(e) => {e.preventDefault(); scrollToSection('projects')}}>Projects</a><span className="text-black font-bold">/&gt;</span></li>
          <li className="text-white cursor-pointer opacity-100 hover:opacity-60"><a href='#footer' onClick={(e) => {e.preventDefault(); scrollToSection('footer')}}>MySocial</a><span className="text-black font-bold">/&gt;</span></li>
          <li className="text-white cursor-pointer opacity-100 hover:opacity-60"><a href='/myCV.pdf' download>MyCV</a><span className="text-black font-bold">/&gt;</span></li>
        </ul>
      </div>
      <div className={`lg:hidden z-50 flex fixed w-full transition-all duration-300 ${isNavbarVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-full'}`}>
          <Menu right>
            <ul className="flex flex-col space-y-5 font-bold mr-4 text-2xl ">
              <li className="text-fuchsia-50 cursor-pointer opacity-100 hover:opacity-60"><a href='#home' onClick={(e) => {e.preventDefault(); scrollToSection('home')}}>Home</a><span className="text-background  font-bold">/&gt;</span></li>
              <li className="text-fuchsia-50 cursor-pointer opacity-100 hover:opacity-60"><a href='#education' onClick={(e) => {e.preventDefault(); scrollToSection('education')}}>Education</a><span className="text-background font-bold">/&gt;</span></li>
              <li className="text-fuchsia-50 cursor-pointer opacity-100 hover:opacity-60"><a href='#projects' onClick={(e) => {e.preventDefault(); scrollToSection('projects')}}>Projects</a><span className="text-background font-bold">/&gt;</span></li>
              <li className="text-fuchsia-50 cursor-pointer opacity-100 hover:opacity-60"><a href='#footer' onClick={(e) => {e.preventDefault(); scrollToSection('footer')}}>MySocial</a><span className="text-background font-bold">/&gt;</span></li>
              <li className="text-fuchsia-50 cursor-pointer opacity-100 hover:opacity-60"><a href='/myCV.pdf' download>MyCV</a><span className="text-background font-bold">/&gt;</span></li>
            </ul>
          </Menu>
        </div>
    </div>
  );
}

export default Navbar;
