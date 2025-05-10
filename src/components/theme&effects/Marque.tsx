"use client"

import {motion} from "framer-motion";

export default function ScrollMarqueeCenter() {
    return (<motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
            duration: 0.8,
            ease: "easeOut"
        }}
        viewport={{ once: true }}
    >
        <div className="relative w-full overflow-hidden  h-32 my-4">
            <div className="marquee-wrapper w-full h-full flex items-center justify-start overflow-hidden">
                <div className="marquee-container whitespace-nowrap">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="flex items-center marquee-content">
                            <span className="text-3xl hover:mx-8  transition-all duration-300 mx-4">Computer Science Enthusiast</span>
                            <div className="w-48 border-t-4 border-dashed border-gray-600/[0.5] mx-4"> </div>
                            <span className="text-3xl  hover:mx-8 transition-all duration-300 mx-4">AI / ML Engineer</span>
                            <div className="w-48 border-t-4 border-dashed border-gray-600/[0.5] mx-4"> </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </motion.div>
    )
}
