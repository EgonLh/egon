// -- main -- //
import Introduction from "@/components/introduction/Introduction";
import PersonalInformation from "@/components/education/PersonalInformation";
import TopicMarquee from "@/components/theme&effects/Marquee";
import ProjectShowCase from "@/components/projects/ProjectShowCases";
import ContactMe from "@/components/contactme/Contactme";

export default function Home() {
    return (<div className="container p-3 rounded 2xl:px-9 [@media(min-width:1600px)]:px-3  ">
           <Introduction/>
           <TopicMarquee/>
           <PersonalInformation/>
           <ProjectShowCase/>
           <ContactMe/>
    </div>)
}