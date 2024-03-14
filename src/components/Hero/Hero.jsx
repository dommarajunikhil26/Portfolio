/* eslint-disable react/no-unescaped-entities */
import { useInView } from "react-intersection-observer";
import { Fade } from "react-awesome-reveal";
import TypedAnimatedComponent from '../Animation/TypedAnimation/index';
import HeroImage from './HeroImage';
import HireButton from './HireButton';

const Hero = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
    });
    return (
        <div id="hero" className="flex flex-col h-[95vh] font-poppins text-white md:flex-row justify-center items-center md:space-x-8 w-full">
            <div className="flex flex-1 justify-center items-center mb-0 md:mb-0">
                <HeroImage />
            </div>
            <div className="flex flex-1 justify-center items-center flex-col gap-4 text-center md:text-left">
                <div className="w-full px-4 md:px-0">
                    <div ref={ref}>
                        {inView ? (
                            <Fade delay={5} duration={1000}>
                                <h2 className="font-poppins text-2xl md:text-3xl lg:text-4xl">I am Nikhil Sai Dommaraju.</h2>
                            </Fade>
                        ) : (
                            <h2 className="font-poppins text-2xl md:text-3xl lg:text-4xl">I am Nikhil Sai Dommaraju.</h2>
                        )}
                    </div>
                    <TypedAnimatedComponent />
                </div>
                <div className="w-full flex justify-center mt-0 md:mt-0">
                    <HireButton title="Hire Me" type="button" />
                </div>
            </div>
        </div>
    );
}

export default Hero;
