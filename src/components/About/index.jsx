import { useInView } from "react-intersection-observer";
import { Fade, Slide } from "react-awesome-reveal";
import aboutPhoto from '../../Resources/Images/About.jpg';

const About = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
    });

    return (
        <div id="about" className="bg-gray-50">
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
                <div className="mb-4 md:mb-0 md:w-1/2 px-10">
                    <img src={aboutPhoto} alt="About Me" className="w-full h-auto rounded-md shadow-lg" />
                </div>
                <div className="w-full md:w-1/2 text-left md:text-left px-4">
                    <Slide direction="right" triggerOnce>
                        <div className="md:border-l-2 border-black px-10">
                            <p className="text-lg">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.
                            </p>
                            <p className="mt-4 text-lg">
                                Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue.
                            </p>
                            <p className="mt-4 text-lg">
                                Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio.
                            </p>
                        </div>
                    </Slide>
                </div>
            </div>
        </div>
    );
};

export default About;
