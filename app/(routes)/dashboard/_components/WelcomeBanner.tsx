import React from 'react'
import {Button} from "@/components/ui/button"
function WelcomeBanner() {
  return (
    <div className='p-5 bg-gradient-to-tr from-[#8A2387] via-[#E94057] to-[#F27121] rounded-lg'>
        <h2 className='font-bold text-2xl text-white'>
            AI Career Coach Agent
        </h2>
        <p className='text-white'>
            Smarter career decisions start here -- get tailored advice, real-time market insights, and a roadmap built just for you with the power of AI.
        </p>
        <Button variant={'outline'} className='mt-3'>
            Let's get Started
        </Button>
    </div>
  )
}

export default WelcomeBanner
