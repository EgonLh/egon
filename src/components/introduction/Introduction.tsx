"use client"
import CopyEmailButton from "@/components/ui/ToEmail";
import React from "react";
import {Facebook, Github, Linkedin, PlusCircle, Twitter} from "lucide-react";
import {motion} from 'framer-motion';
import DecryptedText from "@/components/ui/DecryptedText/DecryptedText";

export default function Introduction() {
    return (<motion.div
        initial={{opacity: 0, y: 50}}
        whileInView={{opacity: 1, y: 0}}
        transition={{
            duration: 0.8,
            ease: "easeOut"
        }}
        viewport={{once: true}}
    >
        <div className={" grid grid-cols-1 flex justify-center mt-[40px]"}>
            {/*---Img and Description  ---*/}
            <div className={" md:justify-start justify-center items-center flex flex-col md:flex-row my-8 md:mx-0 mx-4  "}>
                <div className="relative min-w-30 min-h-30  dark:-rotate-[5deg] transition-all duration-300 -rotate-[0deg] w-full dark:bg-gray-300/[0.1] max-w-60 max-h-60 rounded-lg border overflow-hidden">
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
                        <img src={"/assets/my-face.png"}
                             className="w-full h-full relative z-10 object-cover"/>

                    </motion.div>

                </div>
                {/* My - information - */}
                <div className={" ms-3 flex-col items-between"}>
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, ease: 'easeOut'}}
                        className="p-4"
                    >
                        <motion.div
                            className="my-2 text-3xl font-black  md:text-start text-center"
                            initial={{opacity: 0, y: 10}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.2}}
                        >
                            Aspiring
                            <DecryptedText text=" AI/ML " speed={100}
                                           maxIterations={20}
                                           characters="ABCD1234!?"
                                           className="revealed hover:text-blue-500 transition-all duration-300"
                                           parentClassName="all-letters"
                                           encryptedClassName="encrypted"/>
                            Engineer<br/>
                            Computer Science <DecryptedText text="Enthusiast" speed={100}
                                                            maxIterations={20}
                                                            characters="ABCD1234!?"
                                                            className="revealed hover:text-blue-500 transition-all duration-300"
                                                            parentClassName="all-letters"
                                                            encryptedClassName="encrypted"/>
                        </motion.div>
                        <motion.div
                            className=" my-2 text-balance text-gray-600 dark:text-gray-400  hover:text-gray-800 md:text-justify text-center"
                            initial={{opacity: 0, y: 10}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.4}}
                        >
                            Hi! I'm <span
                            className={"hover:font-black  font-mono italic hover:underline underline-offset-8  transition-all duration-300  "}>Zay Yar Htun</span>,
                            also known as <span
                            className={"font-bold italic hover:underline underline-offset-8"}>Egon</span>.
                        </motion.div>


                        <motion.div
                            className="flex md:justify-start justify-center items-center mt-2"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0.6}}
                        >
                            <CopyEmailButton/>

                            <button
                                className="flex ms-3 items-center border text-xs rounded px-2 p-1 hover:bg-gray-900 hover:dark:bg-gray-300/[0.1] hover:text-white transition-colors duration-300 ease-in-out "
                            >
                                <PlusCircle className="w-4 me-1"/>
                                Hire Me
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
            {/*---My Information Detail---*/}
            <div className={"text-justify my-8 text-base/8 text-gray-600 dark:text-gray-500 hover:text-gary-500"}>I am a self-driven aspiring AI/ML engineer and computer science enthusiast, currently pursuing a Bachelor's degree in Software Engineering. Holding a Higher National Diploma (HND) in Software Engineering, I've built a solid foundation in programming principles. My practical experience includes developing applications using JavaScript and TypeScript, and I'm actively expanding my expertise in Python, focusing on machine learning. I'm exploring MLOps practices to streamline model deployment and monitoring. Committed to continuous learning, my goal is to integrate software development and AI to create scalable solutions addressing real-world challenges effectively.</div>
            <div className="flex my-4 space-x-3">
                {[Facebook, Twitter, Github, Linkedin].map((Icon, idx) => (
                    <div
                        key={idx}
                        className="p-2 hover:px-3  hover:text-black text-gray-600 hover:border my-1  outline-2 rounded transition-all duration-300 "
                    >
                        <Icon className="size-5  transition-all duration-300 hover:fill-black  black:fill-white dark:text-gray-200 "/>
                    </div>
                ))}
            </div>
        </div>

    </motion.div>)
}