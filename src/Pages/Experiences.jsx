import React from 'react'
import Expertise from './Expertise'

function Experiences() {
  return (
    <div>
        <div className='w-50 h-40  '>
             <div className='w-80 h-30'>
                <hr  className='w-400 ml-15 mr-15 h-1 mt-30 bg-gray-500 '/>
                <h1 className='text-6xl text-white  pt-20 pl-70 mb-10 '>Experiences</h1>
                
             </div>
        </div> 

        <div className='w-427  h-100 flex flex-row items  '>
            <div className='w-65 h-20   ml-70 '>
                <button className='text-black bg-white rounded-full mt-4 text-xl border-1 p-4 '>Download Resume</button>
            </div>
            <div className='w-70 h-50  ml-40 rounded-xl bg-gray-900 border-gray-500 border'>
              <div className='w-full h-40 flex'>
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
