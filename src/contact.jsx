import React from "react";
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css";
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    Textarea,
    Select,
    Option,
    IconButton
  } from "@material-tailwind/react";

export function Contact() {

    const form = useRef();
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_ikbe4rs', 'template_wahhimg', form.current, {
          publicKey: 'Ch-34xaS2c1k_CKFX',
        })
        .then(
            () => {
                console.log('SUCCESS!');
                setShowSuccessMessage(true); 
                // Clear the form after successful submission
                form.current.reset();
                // Optionally hide the success message after a few seconds
                setTimeout(() => {
                    setShowSuccessMessage(false);
                }, 10000); // Hide after 3 seconds
            },
            (error) => {
                console.log('FAILED...', error.text);
                // Optionally show an error message to the user
                alert("Error sending message. Please try again later.");
            },
        );
    };

    return(
        <div id="contact" className="contact lg:py-40 px-10">
            <h2 className="lg:hidden">Contact</h2>
            <div className="contact-column grid lg:grid-cols-2 gap-4">
                <div className="flex flex-col lg:items-center lg:justify-center">
                    <div className="contact__block">
                        <h3><i class="fa-solid fa-location-dot"></i>Address</h3>
                        <p>18b Homefield Road</p>
                        <p>Wembley</p>
                        <p>Middlesex</p>
                        <p>HA0 2NJ</p>
                        <p>United Kingdom</p>
                    </div>
                    <div className="contact__block">
                        <h3><i class="fa-solid fa-message"></i>Contact</h3>
                        <p>+447855577000</p>
                        <p>mr.s.varsani@gmail.com</p>
                    </div>
                    <div className="contact__block">
                        <h3><i class="fa-solid fa-heart"></i>Social Media</h3>
                        <div className="social__buttons">
                            <a target="blank" href="www.linkedin.com/in/shailenvarsani/">
                                <Button variant="button" size="sm" className="button__social hidden inline-block lg:flex justify-between gap-2">
                                    <span className="">LinkedIn</span>
                                    <i className="fa-brands fa-linkedin-in text-lg" />
                                </Button>
                            </a>
                            <a target="blank" href="www.instagram.com/shailenvarsani/">
                                <Button variant="button" size="sm" className="button__social hidden inline-block lg:flex justify-between gap-2">
                                    <span className="">Instagram</span>
                                    <i className="fa-brands fa-instagram text-lg" />
                                </Button>
                            </a>
                            <a target="blank" href="www.facebook.com/shailenhvarsani/">
                                <Button variant="button" size="sm" className="button__social hidden inline-block lg:flex justify-between gap-2">
                                    <span className="">Facebook</span>
                                    <i className="fa-brands fa-facebook text-lg" />
                                </Button>
                            </a>
                        </div>

                    </div>
                </div>
                <Card className="form p-4" shadow={true}>
                <h3>Send Message</h3>
                <p>Nice to meet you! If you have any questions, send me a message.</p>
                    <form ref={form} onSubmit={sendEmail} className="form__message mb-2">
                        <div className="mb-1 flex flex-col gap-4">
                            <Typography variant="p" color="white" className="-mb-3">
                                Your Name
                            </Typography>
                        <Input
                            name="from_name"
                            size="lg"
                            placeholder="Your name"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-white"
                            labelProps={{
                            className: "before:content-none after:content-none",
                            }}
                        />
                        <Typography variant="p" color="white" className="-mb-3">
                            Your Email
                        </Typography>
                        <Input
                            name="from_email"
                            size="lg"
                            placeholder="name@mail.com"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-white"
                            labelProps={{
                            className: "before:content-none after:content-none",
                            }}
                        />
                        <Typography variant="p" color="white" className="-mb-3">
                            Your Reason for contact
                        </Typography>
                        <div className="dropdown-menu">
                            <Select name="reason" className="select bg-white">
                                <Option>Job Opportunity</Option>
                                <Option>Logo Design</Option>
                                <Option>Website Design</Option>
                                <Option>App Design</Option>
                                <Option>Other</Option>
                            </Select>
                        </div>
                        <Typography variant="p" color="white" className="-mb-3">
                            Your message
                        </Typography>
                        <Textarea
                            type="textarea"
                            name="message"
                            size="lg"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-white"
                            labelProps={{
                            className: "before:content-none after:content-none",
                            }}
                        />
                        </div>
                        <Button type="submit" variant="button" size="sm" className="button__send inline-block flex justify-between items-center gap-2">
                                <span className="">Send Message</span>
                                <i class="fa-solid fa-paper-plane"></i>
                        </Button>
                        {showSuccessMessage && ( 
                            <div className="success-message">
                                Message sent successfully!
                            </div>
                        )}
                    </form>
                </Card>
            </div>
        </div>
    );
}

export default Contact