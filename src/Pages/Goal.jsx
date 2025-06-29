import React from 'react'
import End from './End'

function goal() {
  return (
    <div>
         <div className='w-full h-30 pt-10'>
             <hr className='w-full h-1 mt-10 bg-gray-500 ' />
        </div>
      <div className='text-white w-360 h-120 m-20 flex'>

        <div className='w-120 h-90 mt-10  flex items-center justify-center  border-r-1 border-gray-600/55 '> 
            <h1 className='text-7xl'>My <br /> Mission <br /> & <br /><span className='text-purple-600'> Goals </span></h1>
         </div>
        <div className='w-200 h-120  flex items-center justify-center'> 
            <p className='text-xl pl-5'>I strive to craft user-first experiences that are not only fast and functional, but also <br /> emotionally resonant. <br /> <br /> My mission is to solve real-world problems through clean, scalable, and thoughtful digital <br /> design. I believe in the power of technology to create positive change and meaningful <br /> connections. <br />  <br />Every project is an opportunity to blend creativity with logic, empathy with engineering, <br /> and vision with execution. <br /> <br /></p>
        </div>

      </div>
      <End />

      </div>
  )
}

export default goal
