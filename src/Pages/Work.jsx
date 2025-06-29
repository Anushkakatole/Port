import React from 'react'
import Goal from './Goal'
import { Link } from 'react-router-dom';


function Work() {
  return (
    <div className='h-screen  bg-black'>
      {/* Header */}
      <div className='w-full h-30 pt-10'>
        <hr className='w-full h-1 mt-10 bg-gray-500 ' />
        <h1 className='text-6xl text-white pt-10 pl-60 mb-10 flex gap-4 font-bold'>
          My <span className='text-purple-600'>Work</span>
        </h1>
      </div>

      <div className='text-white bg-amber-400 mt-35 ml-50 mr-50 w-300 h-150 relative overflow-hidden rounded-xl'>
        <img src="back.jpg" alt="" className='w-full h-full object-coverr' />
          {/* Text Overlay */}
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6 text-white">
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
