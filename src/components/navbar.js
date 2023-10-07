import React, { useState, useEffect } from 'react';
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
    <div className={`flex justify-between items-center h-20 z-50 fixed w-full bg-opacity-70 bg-gradient-to-b from-black/70 transition-all duration-300 ${isNavbarVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-full'}`}>
      <div className="items-center">
        <h1 className="ml-4 text-3xl cursor-pointer hover:text-4xl duration-100">
          <span className="text-accent font-bold">&lt;</span>
          <span className="text-text font-bold">YASI0</span>
          <span className="text-accent font-bold">/&gt;</span>
        </h1>
      </div>
      <li className="flex text-disabled-text font-bold space-x-4 mr-4 text-2xl">
        <ul className="text-text">Start<span className="text-accent-v2 font-bold">/&gt;</span></ul>
        <ul className="hover:text-slate-100 cursor-pointer">Work<span className="text-accent-v2 font-bold hover:text-accent">/&gt;</span></ul>
        <ul className="hover:text-slate-100 cursor-pointer">Lab<span className="text-accent-v2 font-bold hover:text-accent">/&gt;</span></ul>
        <ul className="hover:text-slate-100 cursor-pointer">About<span className="text-accent-v2 font-bold hover:text-accent">/&gt;</span></ul>
        <ul className="hover:text-slate-100 cursor-pointer">Contact<span className="text-accent-v2 font-bold hover:text-accent">/&gt;</span></ul>
      </li>
    </div>
  );
}

export default Navbar;
