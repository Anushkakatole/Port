import React from 'react';
import Work from './Work'

function Expertise() {
  return (
    <div className='p-10'>

      {/* Header */}
      <div className='sm:w-full sm:h-30'>
        <hr className='sm:w-380 sm:h-1 h-0.5 mt-10 sm:mr-60 ml-10 mr-10 sm:mt-10 bg-gray-500' />
        <h1 className='sm:text-6xl text-3xl text-white sm:pt-10 sm:pl-60 sm:mb-10 ml-15 mt-10 flex gap-4 font-bold'>
          My<span className='text-purple-600'>Expertise</span>
        </h1>
      </div>

      {/* Cards Row */}
      <div className='flex flex-wrap justify-center gap-10  pt-10'>

        {/* Card 1 - Frontend */}
        <div className='w-72 sm:h-85 h-80 flex flex-col items-center rounded-xl bg-gray-900 border border-gray-500'>
          <div className='w-full h-20 flex'>
            <div className='w-20 h-full'>
              <img src="frontend.png" alt="Frontend" width='50' height='50' className='m-3.5' />
            </div>
            <div className='w-50 h-full'>
              <h1 className='text-white text-2xl p-6'>Frontend</h1>
            </div>
          </div>
          <div className='w-full'>
            <p className='text-gray-500 m-4 text-sm'>
              Modern UI frameworks and web <br /> technologies for seamless user <br /> experiences.
            </p>
          </div>
          <div className='flex flex-wrap gap-2 ml-4'>
            <Skill img="frontend.png" name="React.js" />
            <Skill img="html.png" name="HTML" />
            <Skill img="css.png" name="CSS" />
            <Skill img="javascript.png" name="JavaScript" />
            <Skill img="tailwindcss.png" name="TailwindCSS" />
            <Skill img="tailwindcss.png" name="Vercel" />
          </div>
        </div>

        {/* Card 2 - Backend */}
        <div className='w-72 h-85 flex flex-col items-center rounded-xl bg-gray-900 border border-gray-500'>
          <div className='w-full h-20 flex'>
            <div className='w-20 h-full'>
              <img src="aws.png" alt="Backend" width='50' height='50' className='m-3.5' />
            </div>
            <div className='w-50 h-full'>
              <h1 className='text-white text-2xl p-6'>Cloud & DevOps</h1>
            </div>
          </div>
          <div className='w-full'>
            <p className='text-gray-500 m-4 text-sm'>
            Deploy, scale, and secure apps <br /> with modern cloud platforms.            </p>
          </div>
          <div className='flex flex-wrap gap-2 ml-4'>
            <Skill img="azure.png" name="Node.js" />
            <Skill img="render.png" name="Express" />
          </div>
        </div>

        {/* Card 3 - Tools */}
        <div className='w-72 h-85 flex flex-col items-center rounded-xl bg-gray-900 border border-gray-500'>
          <div className='w-full h-20 flex'>
            <div className='w-20 h-full'>
              <img src="data.png" alt="Tools" width='50' height='50' className='m-3.5' />
            </div>
            <div className='w-50 h-full'>
              <h1 className='text-white text-2xl p-6'>Data & AI</h1>
            </div>
          </div>
          <div className='w-full'>
            <p className='text-gray-500 m-4 text-sm'>
            Data science, analytics, and <br /> machine learning for smart <br /> solutions.</p>
          </div>
          <div className='flex flex-wrap gap-2 ml-4'>
            <Skill img="python.png" name="TailwindCSS" />
            <Skill img="data.png" name="VS Code" />
            <Skill img="numpy.png" name="Figma" />
          </div>
        </div>

      </div>
     <Work/>
    </div>
    
  )
}

// Reusable Skill Badge component
function Skill({ img, name }) {
  return (
    <div className='border rounded-full border-gray-800 text-white pl-3 pr-3 pt-1 pb-1 flex gap-2'>
      <img src={img} width='20' height='15' alt="" />
      <h1 className='text-xs mt-1'>{name}</h1>
    </div>
  );
}

export default Expertise;

