import Link from "next/link";

export default function Footer(){
    const navItem =  [
        {
            title : "About",
            ref : "/about"
        },
        {
            title : "Education",
            ref :"/education"
        },
        {
            title : "Projects",
            ref :"/projects"
        },

        {
            title:"Skill",
            ref:"/skill"
        }
    ]
    return (<div className={"border-t-2 w-full container mt-8 sticky button-0  "}>
        <div className={"flex md:justify-between justify-center p-4 py-10 "}>
            <div className={"flex text-center "}>
                {navItem.map((item,index)=> (
                    <Link href={item.ref} key={item.title+index} className={"md:me-4 mx-2 hover:text-gray-900  hover:dark:text-gray-100 text-gray-700 transition-all duration-400"}>{item.title}</Link>
                ))}
            </div>
            <div className={"hidden md:flex"}>2025 All rights reserved. @Egon</div>
        </div>
    </div>)
}