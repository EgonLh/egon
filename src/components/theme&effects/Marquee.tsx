"use client"
import {motion} from "framer-motion";
import React from "react";
import DecryptedText from "@/components/ui/DecryptedText/DecryptedText";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {MessageSquareText} from "lucide-react";

const topics = ["CS", "AI", "ML"];
export default function TopicMarquee() {
    return (<motion.div
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{
                duration: 0.8,
                ease: "easeOut"
            }}
            viewport={{once: true}}
        >
            <div className="relative w-full overflow-hidden   h-32 my-24">
                <div className="absolute top-1 right-1 text-xs font-semibold text-gray-800 dark:text-gray-200 z-10">
                    <TooltipProvider delayDuration={300} skipDelayDuration={100}>
                        <Tooltip>
                            <TooltipTrigger>
                                <MessageSquareText className="size-4 text-black/[0.4]" />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Areas of Interest</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
                <div
                    className="marquee-wrapper w-full h-full flex items-center border rounded justify-start overflow-hidden">
                    {/*---dotted background---*/}
                    <div className="absolute inset-0 bg-[radial-gradient(#c6c6cd_1.5px,transparent_1px)] bg-[size:20px_20px]
                            dark:bg-[radial-gradient(#565454_1px,transparent_1px)] dark:bg-[size:20px_20px]
                            opacity-40 pointer-events-none z-0"/>

                    {/*---marquee container---*/}
                    <div className="marquee-container whitespace-nowrap">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="flex items-center marquee-content">
                                {topics.map((topic, j) => (
                                    <React.Fragment key={`${i}-${j}`}>
                                <span className="text-3xl hover:mx-8 transition-all duration-300 mx-4">
                                    <DecryptedText
                                        text={` ${topic} `}
                                        speed={100}
                                        maxIterations={20}
                                        characters="ABCD1234!?"
                                        className="revealed hover:text-blue-500 transition-all duration-300"
                                        parentClassName="all-letters"
                                        encryptedClassName="encrypted"
                                    />
                                </span>
                                        <div className="w-48 border-t-4 border-dashed border-gray-600/[0.5] mx-4"></div>
                                    </React.Fragment>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
