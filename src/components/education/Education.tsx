"use client"

import * as LucideIcons from "lucide-react"
import {
    Activity,
    AppWindow,
    Book,
    Circle,
    CpuIcon,
    FileIcon,
    FileTerminal,
    GraduationCapIcon,
    School
} from "lucide-react";
import React from "react";

export default function EducationShowCase(){
    return (<div className={"my-4 w-full"}>
        <div className={"text-4xl"}>Education</div>
        <div className={"text-xl"}>My Education Milestones From eee.safe ewr asdfe aerw sfeferh All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.</div>
        <div className={"text-xs"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium amet aperiam cupiditate dignissimos ea exercitationem, facilis fuga hic ipsa iusto labore maxime, nostrum officia quaerat repudiandae sunt temporibus unde?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consequatur dignissimos dolor doloremque dolorum eaque esse et excepturi, illo ipsam iusto necessitatibus nisi pariatur, placeat praesentium quibusdam, tempore veritatis. Mollitia!
        </div>

        <div className={"border  my-9 flex justify-center"}>

            <div className={"w-5/6"}>
                <VerticalTimeline/>
            </div>
        </div>

    </div>)
}


const VerticalTimeline = () => {
    const educationJourney = [
        {
            date: "May 2022",
            subtitle: "The foundation",
            title: "Higher National Certification",
            icon: <AppWindow size={25} className={" text-black fill-emerald-500"} strokeWidth={1.5}/>,
            learningStyle: "blended",
            description:
                "Completed foundational coursework in Software Engineering, covering programming principles, software design patterns, and basic projects management. Gained hands-on experience with languages such as Java and Python, and developed problem-solving skills through practical assignments.",
        },
        {
            date: "June 2023",
            subtitle: "The advancement",
            title: "Higher National Diploma",
            icon: <FileTerminal size={25} className={"text-black fill-emerald-500"} strokeWidth={1.5}/>,
            learningStyle: "blended",
            description:
                "Advanced studies in Software Engineering, including data structures, algorithms, and database management. Engaged in collaborative projects emphasizing version control, Agile methodologies, and software testing to build real-world applications.",
        },
        {
            date: "September 2024",
            subtitle: "The specialization",
            title: "Bachelor of Science (Hons)",
            icon: <GraduationCapIcon size={25} className={"text-black fill-emerald-500"} strokeWidth={1.5}/>,
            learningStyle: "blended",
            description:
                "Specialized in Software Engineering at the University of Greenwich, focusing on systems architecture, cloud computing, and AI integration. Completed a capstone projects involving machine learning pipelines and deployed scalable applications.",
        },
        {
            date: "October 2024",
            subtitle: "The intensive",
            title: "ZoomCamp",
            icon: <CpuIcon size={25} className={"text-black fill-emerald-500"} strokeWidth={1.5}/>,
            learningStyle: "online",
            description:
                "Intensive hands-on program focused on practical Machine Learning, MLOps, and data engineering skills. Covered end-to-end ML lifecycle, including model training, deployment, monitoring, and cloud infrastructure automation.",
        },
    ]

    return (
        <div className=" mx-auto p-6 relative ">

            {/* Continuous vertical line */}
            <div className="absolute left-[0px] top-0 bottom-0 w-[2px]  border bg-black border-gray-600  border-t-3 hover:border-dashed  " />

            {educationJourney.map((item, index) => (
                <div key={index} className="flex mb-12 relative ">

                    {/* Date pill */}
                    <div className="min-w-[200px] me-9 flex flex-col items-center">
                        <div className="  text-green-800 w-fit text-xs font-medium px-3 py-1 rounded-md inline-block hover:bg-black transition-all duration-300 hover:text-white text-center align-middle">
                            {item.date}
                        </div>
                    </div>

                    {/* Timeline dot */}
                    <div className="absolute left-[-22px] hover:border   bg-white rounded hover:p-3 transition-all duration-300   -translate-x-1/2 z-10">
                        {item.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-1 border p-3 rounded text-gray-400 hover:dark:bg-gray-800/[0.5] hover:bg-gray-100/[0.5] transition-all duration-500">
                        <h3 className="font-bold mb-2">{item.title}</h3>
                        <div className={"text-xs  border-l-4 ps-2 my-2"}>{item.learningStyle?.toUpperCase()}</div>
                        <p className="text-gray-600 leading-relaxed text-sm text-justify">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

