import { useState, useEffect } from 'react'
import axios from 'axios'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import diceIcon from '../assets/images/icon-dice.svg'
import patternDesktop from '../assets/images/pattern-divider-desktop.svg'

const Main = () => {
   const [advice, setAdvice] = useState("")

   const getAdvice = async () => {
      try {
         const response = await axios.get('https://api.adviceslip.com/advice')
         const adviceData = response.data.slip
         setAdvice(adviceData)
      } catch (error) {
         console.error('Error fetching advice:', error)
      }
   }

   useEffect(() => {
      getAdvice()
   }, [])

   const handleGenerateAdvice = () => {
      getAdvice()
   }

   return (
      <main className="bg-[#323a49] rounded-xl w-[30rem] p-14 relative shadow-xl">
         <div className="flex flex-col justify-center items-center gap-5">
            <div className="uppercase tracking-widest text-xs text-[#52ffa8] font-light">Advice # {advice.id}</div>
            <div className="text-center">
               <p className="text-[28px] text-[#cee3e9]">
                  <span className="mr-0.5"><FaQuoteLeft className="w-2 inline-block" style={{ verticalAlign: 'top' }} /></span>
                  {advice.advice}
                  <span className="ml-0.5"><FaQuoteRight className="w-2 inline-block" style={{ verticalAlign: 'top' }} /></span>
               </p>
            </div>
            <div className="">
               <img src={patternDesktop} alt="patternDesktop" />
            </div>
         </div>
         <button 
            onClick={handleGenerateAdvice}
            className="cursor-pointer w-12 h-12 rounded-full bg-[#52ffa8] flex justify-center items-center absolute -bottom-5 inset-x-[13.5rem]">
            <img src={diceIcon} alt="diceIcon" />
         </button>
      </main>
   )
}

export default Main
