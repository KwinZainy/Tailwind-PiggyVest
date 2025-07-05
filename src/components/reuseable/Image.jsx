import React from 'react'

const Image = ({image, className}) => {
  return (
    <div>
        <main className=' w-[700px] bg-amber-950 h-dvh' >
                <img src={image} alt="" className=' bg- h-auto w-full'/>
            </main>
    </div>
  )
}

export default Image