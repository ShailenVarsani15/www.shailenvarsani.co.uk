import React, { useRef } from "react";
import "./global.css";
import "./work.css";
import {
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
  } from "@material-tailwind/react";
import ProjectsList from "./components/projectsList";
import ScrollVelocity from './ScrollVelocity';
import VideoJS from './VideoJS';
import ColazVideo from "./assets/colaz-video.mp4";
import PMAVideo from "./assets/pma-video.mp4";
import FloralVideo from "./assets/mr-floral-video.mp4";
import ColazPoster from "./assets/colaz-poster.png";
import PMAPoster from "./assets/pma-poster.png";
import MrFloralPoster from "./assets/mr-floral-poster.png";

export function Work() {
    const colazPlayerRef = useRef(null);
    const pmaPlayerRef = useRef(null);
    const floralPlayerRef = useRef(null);

    const videoJsOptions = {
        autoplay: false, 
        muted: true,
        loop: true,
        responsive: true,
        fluid: true,
        controls: false,
        userActions: { hotkeys: true }, 
        html5: { vhs: { overrideNative: true }, nativeVideoTracks: false }
    };

    const playVideo = (ref) => {
        if (ref.current) {
            ref.current.muted(true);
            const promise = ref.current.play();
            if (promise !== undefined) {
                promise.catch(error => {
                    console.error("Autoplay prevented:", error);
                });
            }
        }
    };

    const pauseVideo = (ref) => {
        if (ref.current) {
            ref.current.pause();
        }
    };

    return (
        <div id="work" className="work">
            <div className="flex columns-2 justify-between gap-8 lg:m-40 lg:mx-40 relative intro">
                <div className="introTitle">
                    <p>Why leading companies</p>
                    <p><span className="animated-underline">choose me</span>.</p>
                </div>
                <div className="introText">
                    <p>
                        From experience in Fintech, Saas and E-Commerce pioneering UI design and front-end web development. Crafting digital interfaces to make a mark.
                    </p>
                </div>
            </div>
            <div className="ticker">
                <ScrollVelocity texts={['UX / UI Design', 'Projects']} velocity={50} numCopies={10} />
            </div>
            <div className="pt-10">
                <div className="projects">
                    {/* Project 1 */}
                    <div className="projectLeft" onMouseEnter={() => playVideo(colazPlayerRef)} onMouseLeave={() => pauseVideo(colazPlayerRef)}>
                        <div className="videoContainer">
                            <VideoJS 
                                options={{ ...videoJsOptions, sources: [{ src: ColazVideo, type: 'video/mp4' }] }} 
                                onReady={(p) => { colazPlayerRef.current = p; }} 
                            />
                            <img src={ColazPoster} className="videoPoster" alt="Colaz" />
                        </div>
                        <div className="projectDetails ml-6"><p>Colaz</p><p>UI Design</p></div>
                    </div>

                    {/* Project 2 */}
                    <div className="projectRight" onMouseEnter={() => playVideo(pmaPlayerRef)} onMouseLeave={() => pauseVideo(pmaPlayerRef)}>
                        <div className="videoContainer">
                            {/* FIX: Set taxiPlayerRef here */}
                            <VideoJS 
                                options={{ ...videoJsOptions, sources: [{ src: PMAVideo, type: 'video/mp4' }] }} 
                                onReady={(p) => { pmaPlayerRef.current = p; }} 
                            />
                            <img src={PMAPoster} className="videoPoster" alt="PMA Poster" />
                        </div>
                        <div className="projectDetails ml-6"><p>Portfolio Management App</p><p>UI Design</p></div>
                    </div>

                    {/* Project 3 */}
                    <div className="projectBottom" onMouseEnter={() => playVideo(floralPlayerRef)} onMouseLeave={() => pauseVideo(floralPlayerRef)}>
                        <div className="videoContainer">
                            {/* FIX: Set floralPlayerRef here */}
                            <VideoJS 
                                options={{ ...videoJsOptions, sources: [{ src: FloralVideo, type: 'video/mp4' }] }} 
                                onReady={(p) => { floralPlayerRef.current = p; }} 
                            />
                            <img src={MrFloralPoster} className="videoPoster" alt="Floral" />
                        </div>
                        <div className="projectDetails ml-6"><p>Mr Floral</p><p>UI Design</p></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work







// ... (imports remain the same)

