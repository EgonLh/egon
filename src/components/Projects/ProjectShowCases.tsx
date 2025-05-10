"use client"
import {useEffect, useState} from "react";
import {ChevronRight, CircleAlert} from "lucide-react";
import Link from "next/link";
import {motion} from "framer-motion";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
export default function ProjectShowCase() {
    const [topic, setTopic] = useState("all");
    const [projects, setProjects] = useState(AIProjects);
    const topics = [
        {title: "Development", value: "Dev"},
        {title: "AI/ML", value: "AI-ML"},
        {title: "Academic", value: "Academic"},
        {title: "Contributing", value: "Contributing"}
    ]

    const handleFilter = (value: string) => {
        setTopic(value);
    }
    useEffect(() => {
        if (topic === "AI-ML") {
            setProjects(AIProjects);
        } else if (topic === "Dev") {
            setProjects(DevProjects);
        } else if (topic === "Academic") {
            setProjects(AcademicProjects);
        } else if (topic === "Contributing") {
            setProjects(Contribution);
        } else {
            setProjects([...AIProjects]);
        }
    }, [topic]);

    return (<div>
        <div className={"grid gap-20  grid-cols-1 lg:grid-cols-3  my-3 min-h-80 "}>
            <div className={"   flex flex-col lg:justify-start justify-center "}>
                <div className="p-3">
                    <div className="text-3xl mb-3">Projects</div>
                    Things I’ve made trying to put my dent in the universe.

                    <div className="relative">
                        <motion.p
                            initial={{ opacity: 0, y: 10 }} // start faded and a little lower
                            animate={{ opacity: 1, y: 0 }}  // fade in + move up to natural position
                            transition={{ duration: 0.8, ease: "easeOut" }} // smooth and gentle
                        >
                            {topic.toUpperCase()}
                        </motion.p>
                    </div>
                </div>

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
                                    className={`w-px h-8 border border-t-4 border-gray-600  ${topic == item.value ? "" : "border-dashed"}`}></div>
                            )}
                            <button
                                className={`hover:bg-zinc-100/[0.5] k animate-float  transition-all   w-2/4 p-2 rounded  ${topic == item.value ? "bg-zinc-200/[0.5] border my-3 " : "bg-transparent"}`}
                                onClick={() => {
                                    handleFilter(item.value)
                                }}>{item.title}</button>
                        </div>)
                    )}
                </div>
            </div>
            <div className={"col-span-2 flex  justify-between flex-col items-end "}>
                {projects.map((project, idx) => (<ProjectShowCaseItem key={project.title + idx} data={project}/>))}
            </div>

        </div>
        <div className={"text-xs text-blue-300"}><Link href={"#"} className={"flex justify-end items-center "}>See Detail <ChevronRight
            className={"size-3 ms-1 hover:ms-3 transition-all duration-300"}/></Link></div>
    </div>)
}

const ProjectShowCaseItem = ({data}) => {
    return (

        <motion.div
            initial={{opacity: 0, y: 0}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1}}
            className={" border rounded w-75 mb-4 ms-8 w-full p-5 text-gray-400 hover:dark:bg-gray-800/[0.5] hover:bg-gray-100/[0.5] transition-all duration-500"}>
            <div className={" border-l-4  ps-3"}>{data.date}</div>
            <div className={"text-lg font-bold my-3 text-black dark:text-white"}>{data.title}</div>
            <div className={"text-justify"}>
                {data.description}
            </div>
            <div className={"flex"}>{
                (data.tag).map(tech => (<div
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
        title: "AI Project 1",
        description:
            "Complete AI suite: pre-built modules, UI kits, SDKs, and APIs bringing top social media features to your app for effortless ecosystem building.",
        tag: ["Python", "Pandas"],
        readMore: "https://github.com/microsoft/api-guidelines",
        date: "May 22, 2024",
    },
    {
        title: "AI Project 3",
        description:
            "Deep Learning project predicting stock prices using LSTM models, with visualization dashboards built in Streamlit.",
        tag: ["Deep Learning", "LSTM", "Finance AI", "Streamlit"],
        readMore: "https://github.com/streamlit/streamlit",
        date: "March 5, 2024",
    },
]

// Dev (Software Development) Projects
const DevProjects = [
    {
        title: "Dev Project 1",
        description:
            "Full-stack e-commerce website built with Next.js, Stripe integration, and TailwindCSS. Optimized for mobile and SEO.",
        tag: ["Next.js", "Stripe", "TailwindCSS", "Fullstack"],
        readMore: "https://github.com/vercel/next.js",
        date: "May 1, 2024",
    },
    {
        title: "Dev Project 2",
        description:
            "Real-time collaborative Markdown editor using WebSockets and Node.js backend, built for study groups.",
        tag: ["Node.js", "WebSocket", "Markdown", "Real-time"],
        readMore: "https://socket.io/",
        date: "April 15, 2024",
    },
]

// Academic Projects
const AcademicProjects = [
    {
        title: "Academic Project 1",
        description:
            "Research on applying federated learning to healthcare datasets to preserve patient privacy while training global AI models.",
        tag: ["Federated Learning", "Privacy", "Research Paper", "Healthcare AI"],
        readMore: "https://en.wikipedia.org/wiki/Federated_learning",
        date: "May 5, 2024",
    },
    {
        title: "Academic Project 2",
        description:
            "A survey and critical analysis of modern cryptographic protocols used in secure messaging apps like Signal and WhatsApp.",
        tag: ["Cryptography", "Secure Messaging", "Research Survey"],
        readMore: "https://signal.org/",
        date: "April 12, 2024",
    },
]

const Contribution = [
    {
        title: "Contributing Project 1",
        description:
            "Full-stack e-commerce website built with Next.js, Stripe integration, and TailwindCSS. Optimized for mobile and SEO.",
        tag: ["Next.js", "Stripe", "TailwindCSS", "Fullstack"],
        readMore: "https://github.com/vercel/next.js",
        date: "May 1, 2024",
    },
    {
        title: "Contributing Project 2",
        description:
            "Real-time collaborative Markdown editor using WebSockets and Node.js backend, built for study groups.",
        tag: ["Node.js", "WebSocket", "Markdown", "Real-time"],
        readMore: "https://socket.io/",
        date: "April 15, 2024",
    },

]
