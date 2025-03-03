import React from "react";
import "./hero.css"
import {Button} from "@material-tailwind/react";

export function Hero() {

    const scrollToContact = () => {
        const element = document.getElementById('contact');
        if (element) {
          const yOffset = 0;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      };

    const scrollToWork = () => {
        const element = document.getElementById('work');
        if (element) {
          const yOffset = -40;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      };

    return(
        <div className="hero mt-15 lg:mt-19">
            <div className="flex flex-wrap lg:mx-40 justify-around items-center">
                <div className="hero__introduction lg:mx-8">
                    <h1 className="text-6xl">Begin your transformation.</h1>
                    <p>I transform ideas into seamless digital experiences. I'm Shailen Varsani, a UI/UX Designer passionate about creating user-centered solutions that solve real problems.</p>
          <div className="flex items-center gap-x-4">
                <Button onClick={scrollToContact} href="" className="hero__button primary shadow-1g flex justify-between items-end">
                    <span>Get in touch</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </Button>
                <Button onClick={scrollToWork} href="" className="hero__button secondary flex justify-between items-end">
                    <span>View work</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </Button>
          </div>
                </div>
                <div className="hero__graphics basis-3xs">
                    <div className="hero__graphics__square bg-[var(--color-primary-30)]"></div>
                    <div className="hero__graphics__square bg-[var(--color-primary-30)]"></div>
                    <div className="hero__graphics__square bg-[var(--color-primary-30)]"></div>
                    <div className="hero__graphics__square bg-[var(--color-primary-30)]"></div>
                    <div className="hero__graphics__square bg-[var(--color-primary-30)]"></div>
                    <div className="hero__graphics__square bg-[var(--color-primary-30)]"></div>
                    <div className="hero__graphics__square bg-[var(--color-primary-30)]"></div>
                    <div className="hero__graphics__square bg-[var(--color-primary-30)]"></div>
                </div>
            </div>
        </div>
    );
}

export default Hero