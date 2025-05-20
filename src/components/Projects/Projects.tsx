"use client"
import React, {useEffect, useState} from "react";
import {File, Link} from "lucide-react";
import {motion} from "framer-motion";
import DecryptedText from "@/components/ui/DecryptedText/DecryptedText";
// AI/ML Projects
const AIProjects = [
    {
        title: "Music Recommendation System",
        description:
            "A recommender-based filter suggesting personalized items by analyzing user data, enhancing discovery through predictive, adaptive recommendations.",
        readMore: "https://github.com/EgonLh/Music-Recommendation-Project",
        date: "May 22, 2024",
        icon:"🛍️"
    },
    {
        icon : "📼",
        title: "SoundScape WebApplication",
        description:
            "Combines OCR and AI chatbot using TS, Redux, Next.js, and Express to deliver real-time, intelligent text recognition and interaction.",
        readMore: "https://github.com/EgonLh/soundScape-web-app",
        date: "March 5, 2024",
    },
]

// Dev (Software Development) Projects
const DevProjects = [
    {
        icon : "💿",
        title: "SoundScape",
        description:
            "REST API powering the full-stack SoundScape app, enabling seamless data communication between frontend and backend with scalable endpoints.",
        tag: ["JavaScript", "Express.js", "JWT"],
        readMore: "https://github.com/EgonLh/soundScape",
        date: "May 1, 2024",
    },
    {
        icon : "🎒",
        title: "API for Learning Management System (LMS)",
        description:
            "RESTful API built with Node.js and Express.js, integrated with MongoDB Atlas and deployed on Vercel for scalable backend services.",
        tag: ["JavaScript", "Express.js", "JWT"],
        readMore: "https://github.com/EgonLh/soundScape",
        date: "April 15, 2024",
    },
]

// Academic Projects
const AcademicProjects = [
    {
        icon:"🎥",
        title: "Movie Record System",
        description:
            "A movie record system with CRUD features, refactoring, file handling, structured design patterns, and best practice implementation.",
        readMore: "https://github.com/EgonLh/MovieRecordSystem",
        date: "May 5, 2024",
    },
    {
        icon:"💳",
        title: "PayKey",
        description:
            "My first website built with Bootstrap, JavaScript, and PHP, incorporating essential safety measures for basic security.",
        readMore: "https://github.com/EgonLh/PayKey-Billing-Website",
        date: "April 12, 2024",
    },
]
const LearningLog = [
    {
        icon:"👨🏻‍💻",
        title: "DevJourney",
        description:
            "A deep dive into JavaScript and its ecosystem — exploring Next.js, React, Express, and TypeScript to build powerful, modern web applications.",
        date: "May 5, 2024",
        readMore: "https://github.com/EgonLh/SWEJourney",
    },
    {
        icon:"🏁",
        title: "Grinding LeetCode",
        description:
            "A dedicated 30-day coding challenge tackling algorithms and data structures on Codewars and LeetCode — sharpening problem-solving skills daily.",
        date: "April 12, 2024",
        readMore: "https://github.com/EgonLh/grinding-Leetcode-and-Codewar",
    },
]
export default function Projects(){
    return (<motion.div initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, ease: 'easeInOut'}} className={" my-28 md:px-3 "}>
        <div className=" my-10">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-400 tracking-tight mb-2 flex">
                <div className="relative w-10 h-10 me-3 group ">
                    <span className="absolute inset-0 rounded-full group-hover:border bg-emerald-400/[0.1] opacity-90 animate-ping group-hover:animate-none"/>
                    <span className="relative text-3xl flex items-center justify-center h-full w-full">🧠</span>
                </div><DecryptedText text="What I’ve Crafted." speed={100}
                                                  maxIterations={20}
                                                  characters="ABCD1234!?"
                                                  className="revealed hover:text-blue-500 transition-all duration-300"
                                                  parentClassName="all-letters"
                                                  encryptedClassName="encrypted"/>
            </h2>

            <p className=" dark:text-gray-200 text-gray-500 mb-4">
                Built with purpose, driven by passion — here's where theory met practice!
            </p>

            <p className="text-sm md:text-base text-gray-400 text-justify indent-9 leading-relaxed">
                A glimpse into the real-world problems I’ve tackled, blending creativity, technical depth, and relentless curiosity.
                Each project here reflects a unique challenge I embraced — from architecture to deployment. Whether it was crafting clean UI/UX, optimizing backend performance, or integrating machine learning models, I focused on building solutions that are not just functional but thoughtfully engineered.
                I handled everything from planning and development to testing and deployment, ensuring each project reflects both technical precision and my personal growth as an engineer.
            </p>
        </div>

        <ProjectsPanel/>
    </motion.div>)
}

const ProjectsPanel = () => {
    const [skills, setSkill] = useState('all');
    const [pjs, setPjs] = useState([...AIProjects, ...AcademicProjects, ...DevProjects]);

    const getProjectsBySkill = (skill) =>
        skill === 'AI/ML' ? AIProjects :
            skill === 'Development' ? DevProjects :
                skill === 'Academic' ? AcademicProjects :
                    skill == 'Logs' ?  LearningLog:
                    [...AIProjects, ...AcademicProjects, ...DevProjects];

    useEffect(() => {
        setPjs(getProjectsBySkill(skills));
    }, [skills]);

    const filterable = (value) => {
        setSkill(value);
    };

    return (
        <motion.div initial={{opacity: 0, y: 20}}
             animate={{opacity: 1, y: 0}}
             transition={{duration: 0.8, ease: 'easeInOut'}} className={"my-28  py-3 rounded  "}>

            <div className={"flex justify-center  "} id={"category"}>
                <div className={"flex justify-center hover:border hover:my-2 overflow-hidden transition-all duration-300 rounded w-fit  "}>
                    <button onClick={() => filterable("AI/ML")} className={"border-e-[1px] text-xs font-semibold font-mono text-gray-500 hover:text-gray-900  md:px-5 px-2 hover:bg-gray-300/[0.4] py-2 transition-all duration-300  "}>AI/ML</button>
                    <button onClick={() => filterable("Development")} className={"border-e-[1px] text-xs font-semibold font-mono text-gray-500 hover:text-gray-900  md:px-5 px-2 py-2 hover:bg-gray-300/[0.4] transition-all duration-300  "}>Development</button>
                    <button onClick={() => filterable("Academic")} className={"border-e-[1px] text-xs font-semibold font-mono text-gray-500 hover:text-gray-900  md:px-5 px-2 py-2 hover:bg-gray-300/[0.4] transition-all duration-300  "}>Academic</button>
                    <button onClick={() => filterable("Logs")} className={"border-e-[1px] text-xs font-semibold font-mono text-gray-500 hover:text-gray-900  md:px-5 px-2 py-2 hover:bg-gray-300/[0.4] transition-all duration-300  "}>LearningLogs</button>
                    <button onClick={() => filterable("all")} className={" px-5 py-2 text-xs font-semibold font-mono text-gray-500 hover:text-gray-900  hover:bg-gray-300/[0.4] transition-all duration-300  "}>🧩</button>
                </div>
            </div>
            <div className={"grid lg:grid-cols-3 mb-12 md:grid-cols-2 grid-col-1 "}>
                {pjs.map((project, index) => (
                    <div key={index} className={"p-1 transition-all duration-300"}><ProjectCard data={project}/></div>
                ))}
            </div>
        </motion.div>
    );
};

const ProjectCard = ({data}) =>{
    return (<motion.div
                 initial={{opacity: 0, y: 0}}
                 animate={{opacity: 1, y: 10}}
                 transition={{ duration: 1, ease: "easeOut" }} className={"my-4 p-3 hover:dark:bg-slate-100/[0.1] hover:bg-gray-100/[0.5]  min-h-[200px] flex flex-col justify-between  transition-all duration-300 rounded"}>
        <div className={"text-2xl w-fit rounded-lg bg-black/[0.1] dark:bg-white/[0.1] p-1"}>
            {data.icon}
        </div>
        <div className={"font-semibold font-mono text-gray-500 dark:text-gray-200  hover:text-black hover:dark:text-white transition-all duration-300"}>
            {data.title}
        </div>
        <div className={"text-xs text-gray-500 dark:text-gray-400 my-3  text-justify    "}>
            {data.description}
        </div>
        <div className={"flex"}>
            <Link className={"size-4"}/> <a className={"text-blue-900 dark:text-blue-300 font-bold text-xs ms-3"} href={data.readMore}>Check Project</a>
        </div>
    </motion.div>)
}