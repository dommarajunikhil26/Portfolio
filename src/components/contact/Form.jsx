import './contact.css';
import { useRef } from 'react';
import { TextField } from '@mui/material';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
import { useState } from 'react';
import { validate } from './FormValidation';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
};

const TextareaAutosize = styled(BaseTextareaAutosize)(
    ({ theme }) => `
            box-sizing: border-box;
            width: 100%;
            font-family: 'IBM Plex Sans', sans-serif;
            font-size: 0.875rem;
            font-weight: 400;
            line-height: 1.5;
            padding: 8px 12px;
            border-radius: 8px;
            color: ${theme.palette.mode === 'dark' ? '#414141' : '#414141'};
            background: ${theme.palette.mode === 'dark' ? '#212121' : '#212121'};
            border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[800]};

            &:hover {
              border-color: ${'#40c9ff'};
            }
        
            &:focus {
              border-color: ${'#e81cff'};
              box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? '#e81cff' : '#e81cff'};
            }
        
            // firefox
            &:focus-visible {
              outline: 0;
            }
        `,
);



const Form = () => {
    const form = useRef();
    const notify = (msg) => toast(msg);

    const [formValues, setFormValues] = useState({
        from_name: '',
        from_email: '',
        from_phone: '',
        message: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues(prevState => ({ ...prevState, [name]: value }));
        const error = validate(name, value);
        setErrors(prevState => ({ ...prevState, [name]: error }));
    };

    const sendEmail = (e) => {
        notify("Thank you for reaching out!")
        e.preventDefault();
        setFormValues({
            from_name: '',
            from_email: '',
            from_phone: '',
            message: ''
        })

        emailjs
            .sendForm('service_g0tgo7s', 'template_d89zx4v', form.current, {
                publicKey: 'pjNFrnTuR5F4gpVQs',
            })
            .then(
                () => {
                    notify("Message Sent to Nikhil");
                },
                (error) => {
                    notify(error.text);
                },
            );
    };

    return (
        <div className='flex justify-center w-full pb-5'>
            <div className="form-container w-[80%]">
                <form ref={form} className="form">
                    <TextField
                        id="name"
                        name='from_name'
                        label="Name"
                        variant="outlined"
                        value={formValues.from_name}
                        onChange={handleChange}
                        error={!!errors.from_name}
                        helperText={errors.from_name || ''}
                        required
                        sx={{
                            input: { color: "#C7D0DD" },
                            "& label.Mui-focused": { color: "#C7D0DD" },
                            "& .MuiInputLabel-outlined": { color: "#C7D0DD" },
                            "& .MuiOutlinedInput-root": {
                                "&:hover fieldset": { borderColor: "#40c9ff" },
                                "&.Mui-focused fieldset": { borderColor: "#e81cff" },
                            },
                        }}
                    />
                    <TextField
                        id="email"
                        name='from_email'
                        label="Email"
                        variant="outlined"
                        value={formValues.from_email}
                        onChange={handleChange}
                        error={!!errors.from_email}
                        helperText={errors.from_email || ''}
                        required
                        sx={{
                            input: { color: "#C7D0DD" },
                            "& label.Mui-focused": { color: "#C7D0DD" },
                            "& .MuiInputLabel-outlined": { color: "#C7D0DD" },
                            "& .MuiOutlinedInput-root": {
                                "&:hover fieldset": { borderColor: "#40c9ff" },
                                "&.Mui-focused fieldset": { borderColor: "#e81cff" },
                            },
                        }}
                    />
                    <TextField
                        id="phone"
                        name='from_phone'
                        label="Phone"
                        variant="outlined"
                        value={formValues.from_phone}
                        onChange={handleChange}
                        error={!!errors.from_phone}
                        helperText={errors.from_phone || ''}
                        required
                        sx={{
                            input: { color: "#C7D0DD" },
                            "& label.Mui-focused": { color: "#C7D0DD" },
                            "& .MuiInputLabel-outlined": { color: "#C7D0DD" },
                            "& .MuiOutlinedInput-root": {
                                "&:hover fieldset": { borderColor: "#40c9ff" },
                                "&.Mui-focused fieldset": { borderColor: "#e81cff" },
                            },
                        }}
                    />
                    <TextareaAutosize
                        name='message'
                        aria-label='message'
                        minRows={5}
                        placeholder='Leave a message'
                        value={formValues.message}
                        onChange={handleChange}
                        required
                        style={{ color: "#C7D0DD" }}
                    />
                    <div className='flex justify-center'>
                        <button type="submit" onClick={sendEmail} className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Send</button>
                        <ToastContainer
                            position="top-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="dark"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;
