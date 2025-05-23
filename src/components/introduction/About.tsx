"use client"
import React from "react";
import {Facebook, File, FileTerminal, Github, Linkedin} from "lucide-react";
import {motion} from "framer-motion";

export default function MyInfo() {
    return (<div className={"flex    rounded lg:my-24 my-3 justify-center flex-col items-center"}>
        <div className={" flex w-full justify-between lg:flex-row flex-col "}>
            <div className={"w-fit flex justify-start p-8 flex-col lg:items-center item-start "}>
                {/* Personal infromation */}
                <div
                    className="relative lg:max-w-[550px] lg:max-h-[550px]  max-w-60 max-h-60  -rotate-[5deg] transition-all duration-300 hover:-rotate-[0deg] w-full dark:bg-gray-300/[0.1]  rounded-lg border overflow-hidden">
                    {/* -- img background : transparent */}
                    <div className="absolute inset-0
                                    bg-[radial-gradient(#c6c6cd_1.5px,transparent_1px)] bg-[size:20px_20px]
                                    dark:bg-[radial-gradient(#565454_1px,transparent_1px)] dark:bg-[size:20px_20px]
                                    opacity-40 pointer-events-none z-0"/>
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, ease: 'easeOut'}}
                        className="p-4"
                    >
                        {/* my profile : transparent */}
                        <img src={"/assets/my-img.png"}
                             className="w-full h-full relative z-10 object-cover"/>

                    </motion.div>

                </div>
                <div className={"w-full  mt-9 rounded p-3 hidden lg:block "} id={"CV"}>
                    <p className={"dark:text-gray-300 text-gray-800"}>Want to learn more about my skills and
                        experience?</p>
                    <div className={"my-5"}>
                        {/* personal info */}
                        <motion.div initial={{opacity: 0, y: 20}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.8, ease: 'easeInOut'}}
                                    className={"hover:my-3 transition-all duration-300"}>
                            <a
                                className="p-1 text-gray-400 hover:text-cyan-400 rounded flex cursor-not-allowed"
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    alert("Cover Letter is currently in progress. Stay tuned!");
                                }}
                            >
                                <File className="text-gray-800 me-2 transition-all duration-300 hover:dark:text-gray-300" />
                                View My Cover Letter
                            </a>
                        </motion.div>

                        {/* personal info */}
                        <motion.div initial={{opacity: 0, y: 20}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.8, ease: 'easeInOut'}}
                                    className={" hover:my-3 transition-all duration-300"}>
                            <a className={"p-1 text-gray-400 hover:text-cyan-400  rounded flex"}
                               href="/assets/CV/CV.pdf"
                               target="_blank"><FileTerminal
                                className={"text-gray-800 me-2 transition-all duration-300 hover:dark:text-gray-300"}/>View
                                My CV</a>
                        </motion.div>

                    </div>
                </div>
            </div>
            {/* -- text about me --*/}
            <div className="w-full  p-8 lg:pt-8 pt-0 rounded-2xl  text-justify">
                <motion.div initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.8, ease: 'easeInOut'}}
                            className="mb-6">
                    <h2 className="xl:text-3xl text-xl font-semibold text-gray-800 dark:text-white">Hello 🧑🏻 I
                        am </h2>
                    <h1 className="xl:text-5xl text-3xl font-extrabold text-emerald-600 mt-2"> A CS Enthusiast , </h1>
                    <h1 className="xl:text-5xl text-3xl font-extrabold text-emerald-600 text-start">Aspiring AI/ML
                        Engineer<br/> From Myanmar !</h1>
                </motion.div>

                <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed text-[1.05rem]">
                    <p className={"indent-9"}>
                        Hi, I'm Egon — an aspiring AI/ML engineer with a solid computing background and a commitment to driving meaningful innovation.
                        I hold an HNC and HND in Software Engineering and am currently pursuing my BSc in Computing at the University of Greenwich.
                        Throughout my academic journey, I’ve remained committed to growth, constantly seeking ways to build practical skills in both traditional software development and modern AI systems.
                    </p>
                    <p className={"indent-9"}>
                        I strive to be committed and honest in my work, always eager to learn and grow with a growth mindset to navigate challenges and contribute meaningfully.
                        Whether it’s diving deep into Machine Learning or working on proof-of-concept and practical projects, I genuinely enjoy the process of figuring things out, solving problems, and improving little by little every day. I find joy in the journey of learning itself—embracing challenges as opportunities to grow and sharpen my skills continuously.
                        I’m passionate about the intersection of AI and real-world impact — where innovative ideas transform into practical solutions.
                    </p>
                    <p className={"indent-9"}>
                        At this stage of my career, I’m not claiming to know it all — far from it. But I bring a strong
                        work ethic, an
                        open mind, and a constant eagerness to grow through hands-on experience, collaboration, and
                        honest feedback. I’m
                        excited about where this journey will take me, and I’m always on the lookout for new
                        opportunities to learn,
                        contribute, and be part of something meaningful.
                    </p>
                </div>

                {/*Social links*/}
                <div className="flex lg:flex hidden   justify-end gap-4 mt-8 ">
                    <a href={"https://www.linkedin.com/in/zay-yar-htun-119822260"}>
                        <Linkedin className="size-5 text-gray-600 hover:text-emerald-500 transition-all duration-300"/>
                    </a>
                    <a href={"https://github.com/EgonLh"}>
                        <Github className="size-5 text-gray-600 hover:text-emerald-500 transition-all duration-300"/>
                    </a>
                    <a href={"https://www.facebook.com/zay.yar.htun.100488?mibextid=ZbWKwL"}>
                        <Facebook className="size-5 text-gray-600 hover:text-emerald-500 transition-all duration-300" />
                    </a>
                </div>
                <div className={"w-full rounded mt-4 mb-24  lg:hidden flex justify-start flex-col items-start"}
                     id={"CV"}>
                    <motion.div initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.8, ease: 'easeInOut'}}
                                className={"hover:my-3  transition-all duration-300"}>
                        <a className={" text-gray-400 hover:text-cyan-400   rounded flex"}><File
                            className={"text-gray-800 me-2 transition-all duration-300 hover:dark:text-gray-300"}/>View
                            My Cover Letter</a>
                    </motion.div>

                    <motion.div initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.8, ease: 'easeInOut'}}
                                className={" hover:my-3 mt-3 transition-all duration-300"}>
                        <a className={"text-gray-400 hover:text-cyan-400  rounded flex"}><FileTerminal
                            className={"text-gray-800 me-2 transition-all duration-300 hover:dark:text-gray-300"}/>View
                            My CV</a>
                    </motion.div>
                </div>
            </div>
        </div>
    </div>)
}