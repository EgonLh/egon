"use client"
import React, { useState } from 'react';
import {CopyCheckIcon, CopyIcon} from "lucide-react";

interface CopyEmailButtonProps {
    email?: string;
    label?: string;
}

const CopyEmailButton: React.FC<CopyEmailButtonProps> = ({
                                                             email = 'egon.htun@gmail.com',
                                                             label = 'email',
                                                         }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy email:', err);
        }
    };

    return (
        <button
            onClick={handleCopy}
            className="flex items-center border text-xs rounded px-2 hover:bg-gray-900 hover:text-white transition-colors duration-300 ease-in-out shadow"
        >
            {copied ? (
                <>
                    <CopyCheckIcon className={"w-5 me-1"} /> Copied!
                </>
            ) : (
                <>
                    <CopyIcon  className={"w-5 me-1"}/> {label}
                </>
            )}
        </button>
    );
};

export default CopyEmailButton;
    