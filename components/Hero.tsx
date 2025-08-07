import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Link from "next/link";

const Hero = () => {
    return (
        <div className="pb-20 pt-36 ">
            {/* Spotlights */}
            <div>
                <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="#FFFFFF" />
                <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="#0D1F3A" />
                <Spotlight className="top-28 left-80 h-[100vh] w-[80vw]" fill="#149ED5" />
            </div>

            {/* Background effect */}
            <div className="absolute top-0 left-0 flex h-screen w-full items-center justify-center bg-white dark:bg-black-100 dark:bg-grid-white/[0.03] bg-grid-black/[0.2]">
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
            </div>

            {/* Hero Content */}
            <div className="flex justify-center relative my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                        Dynamic Web expert React and Next.js
                    </p>

                    <TextGenerateEffect
                        words="From Mockups to Magical User Interfaces"
                        className="text-center text-[40px] md:text-5xl lg:text-6xl"
                    />

                    <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-white">
                        Hi! I&apos;m Osman, a Dedicated Frontend Developer for StartUps, SaaS, and teams.
                    </p>

                    <Link href="#projects">
                        <MagicButton
                            title="Show My Work"
                            icon={<FaLocationArrow />}
                            position="right"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;
