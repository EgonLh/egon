'use client';

import React, { useState } from 'react';
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import ContactForm from "@/components/ui/EmailSender";
const DotGridBackground = () => {
    const [bgOffset, setBgOffset] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5; // -0.5 to 0.5
        const y = (e.clientY - top) / height - 0.5;

        // Invert the direction (move away from mouse)
        const factor = 10; // tweak this for more/less intensity
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
            ></div>

            <div className="z-10 relative p-2 border rounded w-1/2 max-w-[500px] min-w-[500px] bg-white flex m-5  flex-col justify-center ">
                <div className={" "}><HoverCard>
                    <div className={"flex"}><HoverCardTrigger>📬</HoverCardTrigger> <p className={"hover:underline transition-all duration-300 hover:ps-3"}>Contact Me</p></div>
                    <HoverCardContent>
                        The React Framework – created and maintained by @vercel. 🧑
                    </HoverCardContent>
                </HoverCard></div>
                <div className={"flex justify-center my-3"}>
                    <p className="text-muted-foreground text-justify text-xs hover:ms-2 transition-all duration-300">
                        Get notified when I publish something new, and unsubscribe at any time. Get notified when I publish something new, and unsubscribe at any time.
                    </p>
                </div>
                <div>
                    <ContactForm/>
                </div>
            </div>
        </div>
    );
};

export default DotGridBackground;
