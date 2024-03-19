
import Marquee from 'react-fast-marquee';
import { Fade } from 'react-awesome-reveal';
import { useInView } from 'react-intersection-observer';
import skillsList from './skillList';

const Skills = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
    })

    return (
        <div id="skills" className="pt-10 pb-10 xs:py-14 xmd:py-16 bg-gray-50">
            <div ref={ref}>
                {inView ? (
                    <Fade delay={5} duration={1000}>
                        <h2 className="uppercase text-center font-roboto-slab font-bold text-4xl">Skills</h2>
                        <div className="overflow-hidden mt-8">
                            <div className="flex overflow-x-hidden">
                                <div className="flex whitespace-nowrap">
                                    <Marquee
                                        speed={80}
                                    >
                                        {skillsList.map((skill, index) => (
                                            <img key={index} src={skill.src} alt={skill.alt} className="mx-6 h-16 object-contain" />
                                        ))}
                                    </Marquee>
                                </div>
                            </div>
                        </div>
                    </Fade>
                )
                    :
                    <>
                        <h2 className="uppercase text-center font-roboto-slab text-4xl">Skills</h2>
                        <div className="overflow-hidden mt-8">
                            <div className="flex overflow-x-hidden">
                                <div className="flex whitespace-nowrap">
                                    <Marquee
                                        speed={80}
                                    >
                                        {skillsList.map((skill, index) => (
                                            <img key={index} src={skill.src} alt={skill.alt} className="mx-6 h-16 object-contain" />
                                        ))}
                                    </Marquee>
                                </div>
                            </div>
                        </div>
                    </>
                }
            </div>


        </div>


    )
}

export default Skills;
