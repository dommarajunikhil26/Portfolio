import Form from "./Form"
import { useInView } from "react-intersection-observer";
import { Fade } from "react-awesome-reveal";
import contact from '../../../public/Resources/Logo/contact/contact-img.svg';

const Contact = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
    })

    return (
        <div ref={ref} id="contact" className="bg-custom-gradient pt-10 min-h-screen md:mb-0">
            {inView ? (
                <Fade delay={5} duration={1000}>
                    <h2 className="uppercase text-center text-gray-50 font-roboto-slab font-bold text-4xl">Contact Me</h2>
                    <div className="flex flex-col md:flex-row mt-10">
                        <div className="flex justify-center w-full p-5">
                            <img src={contact} alt="contact image" className="flex justify-center w-[80%]" />
                        </div>
                        <Form />
                    </div>
                </Fade>
            )
                : (
                    <>
                        <h2 className="uppercase text-center text-gray-50 font-roboto-slab text-4xl">Contact Me</h2>
                        <div className="flex flex-col md:flex-row mt-10">
                            <div className="flex justify-center w-full p-5">
                                <img src={contact} alt="contact image" className="flex justify-center w-[80%]" />
                            </div>
                            <Form />
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default Contact;