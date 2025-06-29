import React from 'react'
import { FaGithub, FaLinkedin ,FaInstagram  } from 'react-icons/fa';

function End() {
  return (
    <div>
            {/* Header */}
        <div className='w-full h-20 pt-2'>
             <hr className='w-full h-1 mt-2 bg-gray-500 ' />
      </div>

      <div className='flex items-center justify-center'>
        <div className='w-250 h-50  justify-center items-center flex'>
            <h1 className='text-white text-8xl font-bold p-5'>Anushka<span className='text-purple-600'>Katole </span></h1>
        </div>

        <div className='w-140 h-50 flex flex-col '>
            <div className='w-140 h-35 '>
            <div className="flex gap-4 text-2xl text-white justify-end mt-27 mr-22">
               <a href="https://github.com/Anushkakatole" target="_blank" rel="noopener noreferrer">
                 <FaGithub className="hover:text-gray-400" /> </a>
               <a href="https://www.linkedin.com/in/anushka-katole-79b380331/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="hover:text-blue-400" /> </a>
               <a href="https://www.instagram.com/__anushka.10__/?hl=en" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="hover:text-pink-400" /></a>
           </div>
            </div>
            <div className='h-15 w-140 '>
                <p className='text-xs text-white mr-15 flex justify-end'>© 2025 PiyushKatole All Rights Reserved.</p>
            </div>
        </div>

      </div>
    </div>
  )
}

export default End
