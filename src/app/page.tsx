import ThemeToggle from '@/components/theme&effects/ThemeToggle'

export default function Home() {
    return (<div className=" dark:text-white container">
        I'm theme-aware and fade nicely! <ThemeToggle/>

    </div>)
}