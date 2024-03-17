import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useFormContext } from '../contact/FormContext';

export const Email = () => {
    const { formData } = useFormContext();
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_g0tgo7s', 'template_d89zx4v', form.current, {
                publicKey: 'pjNFrnTuR5F4gpVQs',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );

    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            {formData}
        </form>
    );
};