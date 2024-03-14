import { useInView } from "react-intersection-observer";
import { Fade, Slide } from "react-awesome-reveal";
import aboutPhoto from '../../Resources/Images/About.jpg';

const About = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
    });

    return (
        <div id="about" className="bg-gray-50 pt-5">
            <div ref={ref}>
                {inView ? (
                    <Fade delay={5} duration={1000}>
                        <h2 className="uppercase text-center font-roboto-slab text-4xl">About</h2>
                    </Fade>
                ) : (
                    <h2 className="uppercase text-center font-roboto-slab text-4xl">About</h2>
                )}
            </div>
            <div className="flex flex-col md:flex-row justify-around items-center py-5">
                <div className="mb-4 md:mb-0 md:w-1/2 lg:w-2/5 px-10">
                    <img src={aboutPhoto} alt="About Me" className="w-full h-auto rounded-md shadow-lg" />
                </div>
                <div className="w-full md:w-1/2 text-left md:text-left px-4">
                    <Slide direction="right" triggerOnce>
                        <div className="md:border-l-2 border-black px-10">
                            <p className="lg:text-xl md:text-[16px] font-poppins">
                                I'm Nikhil, a dedicated Full Stack Web Developer and a Graduate Teaching Assistant
                                at the University of Alabama in Huntsville. With a rich blend of academic rigor
                                and practical expertise, I excel in bringing cutting-edge web solutions to life.
                            </p>
                            <p className="mt-4 lg:text-xl md:text-[16px] font-poppins">
                                With over 5 years of internship experience as a Web Development and Java Intern,
                                I've honed my skills in full-stack technologies, contributing to complex projects that
                                enhance operational efficiencies and deliver compelling user experiences.
                            </p>
                            <p className="mt-4 lg:text-xl md:text-[16px] font-poppins">
                                Beyond the digital realm, I'm passionate about continuously learning new technologies,
                                and I cherish the vibrant worlds and narratives that anime offers. My free time often finds me
                                amidst nature, paddling through serene waters or trekking along scenic trails, each experience
                                enriching my creativity and drive.
                            </p>
                        </div>
                    </Slide>
                </div>
            </div>
        </div>
    );
};

export default About;
