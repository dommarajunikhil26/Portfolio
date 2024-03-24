import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ProjectCard from './projectCard';
import projImg1 from "/public/Resources/Images/About.jpg";
import colorSharp2 from "/public/Resources/Images/color-sharp2.png";
import './animate.css';
import 'react-tabs/style/react-tabs.css';

const Projects = () => {
    const projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
    ];
    const projects2 = [
        {
            title: "Business2",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business2",
            description: "Design & Development",
            imgUrl: projImg1,
        },
    ];

    const [tabIndex, setTabIndex] = useState(0);

    return (
        <section className="project bg-black text-white py-20 relative">
            <div className="container mx-auto px-4">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className="flex justify-center mb-5">
                        <Tab className="cursor-pointer py-2 px-4 text-white focus:outline-none">MERN Stack</Tab>
                        <Tab className="cursor-pointer py-2 px-4 text-white focus:outline-none">Java Stack</Tab>
                    </TabList>
                    <TabPanel>
                        <div className="flex flex-wrap -mx-2 justify-center">
                            {projects.map((project, index) => (
                                <ProjectCard key={index} {...project} />
                            ))}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="flex flex-wrap -mx-2 justify-center">
                            {projects2.map((project, index) => (
                                <ProjectCard key={index} {...project} />
                            ))}
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
            <img className="absolute right-0 bottom-0 w-1/3" src={colorSharp2} alt="Decorative" />
        </section>

    );
}

export default Projects;
