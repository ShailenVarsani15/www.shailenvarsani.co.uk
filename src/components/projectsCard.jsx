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
    jobColor = "green"
}) {

const [open, setOpen] = React.useState(false);
 
const handleOpen = () => setOpen(!open);

    return(
        <div className="card flex-1">
            <img src={imgThumb} alt="" />
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
                    <img src={projectImg} alt="" />
                    {projectDetails}
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

