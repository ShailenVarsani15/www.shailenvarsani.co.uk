import React from "react"
import { Typography } from "@material-tailwind/react";
import "./footer.css"
 
export function Footer() {
  return (
    <footer className="footer flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 py-6 px-10 text-center md:justify-between">
      <p>&copy; 2025 Shailen Varsani</p>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
        <Typography className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500">
            <a onClick={() => {
                const element = document.getElementById('about');
                const yOffset = +10;
                element?.scrollIntoView({
                behavior: 'smooth',
                block: 'center' 
              }); 
            }} 
        className="flex items-center">About Me</a>
          </Typography>
        </li>
        <li>
        <Typography className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500">
            <a onClick={() => {
                const element = document.getElementById('work');
                const yOffset = +10;
                element?.scrollIntoView({
                behavior: 'smooth',
                block: 'center' 
              }); 
            }} 
        className="flex items-center">View Work</a>
          </Typography>
        </li>
        <li>
          <Typography className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500">
            <a onClick={() => {
                const element = document.getElementById('contact');
                const yOffset = +10;
                element?.scrollIntoView({
                behavior: 'smooth',
                block: 'center' 
              }); 
            }} 
        className="flex items-center">Contact</a>
          </Typography>
        </li>
      </ul>
    </footer>
  );
}

export default Footer