import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Save from '../pages/Save';
import Resources from '../pages/Resources';
import Hamburger from '../pages/Hamburger';
import Button from '../components/reuseable/Button';

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

  
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className=" w-full text-center mt-2 flex">
     <header className="h-24 w-full bg-white px-20 flex items-center">
  
  <div className="flex items-center gap-10 flex-grow">
    <Link to="/">
      <img src="./logo.svg" alt="logo" className="w-[200px]" />
    </Link>

    {!isMobile && (
      <nav className="flex gap-8 font-medium">
        <Save />
        <Link to="/invest">Invest</Link>
        <Link to="/stories">Stories</Link>
        <Link to="/faqs">FAQs</Link>
        <Resources />
      </nav>
    )}
  </div>

 
  {!isMobile ? (
    <div className="flex items-center gap-4">
      <Button text="Sign in" btnBorder="#122231" />
      <Button bgColor="#122231" textColor="white" text="Create free account" />
    </div>
  ) : (
    <div>
      <Hamburger />
    </div>
  )}
</header>

    </div>
  );
};

export default Header;
