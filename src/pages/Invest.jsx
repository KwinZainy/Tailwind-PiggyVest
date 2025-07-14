import React from 'react'
import Button from "../components/reuseable/Button"
import { FaApple } from "react-icons/fa";
import Apple from '../assets/img/apple.png'
import { IoLogoApple } from "react-icons/io";
const Invest = () => {
  return (
    <div>
      <section>
        <main>
          <h1>Invest on the go</h1>
          <p>Up to 35% returns</p>
          <p>Invest securely and confidently on the go.</p>
          <p>Up to 35% returns, 6-12 month duration.</p>
             <button className=' px-4 py-3.5 rounded-[10px] text-[15px] flex gap-2 items-center font-[500]
                              max-sLaptop:px-3 max-sLaptop:py-2 max-sLaptop:text-[16px]
                              justify-center text-white bg-[#122231]
                              max-tablet:w-fit max-tablet:p-4 
                              max-mobile:p-5
                              '>
                <FaApple color='#fff' size={20} />
                Get in iPhone
              </button>
        </main>
      </section>
    </div>
  )
}

export default Invest