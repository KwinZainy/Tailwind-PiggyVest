import React from 'react'

const Image = ({image, className}) => {
  return (
    <div>
        <main className='  h-72 text-center bg-pink-100' >
                <img src={image} className='w'/>
            </main>
    </div>
  )
}

export default Image