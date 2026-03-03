import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./about.css";

gsap.registerPlugin(ScrollTrigger);

export function About() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const paragraphs = sectionRef.current.querySelectorAll('.scrollingText');

        paragraphs.forEach((p) => {
            // 2. Split text into words and wrap them in spans
            const words = p.innerText.split(" ");
            p.innerHTML = words
                .map(word => `<span class="word">${word}</span>`)
                .join(" ");

            // 3. Animate the spans
            gsap.to(p.querySelectorAll('.word'), {
                color: "var(--color-white)",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: p,
                    start: "top 80%",
                    end: "top 30%",
                    scrub: true,
                }
            });
        });
    }, []);
 
    return(
        <div id="about" className="about" ref={sectionRef}>
            <div className='sectionLeft'>
                <div className="aboutInformation">
                        <h2>A little bit about me</h2>
                        <p className="scrollingText">
                            I'm Shailen Varsani, a UX/UI Designer passionate about creating 
                            web applications that solve real problems for real people. With 4 years of commercial experience, I've had the privilege 
                            of helping numerous startups achieve significant growth.
                        </p>
                </div>
            </div>
            <div className='sectionRight'>
                <div className="journeyInformation">
                        <h2>My journey</h2>
                        <p className="scrollingText">
                            Upon completing my degree in Bachelors of Science, I took on rolls in UI and Front-End to build commercial experience into how companies use design and technology to convey messages and solve user problems.
                        </p>
                </div>
            </div>
            <div className='sectionLeft'>
                <div className="hobbiesInformation">
                        <h2>My hobbies</h2>
                        <p className="scrollingText">
                            In my spare time I like to learn more about latest trends in technology and how vibe code React project to learn new skills.
                        </p>
                </div>
            </div>
        </div>
    );
}

export default About;