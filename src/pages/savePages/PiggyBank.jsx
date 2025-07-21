import React from 'react'
import Phone from "../../assets/img/big-phone.avif"
import { FiShield } from "react-icons/fi";
const PiggyBank = () => {
  return (
    <div>
       <section>
        <main>
            <h1>Piggybank</h1>
            <nav>
                <FiShield className='text-[#0F60D6] bg-[#EFF6FF] ' />
                <p>Automated Savings</p>
            </nav>
        </main>
        </section> 
    </div>
  )
}

export default PiggyBank