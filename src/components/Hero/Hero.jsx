/* eslint-disable react/no-unescaped-entities */
import { useInView } from "react-intersection-observer";
import { Fade } from "react-awesome-reveal";
import TypedAnimatedComponent from '../Animation/TypedAnimation/index';
import HeroImage from './HeroImage';
import NavBar from "../Header_Footer/NavBar";
import './resumeButton.css';
const Hero = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
    });

    const scrollToContent = () => {
        document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    };

    const handleResumeClick = () => {
        window.open("https://drive.google.com/file/d/1qj4nh5oe_zNHuJW_U0rcmApXxCoZCLrM/view?usp=sharing", "_blank");
    };

    return (
        <div className="bg-[url('../public/Resources/Images/banner-bg.png')]">
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
                    <div className="w-full flex justify-center items-center md:justify-start">
                        <button
                            type="button"
                            className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-semibold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                            onClick={scrollToContent}
                        >
                            Hire Me
                        </button>
                        <button className="btn md:ml-5" type="button" onClick={handleResumeClick}>
                            <strong>Resume</strong>
                            <div id="container-stars">
                                <div id="stars"></div>
                            </div>
                            <div id="glow">
                                <div className="circle"></div>
                                <div className="circle"></div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
