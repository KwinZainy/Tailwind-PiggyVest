import React, { useState } from 'react';
import { LuChevronDown, LuLock, LuDollarSign } from "react-icons/lu";
import { IoWalletOutline } from "react-icons/io5";
import { MdOutlineHouse } from "react-icons/md";
import { FiTarget, FiShield } from "react-icons/fi";

const Save = ({ className }) => {
  const [drop, setDrop] = useState(false);

  const iconClasses = "p-2 rounded-xl text-[40px] flex-shrink-0";

  const headingClasses = "font-semibold text-lg text-black"; 

  return (
    <div
      onMouseEnter={() => setDrop(true)}
      onMouseLeave={() => setDrop(false)}
      className="relative"
    >
     
      <div className="flex items-center gap-1 cursor-pointer text-[#122231] hover:text-[#0F60D6] transition-colors duration-200">
        <h1 className="text-[16px] font-medium">Save</h1>
        <LuChevronDown className="text-[16px]" />
      </div>

     
      {drop && (
        <div
          className={`absolute top-full left-0 mt-4 flex w-[500px] max-w-[90vw] rounded-xl bg-white shadow-xl p-6 z-50 ${className || ''}`}
        >
        
          <section className="flex flex-col gap-6 w-1/2 pr-6">
            <nav className="flex items-center gap-4 hover:bg-gray-50 p-2 rounded-md transition">
              <FiShield className={`${iconClasses} text-[#0F60D6] bg-[#EFF6FF]`} />
              <div>
                <h2 className={headingClasses}>Piggybank</h2>
                <p className="text-[#7A7A7A] text-[13px]">Automated Saving</p>
              </div>
            </nav>
            <nav className="flex items-center gap-4 hover:bg-gray-50 p-2 rounded-md transition">
              <FiTarget className={`${iconClasses} text-green-600 bg-[#DDF5E8]`} />
              <div>
                <h2 className={headingClasses}>Target Savings</h2>
                <p className="text-[#7A7A7A] text-[13px]">Goal-oriented Saving</p>
              </div>
            </nav>
            <nav className="flex items-center gap-4 hover:bg-gray-50 p-2 rounded-md transition">
              <LuDollarSign className={`${iconClasses} bg-[#F0F0F0] text-[#122231]`} />
              <div>
                <h2 className={headingClasses}>Flex Dollar</h2>
                <p className="text-[#7A7A7A] text-[13px]">Dollar Savings</p>
              </div>
            </nav>
          </section>

         
          <section className="flex flex-col gap-6 w-1/2 pl-6">
            <nav className="flex items-center gap-4 hover:bg-gray-50 p-2 rounded-md transition">
              <LuLock className={`${iconClasses} text-[#329DF3] bg-[#E7F4FF]`} />
              <div>
                <h2 className={headingClasses}>Safelock</h2>
                <p className="text-[#7A7A7A] text-[13px]">Fixed Savings</p>
              </div>
            </nav>
            <nav className="flex items-center gap-4 hover:bg-gray-50 p-2 rounded-md transition">
              <IoWalletOutline className={`${iconClasses} bg-[#FFF1F9] text-[#EA67AC]`} />
              <div>
                <h2 className={headingClasses}>Flex Naira</h2>
                <p className="text-[#7A7A7A] text-[13px]">Flexible Savings</p>
              </div>
            </nav>
            <nav className="flex items-center gap-4 hover:bg-gray-50 p-2 rounded-md transition">
              <MdOutlineHouse className={`${iconClasses} bg-[#FFECE3] text-[#FF4E00]`} />
              <div>
                <h2 className={headingClasses}>House Money</h2>
                <p className="text-[#7A7A7A] text-[13px]">Semi-strict wallet</p>
              </div>
            </nav>
          </section>
        </div>
      )}
    </div>
  );
};

export default Save;
