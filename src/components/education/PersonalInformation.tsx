"use client"
import { motion } from "framer-motion";
import {
    GraduationCap,
    GraduationCapIcon,
    LaptopIcon,
    NotebookIcon,
    MonitorDot, FileScan, NotepadText, Tent, SquareLibrary, ChevronRight
} from "lucide-react";
import Link from "next/link";

//education info
const educationJourney = [
    {
        title: "Higher National Certification",
        description: "Software Engineering",
        date: "2022 — 2023",
        icon: SquareLibrary,
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
        description: "Machine Learning, MLOps",
        date: "2024 — ",
        icon: Tent,
    },
];
//workspace info
const workstations = [
    {
        title: "Asus Vivobook 15",
        description: "Daily driver laptop for everything ",
        date: "2022 — Present",
        icon: LaptopIcon,
    },
    {
        title: "Notion",
        description: "Second brain — notes, task manager, planning ",
        date: "2022 — Present",
        icon: NotebookIcon,
    },
    {
        title: "WebStorm",
        description: "Professional IDE for serious development projects ",
        date: "2023 — Present",
        icon: FileScan,
    },
    {
        title: "Obsidian",
        description: "Lightweight and versatile editor for quick notes and plans",
        date: "2021 — Present",
        icon: NotepadText,
    },
];

export default function PersonalInformation(){
    return(<motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
            duration: 0.8,
            ease: "easeOut"
        }}
        viewport={{ once: true }}
        className={"my-24"}
    >
       <div className={"flex grid grid-cols-1 lg:grid-cols-2 gap-20 my-12"}>
           {/*---workspace journey---*/}
           <div className={""}>
               <div className={"py-3 rounded-lg "}>
                   {/*---title---*/}
                   <div className={"flex items-center"}>
                       <MonitorDot className={"size-7  dark:text-gray-400  text-gray-500 "}/>
                       <p className={"font-semibold ms-3 text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black transition-all duration-300"}>Workstation</p>
                   </div>
                   <div className={"text-xs my-4 text-justify dark:text-gray-400 text-gray-600"}>A detailed overview of the computing environments and workstations I’ve utilized throughout my learning and development journey.</div>
                   {/*---info detail---*/}
                   <div className={"border-s-2 border-dotted"}>
                       {workstations.map((milestone,index) => (
                           <div key={milestone.title+index} className={"flex justify-between mb-3 p-3 hover:dark:bg-gray-800/[0.5] hover:bg-gray-100/[0.5] hover:ms-1 border-white-300 rounded transition-all duration-200 "}>
                               <div className={"flex items-center"}>
                                   <div className={"text-xl border rounded w-fit p-1"}><milestone.icon className={"size-8 dark:text-gray-400  text-gray-500   hover:size-9 transition-all duration-300"}/></div>
                                   <div className={"ms-3 text-teal-900 hover:dark:text-teal-100  transition-all duration-300"}>{milestone.title}<br/><p className={"text-xs text-gray-600"}>{milestone.description}</p></div>
                               </div>
                               <div className={"text-xs text-gray-400"}>{milestone.date}</div>
                           </div>
                       ))}
                   </div>

               </div>
           </div>

           {/*---education journey---*/}
           <div className={""}>
                <div className={" border p-3 rounded-lg"}>
                    <div className={"flex items-center"}>
                        <GraduationCap className={"size-7  dark:text-gray-400  text-gray-500"}/>
                        <p className={"font-semibold ms-3 text-gray-300 hover:dark:text-white hover:text-black transition-all duration-300"}>Education</p>
                    </div>
                    <div className={"text-xs my-4 mb-8  text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black"}>Here is my brief education journey — shaped by resilience and hard work</div>
                    <div >
                        {educationJourney.map((milestone,index) => (
                            <div key={milestone.title+index} className={"flex justify-between mb-3 p-3 hover:shadow-sm border-dotted rounded hover:dark:bg-gray-800/[0.5] hover:bg-gray-100/[0.5] transition-all duration-200 "}>
                                <div className={"flex items-center"}>
                                    <div className={"text-xl border rounded w-fit p-1 rounded-lg hover:rounded transition-all duration-400 hover:dark:bg-gray-800 hover:bg-gray-100"}><milestone.icon className={"size-8  font-bold p-1 hover:text-orange-300 transition-all duration-300 "}/></div>
                                    <div className={"ms-3 text-teal-900 hover:dark:text-teal-100 transition-all duration-300"}>{milestone.title}<br/><p className={"text-xs text-gray-600"}>{milestone.description}</p></div>
                                </div>
                                <div className={"text-xs text-gray-400"}>{milestone.date}</div>
                            </div>
                        ))}
                    </div>

                </div>
           </div>
       </div>
        <div className={"text-xs text-blue-300"}>
            <Link href={"/education"} className={"flex justify-end items-center "}>See Detail
                <ChevronRight className={"size-3 ms-1 hover:ms-3 transition-all duration-300"}/></Link>
        </div>

    </motion.div>)
}