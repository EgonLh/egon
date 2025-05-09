"use client"
import CopyEmailButton from "@/components/ui/ToEmail";
import React from "react";
import {PlusCircle} from "lucide-react";

import { motion } from 'framer-motion';
export default function Intro(){
    return <div className={"bg-slate-300 grid   grid-cols-1 flex justify-center my-[40px]"}>
        <div className={"flex font-mono md:justify-start justify-center items-center my-4 md:mx-0 mx-4 "}>
            <img src={"/assets/intro.jpg"} className={"min-w-30  rounded shadow min-h-30 w-full h-full max-w-40 max-h-40"}/>
            <div className={" ms-3 flex-col items-between"}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="p-4"
                >
                    <motion.div
                        className="my-2 text-lg font-medium"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        I'm Zay Yar Htun
                    </motion.div>

                    <motion.div
                        className="text-xs my-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        Computer Science Enthusiast <br />
                        Aspiring AI/ML Engineer
                    </motion.div>

                    <motion.div
                        className="flex justify-between items-center mt-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <CopyEmailButton />

                        <button
                            className="flex items-center border text-xs rounded px-2 hover:bg-gray-900 hover:text-white transition-colors duration-300 ease-in-out shadow"
                        >
                            <PlusCircle className="w-4 me-1" />
                            Hire Me
                        </button>
                    </motion.div>

                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-1 rounded bg-green-950 text-green-500 font-semibold text-xs w-full justify-center mt-4"
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                        AVAILABLE FOR WORK
                    </motion.div>
                </motion.div>
            </div>
        </div>
        <div className={"text-justify"}>A passionate and self-driven front-end developer with hands-on experience in JavaScript, TypeScript, and frameworks like React, Redux, and Formik. I hold an HND diploma and am currently pursuing a Bachelor's degree while actively expanding my skills in AI/ML engineering and MLOps. I enjoy building intuitive, responsive user interfaces and collaborating in agile teams using tools like Git, Scrum, and version control best practices. My goal is to merge development and AI to solve real-world problems efficiently.</div>
    </div>
}