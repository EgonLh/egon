'use client'

import { toggleTheme } from '@/lib/theme'
import { Moon, Sun } from 'lucide-react'
import {useEffect, useState} from "react";

type ThemeToggleProps = {
    type?: "icon" | "text"
}

export default function ThemeToggle({ type = "icon" }: ThemeToggleProps) {
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        const current = localStorage.getItem('theme')
        setIsDark(current === 'dark' || (!current && window.matchMedia('(prefers-color-scheme: dark)').matches))
    }, [])

    const handleToggle = () => {
        toggleTheme()
        setIsDark(prev => !prev)
    }
    if (type === "text") {
        return (
            <button
                onClick={handleToggle}
                className="text-sm px-2 py-2 rounded  border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-all"
            >
                {isDark ? <Sun className="w-4  h-4" /> : <Moon className="w-4 h-4   " />}
            </button>
        )
    }
    return (
        <button
            onClick={handleToggle}
            className="rounded p-[14px] border  text-gray-800 dark:text-gray-200 shadow-sm dark:bg-gray-800 transition-all duration-300"
        >
            {isDark ? <Sun className="w-5  h-5" /> : <Moon className="w-5 h-5" />}
        </button>
    )
}

