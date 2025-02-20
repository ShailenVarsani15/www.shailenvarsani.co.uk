import React from "react";
import "./hero.css"

export function Hero() {

    return(
        <div className="hero mt-15 lg:mt-19">
            <div className="flex flex-wrap lg:mx-40 justify-around items-center">
                <div className="hero__introduction lg:mx-8">
                    <h1 className="text-6xl">Begin your transformation.</h1>
                    <p>I transform ideas into seamless digital experiences. I'm Shailen Varsani, a UI/UX Designer passionate about creating user-centered solutions that solve real problems.</p>
          <div className="flex items-center gap-x-4">
                <a href="" className="hero__button primary shadow-1g flex justify-between">
                    <span>Get in touch</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </a>
                <a href="" className="hero__button secondary flex justify-between">
                    <span>View work</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </a>
          </div>
                </div>
                <div className="hero__graphics basis-3xs">
                    <div className="hero__graphics__square bg-sky-500/60"></div>
                    <div className="hero__graphics__square bg-blue-500/80"></div>
                    <div className="hero__graphics__square bg-sky-500/70"></div>
                    <div className="hero__graphics__square bg-blue-500/60"></div>
                    <div className="hero__graphics__square bg-sky-500/50"></div>
                    <div className="hero__graphics__square bg-sky-500/40"></div>
                    <div className="hero__graphics__square bg-blue-500/30"></div>
                    <div className="hero__graphics__square bg-sky-500/20"></div>
                </div>
            </div>
        </div>
    );
}

export default Hero