'use client';

import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import {Github, Linkedin, Loader2, Phone} from "lucide-react";

const ContactForm = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [isSent, setIsSent] = useState(false);
    const [loading, setLoading] = useState(false);

    // -- sending email -- //
    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        if (!formRef.current) return;
        emailjs
            .sendForm(
                'service_baipz88',
                'template_u7hwgmm',
                formRef.current,
                'WGd7OSUgpHtU-Y18o'
            )
            .then(
                () => {
                    setIsSent(true);
                    setLoading(false);
                    formRef.current?.reset();
                },
                (error) => {
                    console.error('Failed to send email:', error);
                    setLoading(false);
                }
            );
    };

    // -- cleaning up the msg -- //
    useEffect(() => {
        if (isSent) {
            const timer = setTimeout(() => setIsSent(false), 800);
            return () => clearTimeout(timer);
        }
    }, [isSent]);

    return (
        <form ref={formRef} onSubmit={sendEmail} className="text-xs ">
            {/*--inputs---*/}
            <div className="flex mb-1">
                <div className="me-1 w-full">
                    <input
                        name="user_email"
                        type="email"
                        placeholder="Enter your email"
                        required
                        className="w-full p-2 border text-xs rounded dark:bg-zinc-800 dark:border-zinc-700"
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-fit flex justify-center items-center text-xs bg-gray-800 hover:bg-black transition-all hover:mx-3 duration-300 text-white font-semibold py-2 px-3 rounded-md"
                    >
                        {loading ? (
                            <>
                                <Loader2 className="animate-spin w-4 h-4 me-2" />
                                Sending...
                            </>
                        ) : (
                            <>SEND</>
                        )}
                    </button>
                </div>
            </div>

            {isSent && (
                <div className="text-green-600 transition-opacity flex justify-center duration-200">
                    Message sent 🎉
                </div>
            )}
            {/* -- social links */}
            <div className={" w-full flex justify-center py-2"}>
                <div className={"  hover:mx-3 mx-1 transition-all duration-300 rounded  p-1 flex items-center"}><a href={"https://github.com/EgonLh"}><Github className={"size-3   text-gray-500 "}/></a></div>
                <div className={"  hover:mx-3 mx-1 transition-all duration-300 rounded   p-1 flex items-center"}><a href={"https://www.linkedin.com/in/zay-yar-htun-119822260"}><Linkedin className={"size-3  text-gray-500 "}/></a></div>
            </div>
        </form>
    );
};

export default ContactForm;
