"use client"
import React, { useState } from 'react';
import {MailCheck, MailPlus} from "lucide-react";

interface CopyEmailButtonProps {
    email?: string;
    label?: string;
}

const CopyEmailButton: React.FC<CopyEmailButtonProps> = ({
                                                             email = 'egon.htun@gmail.com',
                                                             label = 'EMAIL',
                                                         }) => {
    const [copied, setCopied] = useState(false);

    // > handing Copy
    const handleCopy = async () => {
        try {
            if (typeof email === "string") {
                await navigator.clipboard.writeText(email);
            }
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy email:', err);
        }
    };

    return (
        <button
            onClick={handleCopy}
            className="flex items-center border text-xs rounded px-2 p-1 hover:bg-gray-900 hover:dark:bg-gray-300/[0.1] hover:text-white transition-colors duration-300 ease-in-out "
        >
            {copied ? (
                <>
                    <MailCheck className={"w-5 me-2"} /> <span className={"font-mono"}>COPIED</span>
                </>
            ) : (
                <>
                    <MailPlus  className={"w-5 me-2"}/> <span className={"font-mono"}>{label}</span>
                </>
            )}
        </button>
    );
};

export default CopyEmailButton;
    