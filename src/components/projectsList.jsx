import React from "react";
import { useState } from "react";

// Components
import ProjectsCard from "../components/projectsCard.jsx";

//Data

import projectData from "../db/projects.json";

export function ProjectsList() {
    
    const [projects, setProjects] = useState(projectData);
    return (
        <>
            {projects.map((item)=> (
                <ProjectsCard 
                    key={item.id}
                    imgThumb={item.imgThumb}
                    company={item.company}
                    companyColor={item.companyColor}
                    projectName={item.projectName}
                    jobTitle={item.jobTitle}
                    jobColor={item.jobColor}
                    excerpt={item.excerpt}
                    projectImg={item.imgfull}
                    projectDetails={item.projectDetails}
                    problem={item.problem}
                    solution={item.solution}
                    outcome={item.outcome}
                />
            ))}
        </>

    );
}

export default ProjectsList