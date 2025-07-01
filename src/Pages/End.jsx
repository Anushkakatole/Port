import React from 'react'
import { FaGithub, FaLinkedin ,FaInstagram  } from 'react-icons/fa';

function End() {
  return (
    <div>
            {/* Header */}
        <div className='sm:w-full sm:h-20 sm:pt-2'>
             <hr className='sm:w-380 ml-10 mr-10 sm:h-1 h-0.5 sm:mt-2 bg-gray-500 ' />
      </div>
 
      <div className='sm:flex sm:flex-row items-center justify-center'>
        <div className='sm:w-250 sm:h-50  justify-center items-center flex '>
            <h1 className='text-white sm:text-8xl text-4xl mt-10 font-bold p-5'>Anushka<span className='text-purple-600'>Katole </span></h1>
        </div>

        <div className='sm:w-140 sm:h-50 sm:flex sm:flex-col '> 
            <div className='sm:w-140 sm:h-35 '>
            <div className="flex gap-4 text-2xl text-white justify-end sm:mt-27 sm:mr-22 mr-30 ">
               <a href="https://github.com/Anushkakatole" target="_blank" rel="noopener noreferrer">
                 <FaGithub className="hover:text-gray-400" /> </a>
               <a href="https://www.linkedin.com/in/anushka-katole-79b380331/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="hover:text-blue-400" /> </a>
               <a href="https://www.instagram.com/__anushka.10__/?hl=en" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="hover:text-pink-400" /></a>
           </div>
            </div>
            <div className='sm:h-15  sm:w-140 '>
                <p className='text-xs mt-5 mb-10 mr-12 text-white sm:mr-15 flex  justify-end'>© 2025 PiyushKatole All Rights Reserved.</p>
            </div>
        </div>

      </div>
    </div>
  )
}

export default End
