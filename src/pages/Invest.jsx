import React from 'react'
import Pages from '../components/reuseable/Pages'
import Button from '../components/reuseable/Button'
import App from "../assets/img/app.png"
import Phone from '../assets/img/phonep.png'
import Image from '../components/reuseable/Image'
import PagesHero from '../pagesComponents/PagesHero'
import Image18 from '../assets/img/img18.png'
const Invest = () => {
  return (
      <div className=' max-w-[2020px] '>
    <div className=' flex justify-center bg-purple-700 pt-16  '>
      <section className=' flex flex-col justify-center  '>
      <Pages
      head = 'Invest on the go'
      paragraph='Up to 35% returns'
      text='
      Invest securely and confidently on the go.
      Up to 35% returns, 6-12 month duration'
      />
      <div className=' mt-[-30px] flex gap-6 pl-9 max-w-[400px] '>
      <Button
      btnIcon={App}
      text='Get on iphone'
      bgColor='#000000'
      textColor='white'
      />
       <Button
      btnIcon='./play.png'
      text='Get on iphone'
      bgColor='#000000'
      textColor='white'
      />
      </div>
      </section>
      <section>
        <Image
        image={Phone}
        />
      </section>
    </div>
    <PagesHero 
    head='Simple investments with great returns'
    paragraph='Investments are made readily accessible to everyone'
    head1='Investments simplified'
    paragraph1='With minimum investments starting as low as N5,000, investment is no longer out of reach. Everyone is welcome.'
    image={Image18}
    />
    </div>
  )
}

export default Invest