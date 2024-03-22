import { useState } from "react";
import Select from 'react-select';


const Projects = () => {
    const [selectedOptions, setSelectedOptions] = useState(null);

    const options = [
        { value: 'mern', label: 'Mern Stack' },
        { value: 'java', label: 'Java Stack' },
    ];


    return (
        <div id="projects" className="h-screen bg-gray-950 pt-10">
            <h2 className='uppercase text-center text-gray-50 font-roboto-slab font-bold text-4xl'>
                Projects
            </h2>
            <div className="w-1/4">
                <Select
                    defaultValue={selectedOptions}
                    onChange={setSelectedOptions}
                    options={options}
                />
            </div>

        </div>
    )
}

export default Projects;