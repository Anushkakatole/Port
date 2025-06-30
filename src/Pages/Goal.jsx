import React from 'react'
import End from './End'

function goal() {
  return (
    <div>
         <div className='sm:w-full sm:h-30 sm:pt-10'>
             <hr className='sm:w-380 sm:h-1 h-0.5 ml-10 mr-10 sm:mt-10 bg-gray-500 ' />
        </div>
      <div className='text-white sm:w-360 sm:h-120 sm:m-20 sm:flex '>

        <div className='sm:w-120 ml-15  sm:h-90 mt-10 sm:mt-10  flex sm:items-center sm:justify-center  border-r-1 border-gray-600/55 '> 
            <h1 className='sm:text-7xl text-3xl'>My  Mission  & <span className='text-purple-600'> Goals </span></h1>
         </div>
        <div className='sm:w-200 sm:h-120  flex items-center justify-center'> 
            <p className='text-xl sm:pl-5 pl-10 pr-10 text-gray-500 mt-5'>I strive to craft user-first experiences <br /> that are not only fast and functional, <br /> but also  emotionally resonant. <br /> <br /> My mission is to solve real-world <br /> problems through clean, scalable, <br /> and thoughtful digital  design. I <br /> believe in the power of technology to <br /> create positive change and meaningful  connections. <br />  <br />Every project is an opportunity to <br /> blend creativity with logic, empathy <br /> with engineering,  and vision with execution. <br /> <br /></p>
        </div>

      </div>
      <End />

      </div>
  )
}

export default goal
