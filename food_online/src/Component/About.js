import React from 'react'

function About() {
  return (
    <div>
        <h1><div className=''>
          <img className='h-30' src='/img/PEPRONI.png' alt='foods' />
          <div className='flex flex-col items-center'>
            <h4 className='text-lg font-bold ' >products</h4>
            <span  >small</span>
          </div>
          <div className='flex justify-between items-center '>
            <span className='text-black-700 font-bold'>$6.99</span>
            <button className='bg-yellow-500 py-1 px-4 rounded-full font-bold'>add</button>
          </div>
        </div></h1>
      
    </div>
  )
}

export default About
