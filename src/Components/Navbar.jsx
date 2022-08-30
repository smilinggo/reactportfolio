import Headshot from '../assets/Headshot.jpg'

export default function Navbar() {
    return (
        <nav>
            <a className="" href="#page-top">
                    <span className="hidden lg:inline"><img className="border-solid border-8 border-blue-100 rounded-full mx-auto mb-2" src={Headshot}  alt="..." /></span>
            </a>
            <nav className='flex items-center justify-between flex-wrap bg-red-500 p-6 lg:overflow-y-auto lg:py-4 lg:bg-blue-100'>
                <div class="flex items-center flex-shrink-0 text-white mr-6">
                    <span class="font-semibold text-xl tracking-tight">Toney Tate</span>
                </div>
                <div class="block lg:hidden">
                    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>
            
            </nav>
        </nav>
    )
}