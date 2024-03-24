import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ProjectCard from './projectCard';
import projImg1 from "/public/Resources/Images/project1.png";
import projImg2 from "/public/Resources/Images/project2.png";
import './animate.css';
import 'react-tabs/style/react-tabs.css';

const ProjectComponent = () => {
    const projects = [
        {
            title: "Concert",
            description: "Book your tickets for a Ariane's conecrt",
            imgUrl: projImg1,
            url: "https://dommarajunikhil26.github.io/React-Projects/"
        },
        {
            title: "ManCity",
            description: "Know all about Man city",
            imgUrl: projImg2,
            url: ""
        },
    ];
    const projects2 = [
        {
            title: "Business2",
            description: "Design & Development",
            imgUrl: projImg1,
            url: "https://dommarajunikhil26.github.io/React-Projects/"
        },
        {
            title: "Business2",
            description: "Design & Development",
            imgUrl: projImg2,
            url: "https://dommarajunikhil26.github.io/React-Projects/"
        },
    ];

    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div className="container mx-auto px-4 py-10">
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className="flex justify-center mb-7">
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


    );
}

export default ProjectComponent;
