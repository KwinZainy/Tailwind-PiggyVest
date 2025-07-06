import React from 'react'

const Image = ({image, className}) => {
  return (
    <div>
        <main className=' w-[700px]' >
                <img src={image} alt="" className="w-full h-auto rounded"/>
            </main>
    </div>
  )
}

export default Image