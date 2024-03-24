/* eslint-disable react/no-unescaped-entities */
import { useInView } from "react-intersection-observer";
import { Fade } from "react-awesome-reveal";
import aboutPhoto from '../../../public/Resources/Images/About.jpg';

const About = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
    });

    return (
        <div id="about" className="bg-[#101010] pt-7 pb-10 min-h-screen text-gray-50">
            <div ref={ref}>
                {inView ? (
                    <Fade delay={5} duration={1000}>
                        <h2 className="uppercase font-bold text-center font-roboto-slab text-4xl">About</h2>
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
                    <Fade delay={500} triggerOnce>
                        <div className="md:border-l-2 border-gray-50 px-10">
                            <p className="xl:text-2xl lg:text-xl md:text-sm font-poppins">
                                Hey there! I'm Nikhil, a Graduate Teaching Assistant at UAHuntsville by day,
                                and a Full Stack Developer by night. That's right, I wear two hats - building cutting-edge technologies
                                and helping the next generation of developers get their start.
                            </p>
                            <p className="mt-4 xl:text-2xl lg:text-xl md:text-sm font-poppins">
                                Drawing on over 5 years of Web Development and Java Internships,
                                I'm well-versed in full-stack development, and I love the challenge of creating projects that
                                streamline processes and keep users engaged.
                            </p>
                            <p className="mt-4 xl:text-2xl lg:text-xl md:text-sm font-poppins">
                                But code isn't all I love. I'm a huge anime fan, always down to explore a new world or get swept
                                up in a thrilling story. When I'm not glued to a screen, you'll probably find me outdoors - kayaking
                                on calm waters or hiking a scenic trail. Fresh air and new adventures definitely fuel my creativity
                                and keep me pushing forward.
                            </p>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default About;
