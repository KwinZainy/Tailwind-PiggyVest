import React, { useState } from 'react';
import {
  FiShield,
  FiTarget
} from "react-icons/fi";
import {
  LuChevronDown,
  LuLock,
  LuDollarSign
} from "react-icons/lu";
import { IoWalletOutline } from "react-icons/io5";
import { MdOutlineHouse } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import Button from '../components/reuseable/Button';
import { Link } from 'react-router-dom';

const Hamburger = () => {
  const [open, setOpen] = useState(false);
  const [hoverSave, setHoverSave] = useState(false);
  const [hoverResources, setHoverResources] = useState(false);

  const iconClasses = "w-10 h-10 flex-shrink-0";
  const headingClasses = "font-semibold text-base text-black";

  const MenuCard = ({ children }) => (
    <div className="w-full  text-lg font-medium text-gray-800 hover:bg-gray-50 transition text-center">
      {children}
    </div>
  );

  return (
    <div>
    
      <button
        onClick={() => setOpen(true)}
        className="cursor-pointer p-2 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Open menu"
      >
        <RxHamburgerMenu size={28} />
      </button>

    
      {open && (
        <div className="fixed inset-0 bg-[#F2F7F8] z-50 flex flex-col">
          
          <div className="flex justify-end p-5">
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="text-gray-700 text-3xl font-bold hover:text-red-600 focus:outline-none"
            >
              &times;
            </button>
          </div>

         
          <div className="flex flex-col items-center justify-start flex-grow space-y-6 px-6 sm:px-12 pt-10 overflow-y-auto">

            
            <div
              className="w-full  "
              onMouseEnter={() => setHoverSave(true)}
              onMouseLeave={() => setHoverSave(false)}
            >
              <div className="flex items-center justify-center px-6 py-3 cursor-pointer">
                <span className="text-lg font-medium text-gray-800">Save</span>
                <LuChevronDown className={`transition-transform duration-300 ${hoverSave ? 'rotate-180' : ''}`} />
              </div>

              {hoverSave && (
                <div className="px-6 pb-6 space-y-5">
                  {[
                    { icon: <FiShield className="text-[#0F60D6] bg-[#EFF6FF] " />, title: "Piggybank", desc: "Automated Saving" },
                    { icon: <FiTarget className="text-green-600 bg-[#DDF5E8]" />, title: "Target Savings", desc: "Goal-oriented Saving" },
                    { icon: <LuDollarSign className="text-[#122231] bg-[#F0F0F0]" />, title: "Flex Dollar", desc: "Dollar Savings" },
                    { icon: <LuLock className="text-[#329DF3] bg-[#E7F4FF]" />, title: "Safelock", desc: "Fixed Savings" },
                    { icon: <IoWalletOutline className="text-[#EA67AC] bg-[#FFF1F9]" />, title: "Flex Naira", desc: "Flexible Savings" },
                    { icon: <MdOutlineHouse className="text-[#FF4E00] bg-[#FFECE3]" />, title: "House Money", desc: "Semi-strict wallet" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className={`p-2 rounded-xl text-[24px] text-start flex-shrink-0 ${item.icon.props.className}`}>
                        {item.icon}
                      </div>
                      <div>
                        <h2 className={headingClasses}>{item.title}</h2>
                        <p className="text-[#7A7A7A] text-[13px]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

              <Link to='/invest'>
              <MenuCard> Invest</MenuCard>
              
              </Link>
            <Link to='/stories'><MenuCard>Stories</MenuCard></Link>
            <Link to='/faqs'><MenuCard>Faqs</MenuCard></Link>
           

         
            <div
              className="w-full"
              onMouseEnter={() => setHoverResources(true)}
              onMouseLeave={() => setHoverResources(false)}
            >
              <div className="flex items-center text-center justify-center py-3 px-6 cursor-pointer">
                <span className="text-lg font-medium text-gray-800">Resources</span>
                <LuChevronDown className={`transition-transform duration-300 ${hoverResources ? 'rotate-180' : ''}`} />
              </div>

              {hoverResources && (
                <div className="px-6 pb-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {[
                    { img: "./blog.svg", title: "Blog" },
                    { img: "./comics.svg", title: "Comics" },
                    { img: "./newsletter.svg", title: "Newsletter" },
                    { img: "./reports.svg", title: "Reports" },
                    { img: "./calculator.svg", title: "Calculator" },
                    { img: "./ebook.svg", title: "Ebook" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4 hover:bg-gray-50 p-2 rounded-md transition cursor-pointer">
                      <img src={item.img} alt={item.title} className={iconClasses} />
                      <h2 className={headingClasses}>{item.title}</h2>
                    </div>
                  ))}
                </div>
              )}
            </div>

          
            <div className="flex flex-col w-full max-w-md gap-6  items-center">
              <Button
                text="Sign in"
                btnBorder="#122231"
                className=" py-4 rounded-[10px] px-30 text-lg font-medium border border-[#122231]"
              />
              <Button
                bgColor="#122231"
                textColor="white"
                text="Create free account"
                className=" py-4 px-19 rounded-[10px] text-lg font-medium"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hamburger;
