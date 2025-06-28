import React, {useState} from 'react'
import { LuChevronDown } from "react-icons/lu";
const Resources = ({className}) => {
  const [down, setDown] = useState(false)
  return (
    <div onMouseEnter={()=>setDown(true)}
    onMouseLeave={()=> setDown(false)}
    >
      <div className=' relative flex items-center gap-0.5'>
        <h1>Resources</h1>
        <LuChevronDown/>
      </div>
      {down &&(
              <div className='absolute flex justify-between items-center h-auto rounded-[10px] w-[33%] px-10 py-6 bg-[#FFFFFF] gap-5' class={className}>
                          <section className=' grid gap-6 w-[50%]'>

                        <nav className=' flex items-center gap-2 mt-5'>       
                          
                            <img className=' size-12' src="./blog.svg" alt="logo" />
                            <h1 className=' text-[#3D4E64] text-[14px]'>Blog</h1>                      
                          
                        </nav>

                        <nav className=' flex items-center gap-2'>
                        
                            <img className=' size-12' src="./comics.svg" alt="logo" />
                            <h1 className=' text-[#3D4E64] text-[14px]'>Comics </h1>
                          
                        </nav>

                        <nav className=' flex items-center gap-2'>
                          
                             <img className=' size-12' src="./newsletter.svg" alt="logo" />
                            <h1 className=' text-[#3D4E64] text-[14px]'>Newsletter</h1>
                         
                        </nav>
                        </section>

                        <section className=' grid gap-6'>

                          <nav  className=' flex items-center gap-2 mt-5'>
                            
                               <img className=' size-12' src="./reports.svg" alt="logo" />
                              <h1 className=' text-[#3D4E64] text-[14px]'>Reports</h1>
                           
                          </nav>

                           <nav  className=' flex items-center gap-2'>
                            
                               <img className=' size-12' src="./calculator.svg" alt="logo" />
                              <h1 className=' text-[#3D4E64] text-[14px]'>Calculator</h1>
                           
                          </nav>

                           <nav  className=' flex items-center gap-2'>
                          
                               <img className=' size-12' src="./ebook.svg" alt="logo" />
                              <h1 className=' text-[#3D4E64] text-[14px]'>Ebook</h1>
                            
                          </nav>
                          
                          
                        </section>
                        </div>
      )}
    </div>
  )
}

export default Resources