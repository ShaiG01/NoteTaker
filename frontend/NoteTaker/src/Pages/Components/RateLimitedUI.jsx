import React from 'react'
import { Zap } from 'lucide-react'

const RateLimitedUI = () => {
  return (
    <div className='w-full h-full text-white flex items-center justify-center bg-green-800/20 border border-green-500/50 rounded-lg text-center p-4 gap-[3vw]'>
      <Zap className='lg:w-1/8 w-1/2 lg:h-[10vw] md:w-1/8 h-3/4 rounded-full bg-green-500/20 text-green-200'></Zap>
      <div className='flex flex-col justify-center items-center lg:gap-[1vw] md:gap-[0.5vw] gap-[1vh]'>
        <p className=' text-[ 2.5vh] lg:text-[2.5vw] md:text-[2vw] font-bold'>Rate Limit Reached</p>
        <p className='text-[1.5vh] lg:text-[1.5vw] md:text-[1.2vw]'>You've made too many requests in a short period. Please wait...</p>
        <p className='text-[1vh] text-gray-500/50 lg:text-[1vw] md:text-[0.8vw]'>Try again in a few seconds for the best experience.</p>
      </div>
    </div>
  )
}

export default RateLimitedUI