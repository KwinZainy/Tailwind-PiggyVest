import React, {useState} from 'react'

import Button from '../components/reusable/Button';

import { Link } from 'react-router-dom';
import Save from '../pages/Save';
import Resources from '../pages/Resources';
import Hamburger from '../pages/Hamburger';
const Header = () => {

        
  return (
    <div>
       <header className=' h-24 flex justify-between items-center m-auto bg-blue-600 mx-12'>
        <section className='flex justify-between items-center gap-10 '>
            <Link to='/'>
            <main>
            <img src="./logo.svg" alt="logo" />
        </main>
            </Link>
        
        <main className='flex  mx-12 gap-9 items-center font-medium max-tablet:hidden '>
            
            <nav className='flex items-center' >
                <span><Save /></span>
               
            </nav>
            
            <Link to='/invest'><nav>Invest</nav></Link>
            <Link to='/stories'><nav>Stories</nav></Link>
            <Link to='/faqs'> <nav>FAQs</nav></Link>
           <nav className='flex items-center '>
                <span><Resources /></span>
               
            </nav>
           
            
        </main>
        </section>
        <section className='flex items-center gap-4 max-tablet:hidden'>
            <Button
            text="Sign in"
            btnBorder='#122231'
            />
            <Button 
            bgColor='#122231'
            textColor='white'
            text='Create free account'
            />
        </section>
        <section className='hidden max-tablet:block ' >
            <Hamburger/>
        </section>
        </header> 
        
    </div>
  )
}

export default Header