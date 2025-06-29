import React from 'react'
import { ArrowRight } from 'lucide-react';
import Educationtable from './Educationtable';
import { Link } from 'react-router-dom';






function FrontPage() {

  return (
    <div className='h-screen w-screen bg-black'>
         <Link to="/FrontPage"></Link>
        {/* Navbar */}
        <div className='h-25 w-full  flex items-center border-b-1 border-white/25 position: fixed'>
            <div className='w-200 h-full  flex flex-col items-center ml-5 pt-5'> 
                <h1 className='text-2xl text-white mt-2'>Anushka </h1>
                <h1 className='text-2xl text-purple-600 ' >Katole</h1>
            </div>
            <div className='w-290 h-full  flex items-center justify-center gap-4 pt-5'> 
                <h3 className='border-2 rounded-full text-white border-amber-50 p-2 hover:bg-purple-500'><Link to="/Projects" className=''>Work</Link></h3>
                <h3 className='border-2 rounded-full border-amber-50 p-2 bg-white text-black hover:bg-purple-500'><Link to="/FrontPage">Background</Link></h3>
                <h3 className='border-2 rounded-full text-white border-amber-50 p-2 hover:bg-purple-500'><Link to="/out">Reach Out</Link></h3>

            </div>
        </div>

        <div className="bg-[url('/l1.jpg')] bg-cover  bg-center h-screen w-full flex flex-col items-center">
             <h1 className="text-white text-3xl text-center pt-42 font-bold">Get to know me</h1>
             <h4 className='text-xs text-white mt-5 '>Resumé & biography</h4>
             <p className='text-white text-5xl mt-20 ml-50 mr-40'>Crafting <span className='text-purple-700'> seamless </span> digital experiences <br /> with precision, passion, and purpose. <br /> From bold interfaces to fluid <span className='text-purple-700'>  interactions — </span><br />every project here speaks for itself.</p>
             <h2 className='text-black bg-white p-5 flex flex-row gap-2  text-xl rounded-full mt-20'>             <Link to="/projects" className=" ">View My Work</Link> <ArrowRight className="h-6 w-6 mt-1 text-purple-500" />
             </h2>
        </div>

        {/* second page */}
        <div className=' h-150 w-100vh bg-black flex '>
            <div className='w-150 h-150  flex flex-col items-center justify-center '>
                <div className='w-80 ml-70 h-70 border-r-2 border-white/25'>
                   <h1 className='text-6xl text-white '>Every.</h1>
                   <h1 className='text-6xl text-white'>Pixel.</h1>
                   <h1 className='text-6xl text-white'>Matters.</h1>
                   <p className='mt-5 text-purple-700'> Connect on Linkdin</p>
                </div>

            </div>

            <div className='w-250 h-150  flex items-center justify-center flex-col p-7 text-2xl'>
                <p className='text-gray-500'>Design isn’t just about how things look — it’s about how they work. I craft seamless, user- <br />focused experiences backed by insight, intention, and clean, scalable code. Every pixel I <br /> place and every line I write serves a purpose: to solve real-world problems and create <br /> meaningful digital interactions. <br /> <br />From wireframes to deployed web apps, I approach every project with a detail-obsessed <br />mindset and a drive to build interfaces that not only look stunning but perform flawlessly. <br /> Design is the bridge between culture and technology, and code is the vehicle that brings it <br /> to life. <br /> <br /> Whether I’m sketching user journeys, coding dynamic UIs, or optimizing backend <br /> architecture, I thrive on turning complexity into clarity — and ideas into products that <br /> connect. </p>

            </div>

        </div>


        {/* education */}
        <div className='w-20% h-1030 bg-black'>
            <hr  className='w-400 ml-15 mr-15 h-1 bg-gray-500 '/>

            <div className=' h-500 w-100vh bg-black '>
                <div className='w-200 ml-70 h-60 '>
                   <h1 className='text-5xl text-white pt-25'>My <span className='text-purple-700'>Education </span></h1>
                   <p className='text-white text-3xl mt-8'>Graduation - Btech (Artificial Intelligence & Data Science)</p>
                </div>
                <Educationtable/>
            </div>         
        </div>

    </div>
  )
}

export default FrontPage
