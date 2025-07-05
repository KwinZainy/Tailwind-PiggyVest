import React from 'react'

const Pages = ({head,paragraph,image ,icon, text}) => {
  return (
    <div>
        <section className=' w- '>
            <main>
                <h1 className=' font-bold text-[47px] text-[#EFF5FC]'>{head}</h1>
                <div className=' max-w-[50%] flex justify-center items-center px-3 gap-2 bg-[#EFF5FC] rounded-[20px] py-1.5 my-3'>
                 <span className=' mr-3'>{icon}</span>   
                <p className=' text-[18px] text-center'>{paragraph}</p>
                </div>
                <p className=' text-[19px] text-[#EFF5FC]'>{text}</p>
            </main>
            <main>
                <img src={image} alt="" />
            </main>
        </section>
        
      
        
    </div>
  )
}

export default Pages