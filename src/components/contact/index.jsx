import Form from "./Form"
import { useInView } from "react-intersection-observer";
import { Fade } from "react-awesome-reveal";



const Contact = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
    })

    return (
        <div ref={ref} id="contact" className="mt-5">
            {inView ? (
                <Fade delay={5} duration={1000}>
                    <h2 className="uppercase text-center text-gray-50 font-roboto-slab text-4xl">Contact Me</h2>
                    <Form />
                </Fade>
            )
                : (
                    <>

                        <h2 className="uppercase text-center text-gray-50 font-roboto-slab text-4xl">Contact Me</h2>
                        <Form />
                    </>
                )
            }
        </div>
    )
}

export default Contact;