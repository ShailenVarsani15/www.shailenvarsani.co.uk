import React from "react";
import "./work.css";
import {
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
  } from "@material-tailwind/react";
import ProjectsList from "./components/projectsList";
import ScrollVelocity from './ScrollVelocity';

export function Work() {

    return(
        <div id="work" className="work">
            <div className="ticker">
                <ScrollVelocity
                    texts={['UX / UI Design', 'Projects']} 
                    velocity={50}
                    className="custom-scroll-text"
                    numCopies={10}
                />
            </div>
            <div className="grid flex-wrap justify-evenly">
                <div className="work__container grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 px-10">
                    <ProjectsList />
                </div>
            </div>
        </div>
    );
}

export default Work