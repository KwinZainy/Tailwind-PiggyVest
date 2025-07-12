import React, { useState } from 'react';
import { LuChevronDown } from "react-icons/lu";

const Resources = ({ className }) => {
  const [down, setDown] = useState(false);

  const iconClasses = "w-10 h-10 flex-shrink-0";
  const headingClasses = "font-semibold text-black";

  return (
    <div
      onMouseEnter={() => setDown(true)}
      onMouseLeave={() => setDown(false)}
      className="relative"
    >
      <div className="flex items-center gap-1 cursor-pointer text-[#122231] hover:text-[#0F60D6] transition-colors duration-200">
        <h1 className="text-[16px] font-medium">Resources</h1>
        <LuChevronDown className="text-[16px]" />
      </div>

      {down && (
        <div
          className={`absolute top-full left-0  flex w-[480px] max-w-[90vw] rounded-xl bg-white shadow-xl p-6 z-50 ${className || ''}`}
        >
          <section className="flex flex-col gap-6 w-1/2 pr-3">
            <nav className="flex items-center gap-4 hover:bg-gray-50 p-2 rounded-md transition cursor-pointer">
              <img src="./blog.svg" alt="Blog" className={iconClasses} />
              <h2 className={headingClasses}>Blog</h2>
            </nav>
            <nav className="flex items-center gap-4 hover:bg-gray-50 p-2 rounded-md transition cursor-pointer">
              <img src="./comics.svg" alt="Comics" className={iconClasses} />
              <h2 className={headingClasses}>Comics</h2>
            </nav>
            <nav className="flex items-center gap-4 hover:bg-gray-50 p-2 rounded-md transition cursor-pointer">
              <img src="./newsletter.svg" alt="Newsletter" className={iconClasses} />
              <h2 className={headingClasses}>Newsletter</h2>
            </nav>
          </section>

          <section className="flex flex-col gap-6 w-1/2 pl-6">
            <nav className="flex items-center gap-4 hover:bg-gray-50 p-2 rounded-md transition cursor-pointer">
              <img src="./reports.svg" alt="Reports" className={iconClasses} />
              <h2 className={headingClasses}>Reports</h2>
            </nav>
            <nav className="flex items-center gap-4 hover:bg-gray-50 p-2 rounded-md transition cursor-pointer">
              <img src="./calculator.svg" alt="Calculator" className={iconClasses} />
              <h2 className={headingClasses}>Calculator</h2>
            </nav>
            <nav className="flex items-center gap-4 hover:bg-gray-50 p-2 rounded-md transition cursor-pointer">
              <img src="./ebook.svg" alt="Ebook" className={iconClasses} />
              <h2 className={headingClasses}>Ebook</h2>
            </nav>
          </section>
        </div>
      )}
    </div>
  );
};

export default Resources;
