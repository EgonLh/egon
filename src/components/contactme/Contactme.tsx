"use client"
import {motion} from "framer-motion";
import React, {useState} from "react";
import {HoverCard, HoverCardContent, HoverCardTrigger} from "@/components/ui/hover-card";
import ContactForm from "@/components/ui/EmailSender";

export default  function ContactMe(){

    return (<motion.div initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                       className={"border w-full rounded my-40 "}>
        <DotGridContactFrom/>
    </motion.div>)
}

const DotGridContactFrom = () => {
    const [bgOffset, setBgOffset] = useState({ x: 0, y: 0 });
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        const factor = 10;
        setBgOffset({ x: -x * factor, y: -y * factor });
    };

    const handleMouseLeave = () => {
        setBgOffset({ x: 0, y: 0 });
    };
    return (
        <div
            className="relative w-full  overflow-hidden flex justify-center items-center h-80"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/*--dot-background--*/}
            <div
                className="absolute inset-0
          pointer-events-none opacity-40 transition-all duration-200
          bg-[radial-gradient(#a1a1aa_1.5px,transparent_0.5px)]
          bg-[size:20px_20px]
          dark:bg-[radial-gradient(#52525b_1px,transparent_1px)]
          dark:bg-[size:20px_20px]"
                style={{
                    backgroundPosition: `${bgOffset.x}px ${bgOffset.y}px`,
                }}
            />

            {/*contact form*/}
            <div className="z-10 relative p-2 border rounded w-full max-w-[500px] min-w-[300px] bg-background flex m-5  flex-col justify-center ">
                <div className={" "}><HoverCard>
                    <div className={"flex"}><HoverCardTrigger>📬</HoverCardTrigger> <p className={"hover:underline transition-all duration-300 hover:ps-3"}>Reach Out</p></div>
                    <HoverCardContent>
                        Feel free to share your email — I’ll be in touch shortly.
                    </HoverCardContent>
                </HoverCard></div>
                <div className={"flex justify-center my-3"}>
                    <p className="text-muted-foreground text-justify text-xs hover:ms-2 transition-all duration-300">
                        Feel free to send me your email if you'd like to connect or have any questions. I'll make sure to get back to you as soon as possible.👀
                    </p>
                </div>
                <div>
                    <ContactForm/>
                </div>
            </div>
        </div>
    );
};
