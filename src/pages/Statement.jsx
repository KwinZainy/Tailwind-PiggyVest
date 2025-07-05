import React, {useState} from 'react'
import { FaChevronDown } from "react-icons/fa";
const Statement = () => {
  
  const questions = [
    {
      title: "Accountability Partner",
      answer: {
        head: "Who is an Accountability Partner?",
        desc: "An Accountability Partner is someone you trust, like a family member, friend, or financial advisor, who helps you stay committed to your financial goals."
      },
    },
       {
      title: "Next of Kin",
      answer: {
        head: "Who is a Next of Kin?",
        desc: "Your Next of Kin is the person you designated to manage your funds in the event of your passing. This could be a family member or a trusted individual."
      },
    },
    {
      title: "HouseMoney",
      answer: {
        head: "How To Create Your HouseMoney?",
        desc: "To create your House Money, log into your Piggyvest account, click on Savings, and select House Money. Click on 'What is your rent', input your preferred amount, and the rent due date and complete the prompts to save and create your own House Money."
      },
    },
 
    {
      title: "Withdrawals",
      answer: {
        head: "How Does Piggybank Withdrawals Work?",
        desc: "You can withdraw for FREE only on set free withdrawal dates on your Piggybank wallet. You can set your own FREE withdrawal dates OR make use of the PiggyVest quarterly fixed FREE withdrawal dates. After the request has been made, funds will be sent to your bank account, Pocket account, or to your Flex Naira account instantly. However, withdrawals above 3m take 3 working hours(Mon-Fri) to be processed. "
      },
    },
    {
      title: "SafeLock",
      answer: {
        head: "What is SafeLock?",
        desc: "SafeLock is a fixed savings option that allows you to earn up to 20% per annum, usually paid upfront.Your Safelock acts as your sub-account so that you can transfer and lock funds from your Flex Naira wallet or your Debit card for at least 10 days, without access to these funds until maturity."
      },
    },
  ]



const [dropDown, setDropDown] = useState(null)
const toggleDrop = (index) => {
  setDropDown(prev => (prev === index ? null : index))
}
return (
  <div className=' py-18'>
    {questions.map((question, index) => (
      <div key={index}  className=' max-w-[1240px] mx-auto'>
        <div onClick={() => toggleDrop(index)}  className=' flex justify-between items-center border-b-1 border-gray-300 pb-3.5 pt-6 px-7'>
          <h2 className='px-6 text-4xl font-semibold max-mobile:text-2xl max-mobile:px-0'>{question.title}</h2>
          <div><FaChevronDown size={30} /></div>
        </div>
        
        {dropDown === index && (
          <div className=" flex flex-col gap-5 px-[22px] mt-3 pb-5 pt-2 text-[15px] text-gray-800 max-mobile:px-3">
            <p className=' text-2xl font-semibold'>{question.answer.head}</p>
            <p className=' w-[70%] text-xl max-mobile:w-full'>{question.answer.desc}</p>
          </div>
        )}
        </div>
      
    ))}

  </div>
)
}

export default Statement