"use client"
import {useState} from "react";
import {ChevronRight, CircleAlert} from "lucide-react";
import Link from "next/link";
import {motion} from "framer-motion";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

export default function ProjectShowCase() {
    const [topic, setTopic] = useState("AI");
    const [projects, setProjects] = useState(AIProjects);

    //--topics for project--//
    const topics = [
        {title: "Development", value: "Dev"},
        {title: "AI/ML", value: "AI-ML"},
        {title: "Academic", value: "Academic"},
        {title: "LearningLogs", value: "LearningLog"}
    ]

    // -- handle changes projects -- //
    const handleTopicChange = (newTopic: string) => {
        setTopic(newTopic); // if you store topic in state
        setProjects(getProjectsByTopic(newTopic));
    };

    // -- get projects -- //
    const getProjectsByTopic = (topic: string) => {
        const topicMap: Record<string, any[]> = {
            "AI-ML": AIProjects,
            "Dev": DevProjects,
            "Academic": AcademicProjects,
            "LearningLog": LearningLog,
        };
        return topicMap[topic] || AIProjects;
    };

    return (<div className={"mt-40"}>
        <div className={"grid xl:gap-20 lg:gap-10   grid-cols-1 lg:grid-cols-3  my-3 min-h-80 "}>
            <div className={"   flex flex-col lg:justify-start justify-center "}>
                {/*--- Topic ---*/}
                <div className=" w-full text-justify">
                    <div className="text-2xl text-gray-600 font-black hover:dark:text-gray-100 hover:text-black transition-all duration-300 mb-3 bg-s">🥤 Projects</div>
                    <p className={"text-justify text-gray-600 dark:text-gray-400  hover:text-gray-800"}>A selection of projects I've built in pursuit of innovation and impact — my way of contributing to the world through technology.  Featured projects under the {topic} category.</p>
                </div>

                {/*--- Projects Filters ---*/}
                <div className={" p-3 m-2 mb-4 rounded border  relative overflow-hidden "}>
                    <div className="absolute inset-0
                            bg-[radial-gradient(#a1a1aa_1.5px,transparent_0.5px)] bg-[size:20px_20px]
                            dark:bg-[radial-gradient(#52525b_1px,transparent_1px)] dark:bg-[size:20px_20px]
                        opacity-40 pointer-events-none">
                    </div>
                    <div>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger><CircleAlert className={"size-5"}/></TooltipTrigger>
                                <TooltipContent>
                                    <p>Click To See The Related Projects</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>

                    {topics.map((item, index) =>
                        (<div className={" flex justify-center flex-col items-center  transition-all duration-300"}>
                            {index !== 0 && (
                                <div
    className={`w-px h-8 border border-t-4 border-gray-600  ${topic == item.value ? "" : "border-dashed"}`}/>
                            )}
                            <button
                                className={`hover:bg-zinc-100/[0.5] k animate-float  transition-all   w-2/4 p-2 rounded  ${topic == item.value ? "bg-zinc-200/[0.5] border my-3 " : "bg-transparent"}`}
                                onClick={() => {
                                    handleTopicChange(item.value)
                                }}>{item.title}</button>
                        </div>)
                    )}
                </div>
            </div>
            <div className={"col-span-2 flex  justify-between flex-col items-end "}>
                {/*---projects filters---*/}
                {projects.map((project, idx) => (<ProjectShowCaseItem key={project.title + idx} data={project}/>))}
            </div>
        </div>
        {/*---see more ---*/}
        <div className={"text-xs text-blue-300"}>
            <Link href={"/projects"} className={"flex justify-end items-center "}>See Detail
                <ChevronRight className={"size-3 ms-1 hover:ms-3 transition-all duration-300"}/>
            </Link>
        </div>
    </div>)
}

const ProjectShowCaseItem = ({data}) => {
    return (
        <motion.div
            initial={{opacity: 0, y: 0}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1}}
            className={" border rounded w-75 mb-4 ms-8  w-full p-5 text-gray-400 hover:dark:bg-gray-800/[0.5] hover:bg-gray-100/[0.5] transition-all duration-500"}>
            {/*---date---*/}
            <div className={" border-l-4  ps-3"}>{data.date}</div>
            {/*---title---*/}
            <div className={"text-lg font-bold my-3 text-black dark:text-white"}>{data.title}</div>
            {/*---info---*/}
            <div className={"text-justify"}>
                {data.description}
            </div>
            <div className={"flex truncate "}>{
                (data?.tag)?.map(tech => (<div
                    className={"border hover:mx-3 transition-all duration-300 text-xs font-mono me-3 px-2 my-2 rounded"}>
                    {tech}
                </div>))
            }</div>
            <div className={"mt-3"}>
                <Link href={data.readMore} className={"flex items-center text-xs hover:text-blue-500 transition-all duration-300"}>See More <ChevronRight
                    className={"size-4 ms-3"}/></Link>
            </div>
        </motion.div>)
}

// AI/ML Projects
const AIProjects = [
    {
        title: "Music Recommendation System",
        description:
            "A recommender-based filter suggesting personalized items by analyzing user data, enhancing discovery through predictive, adaptive recommendations.",
        readMore: "https://github.com/EgonLh/Music-Recommendation-Project",
        date: "May 22, 2024",
        icon:"🛍️",
        tag:["Python","Jupyter Notebook","Pandas"]
    },
    {
        icon : "📼",
        title: "SoundScape WebApplication",
        description:
            "Combines OCR and AI chatbot using TS, Redux, Next.js, and Express to deliver real-time, intelligent text recognition and interaction.",
        readMore: "https://github.com/EgonLh/soundScape-web-app",
        date: "March 5, 2024",
        tag:["Typescript","Next.js","React.Js","Python","Tensorflow.py"]
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
        readMore: "https://github.com/EgonLh/dummyApi",
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
        tag:["Design Pattern","Clean Codes","Java"]
    },
    {
        icon:"💳",
        title: "PayKey",
        description:
            "My first website built with Bootstrap, JavaScript, and PHP, incorporating essential safety measures for basic security.",
        tag: ["Cryptography", "MySQL", "PHP"],
        date: "April 12, 2024",
        readMore: "https://github.com/EgonLh/PayKey-Billing-Website",

    },
]

// Learning Logs (Milestones for me)
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
        tag:["Algorithm","Data Structure","JavaScript"],
        readMore: "https://github.com/EgonLh/grinding-Leetcode-and-Codewar",
    },

]
