import React from 'react'
import Button from "../components/reuseable/Button"
import { FaApple } from "react-icons/fa";
import Apple from '../assets/img/apple.png'
const Invest = () => {
  return (
    <div>
      <section>
        <main>
          <h1>Invest on the go</h1>
          <p>Up to 35% returns</p>
          <p>Invest securely and confidently on the go.</p>
          <p>Up to 35% returns, 6-12 month duration.</p>
          <Button 
          text='Get on iphone'
          btnIcon= {<FaApple /> }

          />
        </main>
      </section>
    </div>
  )
}

export default Invest