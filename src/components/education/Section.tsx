"use client"
import { motion } from "framer-motion";
import {GraduationCap, GraduationCapIcon , LaptopIcon, NotebookIcon, CodeIcon} from "lucide-react";
import {FileIcon} from "lucide-react";

const educationJourney = [
    {
        title: "Higher National Certification",
        description: "Software Engineering",
        date: "2022 — 2023",
        icon: FileIcon,
    },
    {
        title: "Higher National Diploma",
        description: "Software Engineering",
        date: "2023 — 2024",
        icon: GraduationCap,
    },
    {
        title: "Bachelor of Science (Hons)",
        description: "Software Engineering - University of Greenwich",
        date: "2024 — 2025",
        icon: GraduationCapIcon,
    },
    {
        title: "ZoomCamp",
        description: "Machine Learning",
        date: "2024 — ",
        icon: FileIcon,
    },
];
const workstations = [
    {
        title: "Asus Vivobook 15",
        description: "My daily driver laptop for everything 💻",
        date: "2022 — Present",
        icon: LaptopIcon,
        topic: "Development",
    },
    {
        title: "Notion",
        description: "Second brain — notes, task manager, planning 🧠",
        date: "2022 — Present",
        icon: NotebookIcon,
        topic: "Productivity",
    },
    {
        title: "WebStorm",
        description: "Professional IDE for serious TypeScript projects ⚡",
        date: "2023 — Present",
        icon: CodeIcon,
        topic: "Development",
    },
    {
        title: "Visual Studio Code",
        description: "Lightweight and versatile editor for quick work ⚡",
        date: "2021 — Present",
        icon: CodeIcon,
        topic: "Development",
    },
];
export default function Section(){
    return(<motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
            duration: 0.8,
            ease: "easeOut"
        }}
        viewport={{ once: true }}
    >
       <div className={"flex grid grid-cols-1 lg:grid-cols-2 gap-20 my-8"}>
           <div className={""}>
               <div className={"  p-3 rounded-lg"}>
                   <div className={"flex items-center"}><GraduationCap className={"size-7  text-gray-300"}/> <p className={"font-semibold ms-3 text-gray-300 hover:dark:text-white hover:text-black transition-all duration-300"}>Workstation</p></div>
                   <div className={"text-xs my-4"}>Workstations That I used</div>
                   <div className={"border-s-2"}>
                       {workstations.map((milestone,index) => (
                           <div key={milestone.title+index} className={"flex justify-between mb-5 p-3 hover:ms-3 border-white-300 rounded transition-all duration-200 "}>
                               <div className={"flex items-center"}>
                                   <div className={"text-xl border rounded w-fit p-1"}><milestone.icon className={"size-8 font-bold  "}/></div>
                                   <div className={"ms-3"}>{milestone.title}<br/><p className={"text-xs"}>{milestone.description}</p></div>
                               </div>
                               <div className={"text-xs text-gray-400"}>{milestone.date}</div>
                           </div>
                       ))}
                   </div>
                   <div className={"text-right text-xs hover:text-blue-300 text-blue-200 transition-all duration-300"}>See Detail</div>
               </div>
           </div>

           <div className={""}>
                <div className={" border p-3 rounded-lg"}>
                    <div className={"flex items-center"}><GraduationCap className={"size-7  text-gray-300"}/> <p className={"font-semibold ms-3 text-gray-300 hover:dark:text-white hover:text-black transition-all duration-300"}>Education</p></div>
                    <div className={"text-xs my-4"}>My Education Journey in Brief</div>
                    <div className={"border-s-2"}>
                        {educationJourney.map((milestone,index) => (
                            <div key={milestone.title+index} className={"flex justify-between mb-5 p-3 hover:border-s-4 transition-all duration-200 "}>
                                <div className={"flex items-center"}>
                                    <div className={"text-xl border rounded w-fit p-1"}><milestone.icon className={"size-8 font-bold  "}/></div>
                                    <div className={"ms-3"}>{milestone.title}<br/><p className={"text-xs"}>{milestone.description}</p></div>
                                </div>
                                <div className={"text-xs text-gray-400"}>{milestone.date}</div>
                            </div>
                        ))}
                    </div>
                    <div className={"text-right text-xs hover:text-blue-300 text-blue-200 transition-all duration-300"}>See Detail</div>
                </div>
           </div>
       </div>

    </motion.div>)
}