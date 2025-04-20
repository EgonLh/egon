'use client'

import { toggleTheme } from '@/lib/theme'
import { Moon, Sun } from 'lucide-react'
import {useEffect, useState} from "react";
export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        const current = localStorage.getItem('theme')
        setIsDark(current === 'dark' || (!current && window.matchMedia('(prefers-color-scheme: dark)').matches))
    }, [])

    const handleToggle = () => {
        toggleTheme()
        setIsDark(prev => !prev)
    }
    return (
        <button
            onClick={handleToggle}
            className="rounded p-[7px] border  text-gray-800 dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800 transition"
        >
            {isDark ? <Sun className="w-5  h-5" /> : <Moon className="w-5 h-5" />}
        </button>
    )
}
