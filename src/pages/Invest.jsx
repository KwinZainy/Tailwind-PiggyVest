import React from 'react'
import { FaApple } from "react-icons/fa";
import Phone from "../assets/img/big-phone.avif"
const Invest = () => {
  return (
    <div>
      <section>
        <main>
          <h1>Invest on the go</h1>
          <p>Up to 35% returns</p>
          <p>Invest securely and confidently on the go.</p>
          <p>Up to 35% returns, 6-12 month duration.</p>
          <div className=' flex mt-4 gap-2'>
             <button className=' px-4 py-3.5 rounded-[10px] text-[15px] flex gap-2 items-center font-[500]
                              max-sLaptop:px-3 max-sLaptop:py-2 max-sLaptop:text-[16px]
                              justify-center text-white bg-[#122231]
                              max-tablet:w-fit max-tablet:p-4 
                              max-mobile:p-5
                              '>
                <FaApple color='#fff' size={20} />
                Get in iPhone
              </button>
              <button className=' px-4 py-3.5 rounded-[10px] text-[15px] flex gap-2 items-center font-[500]
                              max-sLaptop:px-3 max-sLaptop:py-2 max-sLaptop:text-[16px]
                              justify-center text-white bg-[#122231]
                              max-tablet:w-fit max-tablet:p-4 
                              max-mobile:p-5
                              '>
                <FaApple color='#fff' size={20} />
                Get in iPhone
              </button>
              </div>
        </main>
        <main >
          <img src={Phone} alt="" className=' max-w-[800px]' />
        </main>
      </section>
    </div>
  )
}

export default Invest