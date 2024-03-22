import { useState } from "react";

import logo from '../../../public/Resources/Images/logo.svg';
import { Link } from "react-scroll";


const NavBar = () => {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <header className="relative inset-x-0 top-0 z-50">
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img className="h-8 w-auto" src={logo} alt="logo" />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                        onClick={() => setNavOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    <Link to="hero" smooth={true} duration={500} className="cursor-pointer text-sm font-semibold leading-6 text-white hover:shadow-glow">Home</Link>
                    <Link to="about" smooth={true} duration={500} className="cursor-pointer text-sm font-semibold leading-6 text-white hover:shadow-glow">About</Link>
                    <Link to="skills" smooth={true} duration={500} className="cursor-pointer text-sm font-semibold leading-6 text-white hover:shadow-glow">Skills</Link>
                    <Link to="projects" smooth={true} duration={500} className="cursor-pointer text-sm font-semibold leading-6 text-white hover:shadow-glow" >Projects</Link>
                    <Link to="contact" smooth={true} duration={500} className="cursor-pointer text-sm font-semibold leading-6 text-white hover:shadow-glow">Contact</Link>
                </div>

            </nav>
            {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
            {
                navOpen && (
                    <div className="lg:hidden" role="dialog" aria-modal="true">
                        {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
                        <div className="fixed inset-0 z-50"></div>
                        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                            <div className="flex items-center justify-between">
                                <a href="#" className="-m-1.5 p-1.5">
                                    <span className="sr-only">Your Company</span>
                                    <img className="h-8 w-auto" src={logo} alt="logo" />
                                </a>
                                <button
                                    type="button"
                                    className="-m-2.5 rounded-md p-2.5 text-white"
                                    onClick={() => setNavOpen(false)}
                                >
                                    <span className="sr-only">Close menu</span>
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-gray-500/10">
                                    <div className="space-y-2 py-6">
                                        <Link to="home" smooth={true} duration={500} onClick={() => setNavOpen(false)} className="cursor-pointer -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:shadow-glow">Home</Link>
                                        <Link to="about" smooth={true} duration={500} onClick={() => setNavOpen(false)} className="cursor-pointer -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:shadow-glow">About</Link>
                                        <Link to="skills" smooth={true} duration={500} onClick={() => setNavOpen(false)} className="cursor-pointer -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:shadow-glow">Skills</Link>
                                        <Link to="projects" smooth={true} duration={500} onClick={() => { setNavOpen(false) }} className="cursor-pointer -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:shadow-glow">Projects</Link>
                                        <Link to="contact" smooth={true} duration={500} onClick={() => setNavOpen(false)} className="cursor-pointer -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:shadow-glow">Contact</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </header >
    )
}

export default NavBar;