import React from 'react';
import { Link } from 'react-router-dom';
import End from './End'
import { ArrowRightIcon } from '@heroicons/react/24/solid';


function Projects() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white p-10 '>
        {/* Navbar */}
        <div className='h-25 w-full  flex  items-center border-b-1 border-white/25 position: fixed'>
            <div className='w-200 h-full  flex flex-col items-center ml-5 pt-5'> 
                <h1 className='text-2xl text-white mt-2'>Anushka </h1>
                <h1 className='text-2xl text-purple-600 ' >Katole</h1>
            </div>
            <div className='w-290 h-full  flex items-center justify-center gap-4 pt-5'> 
                <h3 className='border-2 rounded-full text-white border-amber-50 p-2 hover:bg-purple-500'><Link to="/Projects">Work</Link></h3>
                <h3 className='border-2 rounded-full border-amber-50 p-2 bg-white text-black hover:bg-purple-500'> <Link to="/FrontPage">Background</Link></h3>
                <h3 className='border-2 rounded-full text-white border-amber-50 p-2 hover:bg-purple-500'><Link to="/out">Reach Out</Link></h3>
            </div>
        </div>
        <br />
        <br />
{/*description */}
        <div className='w-390 m-20 h-140 '>
           <img src="work1.jpeg" alt="" className='w-full rounded-xl h-full object-coverr' />
    {/* Text Overlay */}
            <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center m-60  text-white">
                           <p className="text-7xl pl-10 font-bold mt-5">A curated showcase of my latest <br /> <span className='text-purple-600'>projects</span> and <span className='text-purple-600'>collaborations</span>
                          </p>
                           <button className="mt-15  bg-white text-black px-4 py-2 rounded-full w-fit text-sm">     Web Development  </button>
             </div>


        </div>

      <div className='flex flex-row flex-wrap items-center justify-center  gap-15 mt-30'>
      {/* card    */}
      {/* 1 st project   */}
      <div className='w-150 h-100 bg-gradient-to-r rounded-xl from-black-500 to--500 p-5 hover:from-purple-500 to-black-500 transition duration-300 ease-in-out'>
      <img src="design.jpeg" alt="" className='w-cover h-80 rounded-xl border w-full'/>
          <div className="flex items-center  pt-6 gap-2">
             <h1 className="text-2xl">
             <Link to="/projects" className=" underline ml-5">             <Link to="/rush" className=" underline">DesignRush</Link></Link>

             </h1>
            <ArrowRightIcon className="h-6 w-6 text-purple-600" />
          </div>
      </div>


      {/* 2 nd project    */}
      <div className='w-150 h-100 bg-gradient-to-r from-black-500 rounded-xl to--500 p-5 hover:from-purple-500 to-black-500 transition duration-300 ease-in-out'>
      <img src="premier.jpg" alt="" className='w-cover h-80 rounded-xl border w-full'/>
          <div className="flex items-center  pt-6 gap-2">
             <h1 className="text-2xl">
             <Link to="/projects" className=" underline ml-5">             <Link to="/premier" className=" underline">Premier</Link></Link>

             </h1>
            <ArrowRightIcon className="h-6 w-6 text-purple-600" />
          </div>

      </div>

      {/* 3rd project    */}
      <div className='w-150 h-100 bg-gradient-to-r rounded-xl from-black-500 to--500 p-5 hover:from-purple-500 to-black-500 transition duration-300 ease-in-out'>
      <img src="obys.jpg" alt="" className='w-cover rounded-xl h-80 border w-full'/>
          <div className="flex items-center  pt-6 gap-2">
             <h1 className="text-2xl">
             <Link to="/projects" className=" underline ml-5">             <Link to="/agency" className=" underline">Obys Agency</Link></Link>

             </h1>
            <ArrowRightIcon className="h-6 w-6 text-purple-600" />
          </div>

      </div>

      {/* 4 th project bg-gradient-to-b from-black via-gray-900 to-black text-white p-10 */}
      <div className='w-150 h-100 bg-gradient-to-r from-black-500 to--500 rounded-xl p-5 hover:from-purple-500 to-black-500 transition duration-300 ease-in-out'>
      <img src="./weave.jpeg" alt="cotten weave" className='w-cover rounded-xl h-80 border w-full'/>
          <div className="flex items-center  pt-6 gap-2">
             <h1 className="text-2xl">
             <Link to="/projects" className=" underline ml-5">             <Link to="/weave" className=" underline">Cotten Weave</Link></Link>

             </h1>
            <ArrowRightIcon className="h-6 w-6 text-purple-600" />
          </div>

      </div>

      {/* 5 th project    */}
      <div className='w-150 h-100 bg-gradient-to-r from-black-500 to--500 rounded-xl p-5 hover:from-purple-500 to-black-500 transition duration-300 ease-in-out'>
      <img src="optitrend.jpg" alt="" className='w-cover h-80 rounded-xl border w-full'/>
          <div className="flex items-center  pt-6 gap-2">
             <h1 className="text-2xl">
             <Link to="/projects" className=" underline ml-5">             <Link to="/trend" className=" underline">OptiTrend</Link></Link>

             </h1>
            <ArrowRightIcon className="h-6 w-6 text-purple-600" />
          </div>

      </div>
     <End/>
      </div>

    </div>
  );
}

export default Projects;
