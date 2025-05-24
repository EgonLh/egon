"use client"

import {motion} from "framer-motion";
import React from "react";

// -- skill showcase -- //
const skills = [
    {
        topic: "Languages",
        skills: [
            { name: "🟨 JavaScript", description: "Experienced in both JavaScript fundamentals and advanced concepts like immutability, the event loop, and asynchronous programming. Gained a solid grasp of its interpreted nature and runtime behavior, while exploring the broader JS ecosystem—Node.js, Next.js, and TypeScript. Also delved into functional programming and deepened my understanding through an excellent course and JavaScript: The Definitive Guide (3rd edition)."},
            { name: "🐍 Python", description: "Adapting to Python’s dynamic, interpreted programming style, I actively explored and studied the language through Python Data Science Handbook and Automate the Boring Stuff with Python, focusing especially on data science workflows using libraries like Pandas, NumPy, and scikit-learn." },
            { name: "📄 HTML", description: "I started with HTML to understand the backbone of web content structure. Learned how to build semantic, accessible webpages using elements like headings, links, forms, and more—laying the groundwork for everything I do in frontend development." },
            {
                name: "🎨 CSS",
                description: "Diving deep into CSS gave me a strong grasp of how styling truly works—from the box model and specificity to Flexbox, Grid, and modern responsive design principles. This solid foundation makes it easy for me to adapt quickly to new UI libraries and frameworks, since I understand what’s happening under the hood."
            }
        ],
        _id:"pglang"
    },
    {
        topic: "Frontend Frameworks & Libraries",
        skills: [{
            name: "⚛ React.js",
            description: "I explored React deeply beyond just building components—studied its reconciliation algorithm, core design patterns, and the principles behind component composition. This helped me build maintainable, scalable UIs by understanding how React really works under the hood."
        },
            {
                name: "💽 Next.js",
                description: "Used Next.js to build SEO-friendly, production-grade websites. Embraced its philosophy of 'convention over configuration' and explored advanced features like SSR, SSG, middleware, and dynamic routing. This framework fits naturally into building structured, fast, and scalable web applications."
            },
            {
                name: "🛠️ Redux Toolkit (RTK)",
                description: "Learned Redux Toolkit by aligning it with functional programming principles. Explored core concepts like slices, store structure, caching, and query/mutation handling via RTK Query. Gained a solid understanding of the single source of truth paradigm and how to manage global state cleanly and efficiently."
            },
            {
                name: "✏ UI Design & Theming",
                description: "Developed an appreciation for consistent theming and visual identity across apps. I’ve worked with custom design systems and focused on clarity, accessibility, and modularity—ensuring UI decisions reflect both user experience and maintainability principles."
            }
        ],
        _id:"fe"
    },
    {
        topic: "Backend Technologies & Databases",
        skills: [
            {
                name: "🛄 Express.js",
                description: "I explored Express.js beyond the basics—learning how to structure backend projects using a layered architecture with routers, controllers, and service layers. I implemented real-world features like JWT authentication and middleware to handle secure routes and user sessions."
            },
            {
                name: "🍂 MongoDB",
                description: "Learned the core concepts of NoSQL and document-oriented databases through MongoDB. Practiced using Mongo Shell (mongosh) for direct interactions, and worked with MongoDB in real-world apps using Mongoose ORM to model data. Also explored integrating it with Prisma for type-safe database access in full-stack projects."
            }
        ],
        _id:"be"
    },
    {
        topic: "AI / Machine Learning",
        skills: [
            {
                name: "🤖 Machine Learning",
                description: "Gained hands-on experience through practical courses like DataTalks' Zoomcamp, Simbolo, and Andrew Ng’s ML courses. Worked on data preprocessing, model training, evaluation, and deployment using scikit-learn. Also explored MLOps fundamentals—like model tracking, reproducibility, and deployment workflows—through the DataTalks' track."
            },
            {
                name: "🧠 AI Concepts",
                description: "Developed a strong understanding of AI fundamentals including supervised vs. unsupervised learning, overfitting, regularization, feature engineering, and full ML pipelines. Learned to approach problems methodically through structured coursework and real-world case studies."
            }
        ],
        _id:"ai",
    },
    {
        topic: "Tools & Utilities",
        skills: [
            {
                name: "🐙 Git & GitHub",
                description: "I use Git and GitHub extensively to manage my projects and collaborate smoothly with teams. It’s essential for version control, handling branches, resolving merge conflicts, and contributing to both personal and open-source projects."
            },
            {
                name: "💻 VS Code / WebStorm",
                description: "Powerful code editors and IDEs that boost my productivity with rich extensions, debugging tools, and language support—helping me write cleaner code faster across different environments."
            },
            {
                name: "🧪 Postman",
                description: "My go-to tool for API development—testing RESTful endpoints, sending HTTP requests, and automating workflows with collections and environments to streamline backend and frontend integration."
            },
            {
                name: "🗂️ Notion",
                description: "I rely on Notion for planning my goals, organizing roadmaps, storing important data, and tracking my progress—all in one clean, flexible workspace."
            },
            {
                name: "📝 Obsidian",
                description: "Use Obsidian for mind mapping and note-taking with Markdown. It helps me connect ideas, structure knowledge, and maintain an efficient personal knowledge base."
            },
        ],
        _id:"tools"
    },
];

export default function SkillShowCase(){
    return (<motion.div initial={{opacity: 0, y: 20}}
                 animate={{opacity: 1, y: 0}}
                 transition={{duration: 0.8, ease: 'easeInOut'}}>
        <div className={" my-9 p-8 "}>
            <div className="my-12">
                <div className="text-lg  font-bold  text-gray-400 mb-2">
                    ⚙️Tools of the Trade
                </div>

                <div className="text-3xl font-bold text-emerald-400 mb-3">
                    Explore the Technologies I Work With
                </div>

                <div className=" text-gray-700  dark:text-gray-300 leading-relaxed w-full text-justify">Throughout my journey, I’ve worked on various projects — these are the technologies and tools I've grown most confident in using. I'm constantly exploring new frameworks, refining my approach, and staying curious. While I’m proud of what I know, I’m even more excited about what I’ve yet to learn. My passion for growth drives me to keep pushing the boundaries of what I can build!
                </div>
            </div>

            <div className={"flex relative  justify-center flex-col w-full  py-4 items-center border rounded"}>

                <div className="absolute inset-0
        bg-[radial-gradient(#c6c6cd_1.5px,transparent_1px)] bg-[size:20px_20px]
        dark:bg-[radial-gradient(#565454_1px,transparent_1px)] dark:bg-[size:20px_20px]
        opacity-40 pointer-events-none z-0 rounded" />
                {
                    skills.map((skill,index)=>(
                        <div className={"w-4/5 grid md:grid-cols-2 grid-cols-1 mb-3  my-8"} id={skill._id}>
                            <div className={"hover:mx-4 transition-all py-1  duration-300"}><li className={"hover:underline decoration-dotted transition-all duration-300 ease-in-out underline-offset-8"}>{skill.topic}</li></div>
                            <div>{skill.skills.map((item,index)=>
                                (<div className={"mb-4 hover:border p-1 hover:dark:bg-gray-900/[0.9] hover:bg-gray-100 transition-all duration-300 hover:p-3 rounded"}>
                                    <div className={"text-lg text-gray-400 hover:text-gray-800 hover:dark:text-gray-300 transition-all hover:underline decoration-dotted underline-offset-8 mb-2 duration-500 font-semibold font-mono"}>{item.name}</div>
                                    <div className={"text-xs text-justify  text-gray-800 dark:text-gray-300"}>{item.description}</div>
                                </div>)
                            )}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    </motion.div>)
}
