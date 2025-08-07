import { socialMedia } from "@/data";

import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import Image from "next/image";
import ContactForm from "./ContactForm";


const Footer = () => {
    return (
        <footer className="w-full pb-10 mb-[100px] md:mb-10" id="contact">
            <div className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[54vw] text-white">
                    Ready to take <span className="text-[#2079ff]">Your</span>{" "}
                    digital presence to the next level?
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">
                    Reach out to me today let&apos;s discuss how I can help you
                    achieve your goals.
                </p> 
                   <ContactForm />       
                    
                <Link href="mailto:osmangonidevx@gmail.com">
                    <MagicButton
                        title="Let's get in touch"
                        icon={<FaLocationArrow />}
                        position="right"
                    />
                </Link>
            </div>

            <div className="flex mt-16 md:flex-row flex-col justify-between items-center ">
                <p className="md:text-base text-sm md:font-normal font-light text-white">
                    Copyright © 2025 Osman Goni
                </p>
                <div className="flex items-center md:gap-3 gap-6">
                    {socialMedia.map((info) => (
                        <Link
                            key={info.id}
                            href={info.src}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-[#041C34] rounded-lg border border-black-300">
                            <Image
                                src={info.img}
                                alt="social-icon"
                                width={20}
                                height={20}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
