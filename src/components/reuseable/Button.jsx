import React from 'react'

const Button = ({text, bgColor, textColor, btnBorder, btnIcon, className}) => {
  return (
    <button 
    class={className}
    style={{
        backgroundColor: `${bgColor}`,
        color: `${textColor}`,
        border: `1px solid ${btnBorder}`,
        textAlign: "center"
        
    }}
    
    className='py-3 px-3 rounded-xl flex items-center '
    >
    {btnIcon && <img src={btnIcon} alt="" className=' w-[30px] z-50' />} 
      <span className='font-medium '>{text}</span>  
    </button>
  )
}

export default Button