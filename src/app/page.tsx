// import ThemeToggle from '@/components/theme&effects/ThemeToggle'
import Intro from "@/components/introduction/Intro";
import Section from "@/components/education/Section";
import ScrollMarqueeCenter from "@/components/theme&effects/Marque";
import ProjectShowCase from "@/components/Projects/ProjectShowCases";

export default function Home() {
    return (<div className="container p-3  2xl:border rounded">
        <Intro/>
        <ScrollMarqueeCenter/>
        <Section/>
        <ProjectShowCase/>
    </div>)
}