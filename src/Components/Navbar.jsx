import Headshot from '../assets/Headshot.jpg'

const menu = document.getElementById('menu');
        function toggleMenu() {
            menu.classList.toggle('hidden');
            menu.classList.toggle('w-full');
            menu.classList.toggle('h-screen');
        }

export default function Navbar() {
    return (
        

        <nav className='sticky top-0 z-50'>
            <a className="" href="#page-top">
                    <span className="hidden lg:inline"><img className="border-solid border-8 border-blue-100 rounded-full mx-auto mb-2" src={Headshot}  alt="..." /></span>
            </a>
            <nav className='flex items-center justify-between flex-wrap bg-primary p-3 lg:overflow-y-auto lg:py-4 lg:bg-blue-100'>
                <div class="flex items-center flex-shrink-0 text-white mr-6">
                    <span class=" text-xl font-primary-text font-medium leading-tight">Toney Tate</span>
                </div>
                <div class="block lg:hidden">
                    <button className="flex items-center text-l px-3 py-2 border rounded text-slate-300 border-slate-300 hover:text-white hover:border-white">
                        <svg className="fill-current h-4 w-4 text-xl" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>
            </nav>
        </nav>
    )
}