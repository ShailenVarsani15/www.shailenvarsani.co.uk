import React from "react";
import { Button } from "@material-tailwind/react";
import ColorBends from './ColorBends';
import DecryptedText from './DecryptedText';
import "./hero.css";

export function Hero() {

return (
  <div className="hero relative overflow-hidden">
    <div className="absolute inset-0 z-0">
      <ColorBends
          colors={["#ff5c7a", "#8a5cff", "#00ffd1"]}
          rotation={0}
          speed={0.2}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={1}
          parallax={0.5}
          noise={0.1}
          transparent
          autoRotate={0}
          color=""
      />
      <div className="hero__linkDown">
        <div class="arrow-down">
          <div class="chevron"></div>
          <div class="chevron"></div>
          <div class="chevron"></div>
          <span class="text">Scroll down</span>
        </div>
      </div>
    </div>
      <div className="flex flex-wrap lg:m-60 lg:mx-40 relative">
        <div className="hero__introduction lg:m-30 lg:mx-8 z-11">
          <h1 className="text-6xl">
            <DecryptedText
                text="UX / UI Designer"
                animateOn="both"
                revealDirection="start"
                sequential
                speed={80}
                maxIterations={20}
                className="revealed"
                parentClassName="all-letters"
                encryptedClassName="encrypted"
            />
          </h1>
          <p>I'm <a className="hero__introduction--link">Shailen Varsani</a> a UI/UX Designer passionate about creating user-centered solutions solving todays problems. Aligning business needs into seamless digital experiences.
          </p>
        </div>

        {/* <div className="hero__graphics basis-3xs z-11">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="hero__graphics__square bg-[#f9c74f]"></div>
          ))}
        </div> */}
      </div>
    
    </div>
  );
}

export default Hero;