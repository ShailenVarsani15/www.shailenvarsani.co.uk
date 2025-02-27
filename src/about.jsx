import React from "react";
import "./about.css";
import {Button} from '@material-tailwind/react'

export function About() {
 
    const scrollToContact = () => {
        const element = document.getElementById('contact');
        if (element) {
          const yOffset = -30;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      };
 
    return(
        <div id="about" className="about flex items-center gap-20 px-80 py-60">
            <div className="about__picture flex items-center ">
                <div className="basis-3xs">
                    <img className="about__picture__profile" src="./src/assets/shailen-picture.png" alt="" />
                    <div className="about__graphics__square bg-[var(--color-primary-30)]"></div>
                    <div className="about__graphics__square bg-[var(--color-primary-30)]"></div>
                    <div className="about__graphics__square bg-[var(--color-primary-30)]"></div>
                    <div className="about__graphics__square bg-[var(--color-primary-30)]"></div>
                </div>
            </div>
            <div className="about__info flex items-center p-8">
                <div className="about__info__title">
                    <h2>A little bit about me</h2>
                    <p>I'm Shailen Varsani, a UX/UI Designer passionate about creating web applications that solve real problems for real people.</p>
                    <p>With 4 years of commercial experience, I've had the privilege of helping numerous startups achieve significant growth through thoughtful and user-centered design.</p>
                    <p>My skillset spans the entire design process, from user research and wireframing to component building and prototyping. I thrive in collaborative environments and am meticulous in my approach, ensuring every detail is considered.  My focus areas are fintech and marketing, and I'm always excited to take on new challenges.</p>
                    <Button onClick={scrollToContact} href="" className="hero__button primary shadow-1g flex justify-between items-end">
                    <span>Get in touch</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </Button>
                </div>
            </div>
        </div>
    );
}

export default About