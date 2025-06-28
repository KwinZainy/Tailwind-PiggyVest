import React from 'react'

const Button = ({text, bgColor, textColor, btnBorder, btnIcon, className}) => {
  return (
    <button 
    class={className}
    style={{
        backgroundColor: `${bgColor}`,
        color: `${textColor}`,
        border: `1px solid ${btnBorder}`,
        
    }}
    
    className='py-4 px-3 rounded-xl flex items-center w-max'
    >
        <span className='mr-3'>{btnIcon}</span>
      <span className='font-medium'>{text}</span>  
    </button>
  )
}

export default Button