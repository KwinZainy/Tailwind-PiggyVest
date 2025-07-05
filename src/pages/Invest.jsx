import React from 'react'
import Pages from '../components/reuseable/Pages'
import Button from '../components/reuseable/Button'
import App from "../assets/img/app.png"
const Invest = () => {
  return (
    <div>
      <section className=' flex bg-amber-500 flex-col  justify-center '>
      <Pages
      head = 'Invest on the go'
      paragraph='Up to 35% returns'
      text='
      Invest securely and confidently on the go.
      Up to 35% returns, 6-12 month duration'
      />
      <Button
      btnIcon={App}
      text='Get on iphone'
      bgColor='#000000'
      textColor='white'
      />
      </section>
    </div>
  )
}

export default Invest