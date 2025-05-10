import Link from "next/link";

export default function Footer(){
    const navItem =  [
        {
            title : "About",
            ref : "/About"
        },
        {
            title : "Projects",
            ref :"/Projects"
        },
        {
            title : "Education",
            ref :"/Education"
        },
        {
            title:"Skill",
            ref:"/Skill"
        }
    ]
    return (<div className={"border-t-2 w-full container mt-8 sticky button-0 rounded dark:bg-gray-900"}>
        <div className={"flex justify-between p-4 py-10 "}>
            <div className={"flex"}>
                {navItem.map((item,index)=> (
                    <Link href={item.ref} key={item.title+index} className={"me-8 hover:text-gray-900 text-gray-700 transition-all duration-400"}>{item.title}</Link>
                ))}
            </div>
            <div>© 2025 Spencer Sharp. All rights reserved.</div>
        </div>
    </div>)
}