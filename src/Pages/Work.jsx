import React from 'react'
import Goal from './Goal'
import { Link } from 'react-router-dom';


function Work() {
  return (
    <div className='sm:h-screen  bg-black'>
      {/* Header */}
      <div className='sm:w-full sm:h-30 sm:pt-10'>
        <hr className='sm:w-380 sm:h-1 h-0.5 ml-10 mr-10 mt-10 bg-gray-500 ' />
        <h1 className='sm:text-6xl text-3xl text-white sm:pt-10 sm:pl-60 ml-15 mt-10 sm:mb-10 flex gap-4 font-bold'>
          My <span className='text-purple-600'>Work</span> 
        </h1>
      </div>

      <div className='text-white  sm:mt-35 sm:ml-50 sm:mr-50 sm:w-300 sm:h-150 h-80 mt-3 ml-10 mr-10 relative overflow-hidden rounded-xl'>
        <img src="back.jpg" alt="" className='sm:w-full sm:h-full object-coverr' />
          {/* Text Overlay */}
            <div className="absolute   bg-black/50 flex flex-col justify-end p-6 text-white">
                <h2 className="text-3xl font-bold">All Projects</h2>
                <p className="text-sm mt-1">A showcase of my work — blending creativity, code, and real-world solutions across web development, AI, and design.
               </p>
                <button className="mt-4 bg-white text-black px-4 py-2 rounded-full w-fit text-sm">      <Link to="/projects">View Projects</Link>    </button>
      </div>
   
    </div>
    <Goal />


    </div>
  )
}

export default Work
