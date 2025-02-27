import React from "react";
import {
    Chip,
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
  } from "@material-tailwind/react";

export function ProjectsCard({
    imgThumb,
    company = "Company Name",
    projectName = "Project Name",
    jobTitle = "Job Title",
    excerpt = "Excerpt here",
    projectImg,
    projectDetails = "Project Details here",
    companyColor = "blue",
    jobColor = "green",
    problem = "Problem",
    solution = "Solution",
    outcome = "Outcome"
}) {

const [open, setOpen] = React.useState(false);
 
const handleOpen = () => setOpen(!open);

const BASE_URL = import.meta.env.BASE_URL;

    return(
        <div className="card flex-1">
            <img src={BASE_URL + imgThumb} alt="" />
            <div className="card__information">
                <div className="flex gap-2 mb-2">
                    <Chip size="sm" color={companyColor} className="inline text-xs font-normal camelcase" value={company} />
                    <Chip size="sm" color={jobColor} className="inline text-xs font-normal camelcase" value={jobTitle} />
                </div>
                <h3 className="mb-2">{projectName}</h3>
                <p>{excerpt}</p>
                <Button onClick={handleOpen}>Read More</Button>
            </div>
            <Dialog open={open} handler={handleOpen} className="card__dialog">
                <DialogHeader>{projectName}</DialogHeader>
                <DialogBody>
                    <img className="pb-6" src={BASE_URL + projectImg} alt="" />
                    <div className="project-information overscroll-contain">
                        <p><strong>Problem: </strong>{problem}</p>
                        <p><strong>Solution: </strong>{solution}</p>
                        <p><strong>Outcome: </strong>{outcome}</p>
                        
                    </div>
                </DialogBody>
                <DialogFooter>
                    <Button onClick={handleOpen}>
                        <span>Close</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </div>
    );
}

export default ProjectsCard

