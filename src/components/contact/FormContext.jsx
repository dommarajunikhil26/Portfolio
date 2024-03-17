/* eslint-disable react/prop-types */
// FormContext.js
import { createContext, useContext, useState } from 'react';

const FormDataContext = createContext();

export const useFormContext = () => useContext(FormDataContext);

export const FormDataProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    return (
        <FormDataContext.Provider value={{ formData, setFormData }}>
            {children}
        </FormDataContext.Provider>
    );
};
