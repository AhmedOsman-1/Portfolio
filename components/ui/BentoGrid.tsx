"use client";
import animationData from "@/data/confetti.json";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { useState } from "react";
import Lottie from "react-lottie";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
                className
            )}>
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    id,
    img,
    imgClassName,
    titleClassName,
    spareImg,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
    id: number;
}) => {
    const [copied, setCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText("osmangonidevx").then(() => {
            setCopied(true);
            setTimeout(() => {
                setCopied(false);
            }, 1000);
        });
    };
    return (
        <div
            className={cn(
                "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
                className
            )}
            style={{
                // FIX: Removed duplicate 'background' property, keep gradient only
                background:
                    "linear-gradient(90deg, rgba(4, 28, 52, 1) 0%, rgba(4, 29, 54, 1) 46%, rgba(4, 28, 52, 1) 100%)",
            }}>
            <div className={`${id === 6 ? 'flex justify-center' : ''} h-full`}>
                <div className="w-full h-full absolute">
                    {img && (
                        <Image
                            src={img}
                            // FIX: alt expects string, title can be ReactNode, so convert safely
                            alt={typeof title === "string" ? title : ""}
                            width={220}
                            height={220}
                            className={cn(
                                "object-cover w-full h-full object-center",
                                imgClassName
                            )}
                        />
                    )}
                </div>
                <div
                    className={`absolute right-0 -bottom-5 ${
                        id === 5 ? "w-full opacity-80" : ""
                    } `}>
                    {spareImg && (
                        <Image
                            src={spareImg}
                            alt={spareImg}
                            width={220}
                            height={220}
                            className="object-cover object-center w-full h-full"
                        />
                    )}
                </div>
                {id === 6 && (
                    <BackgroundGradientAnimation>
                        {/* Commented out content unchanged */}
                    </BackgroundGradientAnimation>
                )}

                <div
                    className={cn(
                        titleClassName,
                        "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
                    )}>
                    <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
                        {description}
                    </div>
                    <div className="font-sans font-bold text-lg text-[#dfe0ec] dark:text-neutral-200 lg:text-3xl max-w-96 z-10">
                        {title}
                    </div>

                    {id === 2 && <GlobeDemo />}

                    {id === 3 && (
                        <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
                            <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                                {[
                                    "React.js",
                                    "TailwindCss",
                                    "Next.js",
                                    "Typescript",
                                ].map((item, i) => (
                                    <span
                                        key={i}
                                        className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                                            lg:opacity-100 rounded-lg text-center text-white bg-[#153C5C]">
                                        {item}
                                    </span>
                                ))}
                                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#153C5C]"></span>
                            </div>
                            <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#153C5C]"></span>
                                {["GitHub", "JavaScript", "Figma"].map(
                                    (item, i) => (
                                        <span
                                            key={i}
                                            className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                                            lg:opacity-100 rounded-lg text-center text-white bg-[#153C5C]">
                                            {item}
                                        </span>
                                    )
                                )}
                                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#153C5C]"></span>
                            </div>
                        </div>
                    )}
                    {id === 6 && (
                        <div className="mt-5 relative">
                            <div className={`absolute -bottom-5 right-0`}>
                                <Lottie 
                                    options={{
                                        loop: copied,
                                        autoplay: copied,
                                        animationData,
                                        rendererSettings: {
                                            preserveAspectRatio: "xMidYMid slice",
                                        },
                                    }} 
                                />
                            </div>
                            <MagicButton 
                                title={copied ? 'Email copied!' : 'Copy my Email'}
                                icon={<IoCopyOutline />}
                                position="left"
                                otherClasses=""
                                handleClick={handleCopy}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
