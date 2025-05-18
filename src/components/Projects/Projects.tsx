"use client"
import {useEffect, useState} from "react";
import {File, Link} from "lucide-react";
import {motion} from "framer-motion";
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
            "Deep Learning projects predicting stock prices using LSTM models, with visualization dashboards built in Streamlit.",
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
export default function Projects(){
    return (<div className={" my-9 p-2 "}>
        <div className={"text-4xl"}>Things I’ve made trying to put my dent in the universe.</div>
        <div className={"text-xs my-3"}>I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. <br/>Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.</div>
        <ProjectsPanel/>
    </div>)
}

const ProjectsPanel = () => {
    const [skills, setSkill] = useState('all');
    const [pjs, setPjs] = useState([...AIProjects, ...AcademicProjects, ...DevProjects]);

    useEffect(() => {
        if (skills === 'AI/ML') {
            setPjs(AIProjects);
        } else if (skills === 'Development') {
            setPjs(DevProjects);
        } else if (skills === 'Academic') {
            setPjs(AcademicProjects);
        } else {
            setPjs([...AIProjects, ...AcademicProjects, ...DevProjects]); // default case
        }
    }, [skills]); // runs this effect whenever `skills` changes

    const filterable = (value) => {
        setSkill(value);
    };

    return (
        <div>
            <div className={"flex justify-center my-9"}>
                <button onClick={() => filterable("AI/ML")} className={"border-e-2 px-2 hover:bg-black transition-all duration-300 hover:text-white hover:rounded"}>AI/ML</button>
                <button onClick={() => filterable("Development")} className={"border-e-2 px-2 hover:bg-black transition-all duration-300 hover:text-white hover:rounded"}>Development</button>
                <button onClick={() => filterable("Academic")} className={"border-e-2 px-2 hover:bg-black transition-all duration-300 hover:text-white hover:rounded"}>Academic</button>
                <button onClick={() => filterable("all")} className={" px-2 hover:bg-black transition-all duration-300 hover:text-white hover:rounded"}>All</button>
            </div>
            <div className={"grid grid-cols-3 "}>
                {pjs.map((project, index) => (
                    <div key={index} className={"p-1 transition-all duration-300"}><ProjectCard data={project}/></div>
                ))}
            </div>
        </div>
    );
};

const ProjectCard = ({data}) =>{
    return (<motion.div
                 initial={{opacity: 0, y: 0}}
                 animate={{opacity: 1, y: 10}}
                 transition={{ duration: 1, ease: "easeOut" }} className={" p-2 hover:bg-slate-100  min-h-[200px] flex flex-col justify-between  transition-all duration-300 rounded"}>
        <div><File className={"size-8 fill-white text-black rounded bg-black my-3"}/></div>
        <div className={"font-semibold font-mono text-gray-300 hover:text-black transition-all duration-300"}>
            {data.title}
        </div>
        <div className={"text-xs text-mute my-3  text-balance   "}>
            {data.description}
        </div>
        <div className={"flex"}>
            <Link className={"size-4"}/> <a className={"text-blue-900 text-xs ms-3"} href={data.readMore}>Check Project</a>
        </div>
    </motion.div>)
}