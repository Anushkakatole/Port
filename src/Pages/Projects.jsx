import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import End from './End';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { TfiAlignJustify } from "react-icons/tfi";

function Projects() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white p-10'>
      {/* Navbar */}
      <div className='sm:h-25 sm:w-full w-80 flex items-center border-b-1 border-white/25 position: fixed'>
        <div className='sm:w-200 sm:h-full flex flex-col items-center sm:ml-5 sm:pt-5'>
          <h1 className='text-2xl text-white sm:mt-2'>Anushka </h1>
          <h1 className='text-2xl text-purple-600'>Katole</h1>
        </div>
        <div className='sm:w-290 sm:h-full flex items-center justify-center gap-4 pt-5'>
          <h3 className='border-2 sm:block hidden rounded-full text-white border-amber-50 p-2 hover:bg-purple-500'><Link to="/Projects">Work</Link></h3>
          <h3 className='border-2 sm:block hidden rounded-full border-amber-50 p-2 bg-white text-black hover:bg-purple-500'><Link to="/FrontPage">Background</Link></h3>
          <h3 className='border-2 sm:block hidden rounded-full text-white border-amber-50 p-2 hover:bg-purple-500'><Link to="/out">Reach Out</Link></h3>

          {/* Mobile Menu Icon */}
          <TfiAlignJustify
            className='sm:hidden text-white ml-50 w-6 h-6 cursor-pointer'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>

        {/* Mobile Menu (Dropdown) */}
        {isMenuOpen && (
          <div className='absolute z-50 top-20 left-0 sm:hidden bg-transparent px-4 pl-45 pt-5 flex flex-col gap-3'>
            <Link to="/Projects" onClick={() => setIsMenuOpen(false)} className='border-2 rounded-full text-white border-amber-50 px-3 py-1 hover:bg-purple-500'>Work</Link>
            <Link to="/FrontPage" onClick={() => setIsMenuOpen(false)} className='border-2 rounded-full border-amber-50 px-3 py-1 bg-white text-black hover:bg-purple-500'>Background</Link>
            <Link to="/out" onClick={() => setIsMenuOpen(false)} className='border-2 rounded-full text-white border-amber-50 px-3 py-1 hover:bg-purple-500'>Reach Out</Link>
          </div>
        )}
      </div>

      <br /><br />

      {/* Hero Section */}
      <div className='sm:w-390 sm:m-20 mt-10 h-40 sm:h-140'>
        <img src="work1.jpeg" alt="" className='w-full rounded-xl h-full object-cover pointer-events-none' />

        {/* Desktop Text Overlay */}
        <div className="hidden sm:block absolute inset-0 bg-black/20 flex flex-col items-center justify-center sm:m-60 text-white pointer-events-none">
          <p className="sm:text-7xl text-3xl pl-10 font-bold mt-5">
            A curated showcase of <br /> my latest <span className='text-purple-600'>projects</span><br /> and <span className='text-purple-600'>collaborations</span>
          </p>
          <button className="mt-15 bg-white text-black px-4 py-2 rounded-full w-fit text-sm">Web Development</button>
        </div>

        {/* Mobile Text Overlay */}
        <div className="sm:hidden absolute top-40 bg-black/20 flex flex-col items-center justify-center sm:m-60 text-white pointer-events-none">
          <p className="sm:text-7xl text-3xl pl-10 font-bold sm:mt-5 pb-60 mr-8 ml-5">
            A curated showcase of my latest <br />
            <span className='text-purple-600'>projects</span> and <span className='text-purple-600'>collaborations</span>
          </p>
        </div>
      </div>

      {/* Project Cards */}
      <div className='flex flex-row flex-wrap items-center justify-center gap-15 mt-30'>
        {/* Project 1 */}
        <div className='sm:w-150 sm:h-100 bg-gradient-to-r rounded-xl from-black-500 to--500 p-5 hover:from-purple-500 to-black-500 transition duration-300 ease-in-out'>
          <img src="design.jpeg" alt="" className='w-cover h-80 rounded-xl border w-full' />
          <div className="flex items-center sm:pt-6 gap-2">
            <h1 className="text-2xl">
              <Link to="/rush" className="underline ml-5">DesignRush</Link>
            </h1>
            <ArrowRightIcon className="h-6 w-6 text-purple-600" />
          </div>
        </div>

        {/* Project 2 */}
        <div className='w-150 h-100 bg-gradient-to-r from-black-500 rounded-xl to--500 p-5 hover:from-purple-500 to-black-500 transition duration-300 ease-in-out'>
          <img src="premier.jpg" alt="" className='w-cover h-80 rounded-xl border w-full' />
          <div className="flex items-center pt-6 gap-2">
            <h1 className="text-2xl">
              <Link to="/premier" className="underline ml-5">Premier</Link>
            </h1>
            <ArrowRightIcon className="h-6 w-6 text-purple-600" />
          </div>
        </div>

        {/* Project 3 */}
        <div className='w-150 h-100 bg-gradient-to-r rounded-xl from-black-500 to--500 p-5 hover:from-purple-500 to-black-500 transition duration-300 ease-in-out'>
          <img src="obys.jpg" alt="" className='w-cover rounded-xl h-80 border w-full' />
          <div className="flex items-center pt-6 gap-2">
            <h1 className="text-2xl">
              <Link to="/agency" className="underline ml-5">Obys Agency</Link>
            </h1>
            <ArrowRightIcon className="h-6 w-6 text-purple-600" />
          </div>
        </div>

        {/* Project 4 */}
        <div className='w-150 h-100 bg-gradient-to-r from-black-500 to--500 rounded-xl p-5 hover:from-purple-500 to-black-500 transition duration-300 ease-in-out'>
          <img src="./weave.jpeg" alt="cotten weave" className='w-cover rounded-xl h-80 border w-full' />
          <div className="flex items-center pt-6 gap-2">
            <h1 className="text-2xl">
              <Link to="/weave" className="underline ml-5">Cotten Weave</Link>
            </h1>
            <ArrowRightIcon className="h-6 w-6 text-purple-600" />
          </div>
        </div>

        {/* Project 5 */}
        <div className='w-150 h-100 bg-gradient-to-r from-black-500 to--500 rounded-xl p-5 hover:from-purple-500 to-black-500 transition duration-300 ease-in-out'>
          <img src="optitrend.jpg" alt="" className='w-cover h-80 rounded-xl border w-full' />
          <div className="flex items-center pt-6 gap-2">
            <h1 className="text-2xl">
              <Link to="/trend" className="underline ml-5">OptiTrend</Link>
            </h1>
            <ArrowRightIcon className="h-6 w-6 text-purple-600" />
          </div>
        </div>

        <End />
      </div>
    </div>
  );
}

export default Projects;
