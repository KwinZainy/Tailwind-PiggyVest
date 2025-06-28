import React, {useState} from 'react'
import { LuChevronDown } from "react-icons/lu";
import { LuLock } from "react-icons/lu";
import { IoWalletOutline } from "react-icons/io5";
import { MdOutlineHouse } from "react-icons/md";
import { FiTarget } from "react-icons/fi";
import { LuDollarSign } from "react-icons/lu";
import { FiShield } from "react-icons/fi";
const Save = ({className}) => {
    const [drop, setDrop] = useState(false)
  return (
    <div onMouseEnter={()=>setDrop(true)} 
    onMouseLeave={()=>setDrop(false)}
    >
        <div className=' relative flex items-center gap-0.5'>
        <h1>Save</h1>
          <LuChevronDown/>
        </div>
        
            {drop &&(
                <div className='absolute flex justify-between items-center h-auto rounded-[10px] w-[38%]  pt-5 px-10 py-6 bg-[#FFFFFF] gap-5 ' class={className}>
                  <section className=' grid gap-6 w-[50%]'>
                <nav className=' flex items-center justify-center gap-2 '>
                  <main>
                    <FiShield className=' text-[#0F60D6] bg-[#EFF6FF] py-2 px-2 rounded-[10px] size-8'/>
                  </main>
                  <main>
                    <h1 className=' '>Piggybank</h1>
                    <p className=' text-[#BCBFBF] text-[14px]'>Automated Saving</p>
                  </main>
                </nav>
                <nav className=' flex items-center gap-2'>
                  <main>
                    <FiTarget className=' text-green-500 size-8 bg-[#DDF5E8] px-2 py-2 rounded-[10px]'/>
                  </main>
                  <main>
                    <h1>Target Savings</h1>
                    <p className=' text-[#BCBFBF] text-[14px'>Goal-oriented Saving</p>
                  </main>
                </nav>
                <nav className=' flex items-center gap-2'>
                  <main>
                    <LuDollarSign className=' size-8 bg-[#F0F0F0] px-2 py-2 rounded-[10px]'/>
                  </main>
                  <main>
                    <h1>Flex Dollar</h1>
                    <p className=' text-[#BCBFBF] text-[14px'>Dollar Savings</p>
                  </main>
                </nav>
                </section>
                <section className=' grid gap-6'>
                  <nav  className=' flex items-center gap-2 '>
                    <main>
                      <LuLock className=' text-[#329DF3] size-8 bg-[#E7F4FF] px-2 py-2 rounded-[10px]'/>
                    </main>
                    <main>
                      <h1>Savings</h1>
                      <p className=' text-[#BCBFBF] text-[14px'>Fixed Savings</p>
                    </main>
                  </nav>
                   <nav  className=' flex items-center gap-2'>
                    <main>
                      <IoWalletOutline className=' bg-[#FFF1F9] px-2 py-2 rounded-[10px] size-8 text-[#EA67AC]'/>
                    </main>
                    <main>
                      <h1>Flex Naira</h1>
                      <p className=' text-[#BCBFBF] text-[14px'>Flexible Savings</p>
                    </main>
                  </nav>
                   <nav  className=' flex items-center gap-2'>
                    <main>
                      <MdOutlineHouse className=' bg-[#FFECE3] px-2 py-2 rounded-[10px] size-8 text-[#FF4E00]'/>
                    </main>
                    <main>
                      <h1>House Money</h1>
                      <p className=' text-[#BCBFBF] text-[14px'>Semi Strict wallet</p>
                    </main>
                  </nav>
                  
                  
                </section>
                </div>
            )}
        </div>
        
  )
}

export default Save