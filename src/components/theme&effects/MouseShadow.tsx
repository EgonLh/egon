// src/components/MouseShadow.tsx
'use client'

import { useEffect, useState } from 'react'

export default function MouseShadow() {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [hidden, setHidden] = useState(false)

    useEffect(() => {
        const move = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY })

            // Check if hovering over a "hover-target"
            const el = e.target as HTMLElement
            const isHoveringText = el.closest('.hover-target') !== null
            setHidden(isHoveringText)
        }

        window.addEventListener('mousemove', move)

        // Optional: Hide cursor when not hovering
        document.body.style.cursor = "none"

        return () => {
            window.removeEventListener('mousemove', move)
            document.body.style.cursor = "" // Restore cursor
        }
    }, [])

    return (
        <div
            className="pointer-events-none fixed z-50 h-[20px] w-[20px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/20 dark:bg-white/40   duration-100 "
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
            }}
        />
    )
}
