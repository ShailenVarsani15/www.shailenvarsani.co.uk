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
        <div id="work" className="work grid flex-wrap justify-evenly">
            <h2 className="px-10 pb-2">View work</h2>
            <p className="px-10 pb-2">The following portfolio highlights my proficiency in UX and UI design, as applied in my recent projects.</p>
            <div className="work__container grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 px-10">
                <ProjectsList />
            </div>
        </div>
    );
}

export default Work