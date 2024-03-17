import Form from "./Form"
import { useInView } from "react-intersection-observer";
import { Fade } from "react-awesome-reveal";
import { Email } from "../Utils/Email";
import { FormDataProvider } from "./FormContext";

const Contact = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
    })

    return (
        <div ref={ref} id="contact" className="mt-5">
            {inView ? (
                <Fade delay={5} duration={1000}>
                    <h2 className="uppercase text-center text-gray-50 font-roboto-slab text-4xl">Contact Me</h2>
                    <FormDataProvider>

                        <Form />
                        <Email />
                    </FormDataProvider>
                </Fade>
            )
                : (
                    <>

                        <h2 className="uppercase text-center text-gray-50 font-roboto-slab text-4xl">Contact Me</h2>
                        <FormDataProvider>

                            <Form />
                            <Email />
                        </FormDataProvider>
                    </>
                )
            }
        </div>
    )
}

export default Contact;