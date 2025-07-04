import React from 'react'
import { ArrowRight } from 'lucide-react';
import Educationtable from './Educationtable';
import { Link } from 'react-router-dom';
import { TfiAlignJustify } from "react-icons/tfi";
import  { useState } from 'react';





function FrontPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // <-- New state

  return (
    <div className='min-h-screen min-w-screen bg-black overflow-x-hidden'>
         <Link to="/FrontPage"></Link>
        {/* Navbar */}
        <div className="navbar z-50 fixed top-0 left-0 right-0 h-20 w-full flex items-center justify-between border-b border-white/25 bg-black">
              <div className="ml-5 pt-5 flex flex-col items-center sm:ml-40 sm:mb-5">
                   <h1 className="text-xl text-white">Anushka</h1>
                   <h1 className="text-xl text-purple-600">Katole</h1>
             </div>
            <div className="flex items-center justify-center gap-4 pt-5 mr-5 sm:mr-45 sm:mb-5">
                   <h3 className="hidden sm:flex rounded-full text-white border-2 border-amber-50 p-2 hover:bg-purple-500">
                   <Link to="/Projects">Work</Link>
                   </h3>
                   <h3 className="hidden sm:flex rounded-full bg-white text-black border-2 border-amber-50 p-2 hover:bg-purple-500">
                    <Link to="/FrontPage">Background</Link>
                   </h3>
                   <h3 className="hidden sm:flex rounded-full text-white border-2 border-amber-50 p-2 hover:bg-purple-500">
                    Reach out
                     </h3>
        {/* Mobile Menu Icon */}
             <TfiAlignJustify
               className='sm:hidden  z-0 text-white w-6 h-6 cursor-pointer '
               onClick={() => setIsMenuOpen(!isMenuOpen)} />
            </div>
      {/* Mobile Menu (Dropdown) */}
      {isMenuOpen && (
        <div className=' absolute  z-10  top-20 left-0 sm:hidden bg-transparent  px-4 pl-45 pt-5 flex flex-col gap-3 '>
          <Link to="/Projects" onClick={() => setIsMenuOpen(false)} className='border-2 rounded-full text-white border-amber-50 px-3 py-1 hover:bg-purple-500'>Work</Link>
          <Link to="/FrontPage" onClick={() => setIsMenuOpen(false)} className='border-2 rounded-full border-amber-50 px-3 py-1 bg-white text-black hover:bg-purple-500'>Background</Link>
          <Link to="/out" onClick={() => setIsMenuOpen(false)} className='border-2 rounded-full text-white border-amber-50 px-3 py-1 hover:bg-purple-500'>Reach Out</Link>
        </div>)}
    </div>

        <div className="hidden sm:block bg-[url('/l1.jpg')] bg-cover bg-center h-screen w-full flex flex-col items-center">
            <div className='flex flex-col items-center'>
             <h1 className="text-white text-3xl text-center pt-42 font-bold">Get to know me</h1>
             <h4 className='text-xs text-white mt-5 '>Resumé & biography</h4>
             <p className='text-white text-5xl mt-20 ml-50 mr-40'>Crafting <span className='text-purple-700'> seamless </span> digital experiences <br /> with precision, passion, and purpose. <br /> From bold interfaces to fluid <span className='text-purple-700'>  interactions — </span><br />every project here speaks for itself.</p>
             <h2 className='text-black bg-white p-5 flex flex-row gap-2  text-xl rounded-full mt-20'>             <Link to="/projects" className=" ">View My Work</Link> <ArrowRight className="h-6 w-6 mt-1 text-purple-500" />
             </h2>
            </div>
        </div>
        {/** back image  */}
        <div className="sm:hidden relative h-[300px] mt-20">
          {/* Background image that doesn't block interaction */}
            <img
             src="bright.jpg"
             alt=""
               className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"/>

  {/* Text and button over image */}
  <div className="absolute top-30 left-5 right-5 z-10 flex flex-col items-start justify-center text-white bg-black/60 p-4 rounded-lg">
    <h3 className="text-xl font-bold">Get to know me</h3>
    <p className="text-xs text-gray-300">Resume & biography</p>
    <p className="mt-4 text-sm font-light">
      Crafting <span className="text-purple-500">seamless</span> digital
      experiences with precision, passion, and purpose. From bold interfaces to
      fluid <span className="text-purple-500">interactions —</span> every
      project here speaks for itself.
    </p>
    <Link
      to="/projects"
      className="mt-4 bg-white text-black px-4 py-2 rounded-full flex items-center gap-2"
    >
      View My Work <ArrowRight className="h-4 w-4 text-purple-500" />
    </Link>
  </div>
</div>



        {/* second page */}
        <div className=' h-150 w-100vh bg-black flex  '>
            <div className='w-150 h-150  flex sm:flex-col   items-center justify-center '>
                <div className='w-80 sm:ml-70 ml-5 sm:h-70 mb-50 sm:border-r-2 border-white/25'>
                   <h1 className='text-6xl text-white '>Every.</h1>
                   <h1 className='text-6xl text-white'>Pixel.</h1>
                   <h1 className='text-6xl text-white'>Matters.</h1>
                   <p className='sm:mt-5 mt-10 text-purple-700'> Connect on Linkdin</p>
                   <div className='sm:hidden text-white '>
                       <p className='pt-25 text-gray-500'>Design isn’t just about how things <br /> look — it’s about how they work. I <br /> craft seamless, user- focused experiences <br /> backed by insight, intention, and  <br />clean, scalable code. Every pixel I <br /> place and every line I write serves a <br /> purpose: to solve real-world problems and <br /> create meaningful digital interactions. <br /> <br />From wireframes to deployed web apps, I <br /> approach every project with a detail- <br />obsessed mindset and a drive to build <br /> interfaces that not only look stunning but <br /> perform flawlessly.  Design is the bridge <br /> between culture and technology, and code <br /> is the vehicle that brings it to life. <br /> <br /> Whether I’m sketching user journeys,<br /> coding dynamic UIs, or optimizing backend <br /> architecture, I thrive on turning complexity <br /> into clarity — and ideas into products that <br /> connect. </p>
                   </div>

                </div>

            </div>

            <div className='w-250 h-150  flex hidden sm:block items-center justify-center flex-col p-7 text-2xl'>
                <p className='text-gray-500 '>Design isn’t just about how things look — it’s about how they work. I craft seamless, user- <br />focused experiences backed by insight, intention, and clean, scalable code. Every pixel I <br /> place and every line I write serves a purpose: to solve real-world problems and create <br /> meaningful digital interactions. <br /> <br />From wireframes to deployed web apps, I approach every project with a detail-obsessed <br />mindset and a drive to build interfaces that not only look stunning but perform flawlessly. <br /> Design is the bridge between culture and technology, and code is the vehicle that brings it <br /> to life. <br /> <br /> Whether I’m sketching user journeys, coding dynamic UIs, or optimizing backend <br /> architecture, I thrive on turning complexity into clarity — and ideas into products that <br /> connect. </p>

            </div>

        </div>


        {/* education */}
        <div className='sm:w-20% sm:h-1030 '>
            <hr  className='sm:w-400 w-85 sm:ml-15 ml-10 mt-20 sm:mr-15 h-0.5 bg-gray-500 '/>

            <div className=' h-500  w-100vh bg-black '>
                <div className='w-200 sm:ml-70 ml-15 sm:h-60 '>
                   <h1 className='sm:text-5xl text-3xl text-white sm:pt-25 pt-10'>My <span className='text-purple-700'>Education </span></h1>
                   <p className='text-white sm:text-3xl sm:mt-8 mt-5'>Graduation - Btech (Artificial Intelligence <br  className='sm:hidden'/>& Data Science)</p>
                </div>
                <Educationtable/>
            </div>         
        </div>

    </div>
  )
}

export default FrontPage
