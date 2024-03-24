/* eslint-disable react/prop-types */

const ProjectCard = ({ title, description, imgUrl }) => {
    return (
        <div className="w-full md:w-1/3 px-2 mb-4">
            <div className="proj-imgbx relative overflow-hidden rounded-lg mb-6 cursor-pointer hover:shadow-lg transition duration-300 ease-in-out">
                <img src={imgUrl} alt="Project" className="w-full" />
                <div className="proj-txtx absolute inset-0 flex items-center justify-center flex-col text-center text-white opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out bg-black bg-opacity-50">
                    <h4 className="text-lg font-bold">{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
