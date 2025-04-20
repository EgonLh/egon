"use client"
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
} from "@/components/ui/menubar"
import ThemeToggle from "@/components/theme&effects/ThemeToggle";
import useIsMobile from "@/hook/IsMobile";
import {useState} from "react";
import {PlusIcon, XIcon} from "lucide-react";

const menuItems = [
    {
        label: "About",
        content: [
            {type: "item", label: "Intro"},
            {type: "item", label: "Social Media"},
            {type: "separator"},
            {type: "item", label: "Contact"},
            {type: "item", label: "Resume / CV"},
        ],
    },
    {
        label: "Education",
        content: [
            {type: "item", label: "HNC (Pearson) in Software Engineering"},
            {type: "item", label: "HND in Software Engineering"},
            {type: "item", label: "BSc in Computing – University of Greenwich"},
            {type: "separator"},
            {type: "item", label: "Certifications"},
        ],
    },
    {
        label: "Projects",
        content: [
            {type: "item", label: "Machine Learning"},
            {type: "item", label: "Website Development"},
            {type: "item", label: "AI Tools / Automation"},
            {type: "separator"},
            {type: "item", label: "Academic Projects"},
            {type: "item", label: "Freelance / Side Projects"},
        ],
    },
    {
        label: "Skills",
        content: [
            {type: "item", label: "Languages & Frameworks"},
            {type: "item", label: "AI & Data Science"},
            {type: "separator"},
            {type: "item", label: "DevOps / MLOps"},
            {type: "item", label: "Cloud & Infrastructure"},
        ],
    },
    {
        label: "Blog",
        content: [
            {type: "item", label: "Tech Articles"},
            {type: "item", label: "Learning Journey"},
            {type: "item", label: "Tips & Resources"},
        ],
    },
];
const mobileMenu = [
    {label:"About"},{label:"Skill"},{label:"Education"},{label:"Contact"}
]
export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    const isMobile = useIsMobile();
    return (<div className={" p-3 flex justify-between container "}>
            <div
                className="dark:bg-gray-800 flex items-center border rounded font-mono w-12 h-13 p-1 flex justify-center items-center">
                <img
                    src="/assets/profile.png"
                    alt="Profile"
                    className="w-full h-full object-cover rounded"
                />
            </div>
            {isMobile?<div>
                <Menubar className={"dark:border-gray-600 dark:bg-gray-800 "}>
                    <MenubarMenu>
                        <MenubarTrigger
                            className={"p-1 text-gray-500 transition-all duration-300 hover:text-gray-800 transition-all duration-300 ease-in-out"} onClick={handleToggle}>
                            {isOpen ? (
                                <XIcon className="w-7 h-7  transition-all duration-300 ease-in-out" />
                            ) : (
                                <PlusIcon className="w-7 h-7  transition-all duration-300 ease-in-out" />
                            )}
                        </MenubarTrigger>
                        <MenubarContent>
                            {mobileMenu.map((item,id) =>(
                                <MenubarItem key={id} className={"text-gray-300 transition-all duration-200 hover:text-gray-900"}>{item.label}</MenubarItem>
                            ))}
                            <MenubarItem className={"flex justify-end"}><ThemeToggle type={"text"}/> </MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>
                </div>:
            <>
                <div>
                    <Menubar className={"dark:border-gray-600 dark:bg-gray-800 "}>
                        {menuItems.map((menu, i) => (
                            <MenubarMenu key={i}>
                                <MenubarTrigger
                                    className={"py-2 text-gray-500 transition-all duration-300 hover:text-gray-800"}>{menu.label}</MenubarTrigger>
                                <MenubarContent>
                                    {menu.content.map((item, j) =>
                                        item.type === "separator" ? (
                                            <MenubarSeparator key={j}/>
                                        ) : (
                                            <MenubarItem key={j}>{item.label}</MenubarItem>
                                        )
                                    )}
                                </MenubarContent>
                            </MenubarMenu>
                        ))}
                    </Menubar>
                </div>
                <div>
                    <ThemeToggle/>
                </div>
            </>}
        </div>
    )
}