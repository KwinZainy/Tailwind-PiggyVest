import React, {useState} from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import Save from './Save';
import Invest from './Invest';
import Stories from './Stories';
import Faqs from './Faqs';
import Resources from './Resources';
import Button from '../components/reusable/Button';
const Hamburger = () => {

    const [open, setOpen] = useState(false)
    
  return (
    <div >
        <div onClick={()=>setOpen(true)}>
            <RxHamburgerMenu size={30}/>
        </div>
      
        {open&&(
            <div className='fixed inset-0 bg-[#F2F7F8] z-50'>
                <div className=' text-[40px] absolute top-5 right-5 text-[40px]0'>
          <button  onClick={()=>setOpen(false)}>X</button>
          </div>
        <div className='  z-50  grid items-center justify-center' >
            <div className='grid gap-10 text-black text-2xl mt-48'>
           <nav><Save className='grid justify-between items-center rounded-[10px] w-[78%] px-10 py-2 bg-[#FFFFFF] overflow-auto h-64 ' /></nav>
           <nav><Invest/></nav>
           <nav><Stories/></nav>
           <nav><Faqs/></nav>
           <nav><Resources  className=' flex justify-between items-center rounded-[10px] w-[95%] px-10 py-6 bg-[#FFFFFF] gap-5'/></nav>
            <Button
            text="Sign in"
            btnBorder='#122231'
            className='px-10
            py-5 rounded-[10px]'
            />
            
            <Button 
            bgColor='#122231'
            textColor='white'
            text='Create free account'
            className='px-10
            py-5 rounded-[10px]'
            />
            
          </div>
        </div>
        </div>
    )}
    </div>
    
  )
}

export default Hamburger