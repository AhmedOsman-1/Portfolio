"use client";
import { cn } from "@/utils/cn";
import Image from "next/image";
import React, { useEffect, useState, useCallback } from "react";

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "normal",
    pauseOnHover = true,
    className,
}: {
    items: {
        quote: string;
        name: string;
        title: string;
        img:string;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    const [start, setStart] = useState(false);

    const addAnimation = useCallback(() => {
        function getDirection() {
            if (containerRef.current) {
                if (direction === "left") {
                    containerRef.current.style.setProperty(
                        "--animation-direction",
                        "forwards"
                    );
                } else {
                    containerRef.current.style.setProperty(
                        "--animation-direction",
                        "reverse"
                    );
                }
            }
        }

        function getSpeed() {
            if (containerRef.current) {
                if (speed === "fast") {
                    containerRef.current.style.setProperty(
                        "--animation-duration",
                        "20s"
                    );
                } else if (speed === "normal") {
                    containerRef.current.style.setProperty(
                        "--animation-duration",
                        "40s"
                    );
                } else {
                    containerRef.current.style.setProperty(
                        "--animation-duration",
                        "80s"
                    );
                }
            }
        }

        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }, [direction, speed]);

    useEffect(() => {
        addAnimation();
    }, [addAnimation]);

    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}>
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex w-max min-w-full shrink-0 flex-nowrap gap-16 py-4",
                    start && "animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}>
                {items.map((item) => (
                    <li
                        className="relative w-[90vw] max-w-full flex-shrink-0 rounded-2xl border border-b-0 border-slate-800 p-5 md:p-16 md:w-[60vw] "
                        style={{
                            background:
                                "linear-gradient(135deg, rgba(20, 60, 90, 0.85) 0%, rgba(10, 25, 47, 0.85) 100%)",
                            color: "#FF6F61",
                        }}
                        key={item.name}>
                        <blockquote>
                            <div
                                aria-hidden="true"
                                className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"></div>
                            <span className="relative z-20 text-sm md:text-lg leading-[1.6] font-normal text-white dark:text-gray-100">
                                {item.quote}
                            </span>
                            <div className="relative z-20 mt-6 flex flex-row items-center">
                                <span className="flex flex-col gap-1">
                                    <div className="me-3 ">
                                        <Image
                                        
                                            src={item.img}
                                            alt={item.name}
                                            width={50}
                                            height={50}
                                            className="rounded-full object-cover"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <span className="text-sm leading-[1.6] font-bold text-white">
                                            {item.name}
                                        </span>
                                        <span className="text-sm leading-[1.6] font-normal text-white-200">
                                            {item.title}
                                        </span>
                                    </div>
                                </span>
                            </div>
                        </blockquote>
                    </li>
                ))}
            </ul>
        </div>
    );
};
