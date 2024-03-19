/* eslint-disable react/no-unescaped-entities */
import { useInView } from "react-intersection-observer";
import { Fade } from "react-awesome-reveal";
import TypedAnimatedComponent from '../Animation/TypedAnimation/index';
import HeroImage from './HeroImage';
import NavBar from "../Header_Footer/NavBar";
const Hero = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
    });

    const scrollToContent = () => {
        document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    }
    return (
        <div className="bg-[url('/src/Resources/Images/banner-bg.png')]">
            <NavBar />
            <div id="hero" className=" flex flex-col h-[95vh] font-poppins text-white md:flex-row justify-center items-center md:space-x-8 w-full">
                <div className="flex flex-1 justify-center items-center mb-0 md:mb-0">
                    <HeroImage />
                </div>
                <div className="flex flex-1 justify-center items-center flex-col gap-4 text-center md:text-left">
                    <div className="w-full px-4 md:px-0">
                        <div ref={ref}>
                            {inView ? (
                                <Fade delay={5} duration={1000}>
                                    <h2 className="font-poppins font-bold text-2xl md:text-3xl lg:text-4xl">I am Nikhil Sai Dommaraju.</h2>
                                </Fade>
                            ) : (
                                <h2 className="font-poppins text-2xl md:text-3xl lg:text-4xl">I am Nikhil Sai Dommaraju.</h2>
                            )}
                        </div>
                        <TypedAnimatedComponent />
                    </div>
                    <div className="w-full flex justify-center md:justify-start md:w-1/2 mt-0 md:mt-0">
                        <button
                            type="button"
                            className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                            onClick={scrollToContent}
                        >
                            Hire Me
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
