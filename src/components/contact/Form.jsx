import './contact.css';
import { TextField } from '@mui/material';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
import HireButton from '../Hero/HireButton';
import { useState } from 'react';
import { validate } from './FormValidation';


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
            width: 450px;
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
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        const error = validate(name, value);
        setErrors({ ...errors, [name]: error });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    };

    return (
        <div className='flex justify-center mt-10'>
            <div className="form-container">
                <form className="form" onSubmit={handleSubmit}>
                    <TextField
                        id="name"
                        name='name'
                        label="Name"
                        variant="outlined"
                        value={formValues.name}
                        onChange={handleChange}
                        error={!!errors.name}
                        helperText={errors.name || ''}
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
                        name='email'
                        label="Email"
                        variant="outlined"
                        value={formValues.email}
                        onChange={handleChange}
                        error={!!errors.email}
                        helperText={errors.email || ''}
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
                        name='phone'
                        label="Phone"
                        variant="outlined"
                        value={formValues.phone}
                        onChange={handleChange}
                        error={!!errors.phone}
                        helperText={errors.phone || ''}
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
                        <HireButton title="Send" type="submit" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;