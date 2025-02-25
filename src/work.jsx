import React from "react";
import "./work.css";
import {
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
  } from "@material-tailwind/react";
import ProjectsList from "./components/projectsList";

export function Work() {

    return(
        <div id="work" className="work">
            <h2>View work</h2>
            <div className="work__container flex items-center gap-8 px-10">
                <ProjectsList />
            </div>
        </div>
    );
}

export default Work