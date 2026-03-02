import { div } from "motion/react-client";
import React from "react";
import "./keywords.css"
import FluidGlass from './FluidGlass'

export function Keywords() {

    return (
        
        <div className="keywords">
            <FluidGlass
                text={"Different Principles.\nDifferent Designs.\nDifferent Emotions."}
                mode="lens"
                lensProps={{
                scale: 0.35,
                ior: 1.15,
                thickness: 5,
                roughness: 0,
                transmission: 1,
                chromaticAberration: 0.1,
                anisotropy: 0.01  
                }}
            />
            <div className="accentsLeft">
                <p>Discover</p>
                <span>Motion</span>
            </div>
            <div className="accentsRight">
                <p>Enjoy</p>
                <span>Feeling</span>
            </div>
            <div className="accentsTop">
                <p>Create</p>
                <span>Approach</span>
            </div>
            <div className="accentsBottom">
                <p>Transform</p>
                <span>Ideas</span>
            </div>
        </div>


    );
}

export default Keywords