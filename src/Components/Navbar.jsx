import React, {useState, useEffect} from 'react'
import Headshot from '../assets/Headshot.jpg'



export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false)

    const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }
    return (
        

        <nav className='sticky top-0 z-50'>
            <a className="smooth-scroll" href="#page-top">
                    <span className="hidden lg:inline"><img className="border-solid border-8 border-blue-100 rounded-full mx-auto mb-2" src={Headshot}  alt="..." /></span>
            </a>
            <nav className='flex items-center justify-between flex-wrap bg-primary p-3 lg:overflow-y-auto lg:py-4 lg:bg-blue-100'>
                <div class="flex items-center flex-shrink-0 text-white mr-6">
                    <span class=" text-xl font-primary-text font-medium leading-tight">Toney Tate</span>
                </div>
                <div class="block lg:hidden">
                    <button onClick={toggleNav} className="flex items-center text-l px-3 py-2 border rounded text-slate-300 border-slate-300 hover:text-white hover:border-white">
                        <svg className="fill-current h-4 w-4 text-xl" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" id='menu'><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>
            </nav >
                    {(toggleMenu && (<div class='lg:hidden bg-primary  text-xl font-primary-text font-medium leading-tight' id='topmenu'>
                        <ul onClick={toggleNav} className='flex flex-col space-y-2'>
                            <a href='About' className='smooth-scroll'><li className='text-slate-100 hover:text-slate-300'>About</li></a>
                            <a href="#Experience" className='smooth-scroll'><li className='text-slate-100 hover:text-slate-300'>Experience</li></a>
                            <a href="#Education" className='smooth-scroll'><li className='text-slate-100 hover:text-slate-300'>Education</li></a>
                            <a href="#Skills" className='smooth-scroll'><li className='text-slate-100 hover:text-slate-300'>Skills</li></a>
                            <a href="#Interests" className='smooth-scroll'><li className='text-slate-100 hover:text-slate-300'>Interests</li></a>
                            <a href="#Certifications" className='smooth-scroll'><li className='text-slate-100 hover:text-slate-300'>Certifications</li></a>
                        </ul>
                    </div>))}
                    
                
            
        </nav>
    )
}