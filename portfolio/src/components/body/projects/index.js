import React from 'react'
import Separator from '../../common/social-contact/separator';
import ProjectCard from './project-card';
import './projects.css';
import {ProjectData} from "/home/niyati/Desktop/portfolio/src/components/data/projects";
function Projects() {
    const data=ProjectData;
    return (
        <div className="projects">
            <Separator />
            <label className="section-title">Projects</label>
            <div>
                {data.map((project)=> {
                    return <ProjectCard project={project}/>
                })}
            </div>
        </div>
    )
}

export default Projects
