"use client"

import React from "react";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {motion} from "framer-motion";

export default function EducationShowCase(){
    return (<div className={"my-24 w-full"}>
        <div className="mt-6 mb-12">
            <motion.div initial={{opacity: 0, y: 20}}
                           animate={{opacity: 1, y: 0}}
                           transition={{duration: 0.8, ease: 'easeInOut'}}
                           className="text-lg  flex items-center gap-2">
                🧑🏻‍🎓 <span>Journey Driven by Curiosity, Resilience & Growth</span>
            </motion.div>
            <motion.div initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, ease: 'easeInOut'}} className="text-4xl font-bold text-emerald-500 hover:text-emerald-700 transition-colors duration-300 text-balance">
                Academic & Professional Learning Journey
            </motion.div>

            <motion.div  initial={{opacity: 0, y: 20}}
                  animate={{opacity: 1, y: 0}}
                  transition={{duration: 0.8, ease: 'easeInOut'}} className="text-sm leading-relaxed dark:text-gray-300 text-base/8 text-justify">
                I earned my HNC and HND in Software Engineering, diving into databases, networking, and software development.<br/>
                My journey continued with a BSc in Computing from the University of Greenwich—strengthening my problem-solving mindset and building technical confidence.
            </motion.div>
        </div>

        {/*Tool tips*/}
        <div className={"w-full w-5/6 text-end my-2 "}>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger><div className={"border rounded hover:bg-gray-100  transition-all duration-300 hover:dark:bg-gray-800"}>💭</div></TooltipTrigger>
                    <TooltipContent>
                        <p>Key Moments that Shaped My journey</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>

        {/*Main content*/}
        <motion.div initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, ease: 'easeInOut'}}
                    className="relative border mb-9 flex justify-center flex-col items-center overflow-hidden">
            {/* Dotted Background */}
            <div className="absolute inset-0
    bg-[radial-gradient(#c6c6cd_1.5px,transparent_1px)] bg-[size:20px_20px]
    dark:bg-[radial-gradient(#565454_1px,transparent_1px)] dark:bg-[size:20px_20px]
    opacity-40 pointer-events-none z-0" />

            {/* Content */}
            <div className="md:w-5/6 w-full relative  z-10">
                <VerticalTimeline />
            </div>
        </motion.div>

    </div>)
}


const VerticalTimeline = () => {
    const educationJourney = [
        {
            date: "May 2022",
            subtitle: "The foundation",
            title: "Higher National Certification",
            icon: "🗃️",
            learningStyle: "blended",
            description:
                "Completed foundational coursework in Software Engineering, covering programming principles, software design patterns, and basic projects management. Gained hands-on experience with languages such as Java and Python, and developed problem-solving skills through practical assignments.",
        },
        {
            date: "June 2023",
            subtitle: "The advancement",
            title: "Higher National Diploma",
            icon: "🎓",
            learningStyle: "blended",
            description:
                "Advanced studies in Software Engineering, including data structures, algorithms, and database management. Engaged in collaborative projects emphasizing version control, Agile methodologies, and software testing to build real-world applications.",
        },
        {
            date: "September 2024",
            subtitle: "The specialization",
            title: "Bachelor of Science (Hons)",
            icon: "🎓",
            learningStyle: "blended",
            description:
                "Specialized in Software Engineering at the University of Greenwich, focusing on systems architecture, cloud computing, and AI integration. Completed a capstone projects involving machine learning pipelines and deployed scalable applications.",
        },
        {
            date: "October 2024",
            subtitle: "The intensive",
            title: "ZoomCamp",
            icon: "⚗️",
            learningStyle: "online",
            description:
                "Intensive hands-on program focused on practical Machine Learning, MLOps, and data engineering skills. Covered end-to-end ML lifecycle, including model training, deployment, monitoring, and cloud infrastructure automation.",
        },
    ]

    return (
        <div className=" mx-auto py-6 ps-6 md:pe-0 pe-6 relative " id={"journey"}>

            {/* Continuous vertical line */}
            <div className="hidden md:absolute md:block   left-[0px] top-0 bottom-0 w-[2px]  border bg-black border-gray-600  border-t-3 hover:border-dashed  " />

            {educationJourney.map((item, index) => (
                <motion.div initial={{opacity: 0, y: 20}}
                     animate={{opacity: 1, y: 0}}
                     transition={{duration: 0.8, ease: 'easeInOut'}} key={index} className="flex mb-12 relative md:flex-row flex-col  items-start justify-between ">

                    {/* Date pill */}
                    <div className="lg:min-w-[300px] md:min-w-[200px] w-fit me-9 flex flex-col items-center">
                        <div className="  text-green-800 w-fit text-xs font-medium md:px-3 hover:px-3  py-1 rounded-md inline-block hover:bg-black transition-all duration-300 hover:text-white text-center align-middle">
                            {item.date}
                        </div>
                    </div>

                    {/* Timeline dot */}
                    <div className="hidden md:absolute md:block left-[-22px]  hover:border   bg-background  border rounded-full hover:rounded hover:p-1 transition-all duration-300   -translate-x-1/2 z-10">
                        <div className={"text-xl p-1"}>{item.icon}</div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-1 border p-3 rounded text-gray-400 hover:my-3 shadow-sm hover:shadow-none  bg-background transition-all duration-500">
                        <h3 className="font-bold mb-2">{item.title}</h3>
                        <div className={"text-xs  border-l-4 ps-2 my-2"}>{item.learningStyle?.toUpperCase()}</div>
                        <p className="text-gray-600 leading-relaxed text-sm text-justify">{item.description}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    )
}

