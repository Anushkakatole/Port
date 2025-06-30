import React from 'react'
import Expertise from './Expertise'

function Experiences() {
  return (
    <div>
        <div className='sm:w-50 sm:h-40  '>
             <div className='sm:w-80 sm:h-30'>
                <hr  className='sm:w-380 sm:ml-15 ml-10 mr-10 sm:mr-15 sm:h-1 h-0.5 sm:mt-30 mt-10 bg-gray-500 '/>
                <h1 className='sm:text-6xl text-3xl mt-10 ml-15 text-white  sm:pt-20 sm:pl-70 sm:mb-10 '>Experiences</h1>
                
             </div>
        </div> 

        <div className='sm:w-427  sm:h-100 flex sm:flex-row flex-col gap-5 mr-10 ml-10 items  '>
            <div className='sm:w-65 sm:h-20 mt-5 ml-5 sm:ml-70 '>
                <button className='text-black bg-white rounded-full sm:mt-4 sm:text-xl sm:border-1 sm:p-4 p-2'>Download Resume</button>
            </div>
            <div className='sm:w-70 sm:h-50 ml-5  sm:ml-40 rounded-xl bg-gray-900 border-gray-500 border'>
              <div className='sm:w-full sm:h-40 flex'>
                <div className='w-22 h-40 '>
                  <img src="ieeepunesection_logo.jpeg" alt="" className='mt-8 rounded-xl ml-2'/>
                </div>
                <div>
                  <h1 className='text-white mt-7 ml-4'> <span className='text-'>Design Team Member </span> <br />IEEE Pune Section <br /> <span className='text-gray-500 mt-4 '>Pune, Maharashtra, India </span> </h1>
                </div>
              </div>


              <div>
                <h1 className='text-s text-purple-600 ml-5'>Jan 2025 - Present</h1>
              </div>
            </div>
            </div>

            <Expertise/>

     </div>     
     
  )
}

export default Experiences
