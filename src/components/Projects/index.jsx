import ProjectComponent from "./projects";
import { useInView } from "react-intersection-observer";
import { Fade, Zoom } from "react-awesome-reveal";
import './animate.css';

const Projects = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
    });
    return (
        <div id="projects" className="bg-[#101010] min-h-screen p-10">
            <div ref={ref}>
                {inView ? (
                    <Fade delay={5} duration={1000}>
                        <h2 className="uppercase font-bold text-center font-roboto-slab text-4xl text-gray-50">Projects</h2>
                    </Fade>
                ) : (
                    <h2 className="uppercase text-center font-roboto-slab text-4xl text-gray-50">Projects</h2>
                )}
            </div>
            <Zoom triggerOnce>
                <ProjectComponent />
            </Zoom>

            <div className="flex justify-center items-center w-full">
                <div className="loader-circle-9 relative w-24 h-24 rounded-full text-center leading-none text-xs text-cyan-400 uppercase shadow-md flex items-center justify-center">
                    Adding More soon
                    <span className="block absolute"></span>
                </div>
            </div>
        </div>
    )
}

export default Projects