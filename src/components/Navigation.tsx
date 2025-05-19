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
];
const mobileMenu = [
    {label: "About"}, {label: "Skill"}, {label: "Education"}, {label: "Contact"}
]
export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    const handleRefresh = () => {
        window.location.reload();
    };
    const isMobile = useIsMobile();
    return (<div className={"container mx-auto sticky sticky top-0 z-[9999]"}>
            <div className={" p-3 flex    justify-between  my-3  lg:m-0 "}>
                <button onClick={handleRefresh}
                    className=" md:flex items-center border rounded font-mono w-12 h-13 p-1 flex justify-center items-center bg-emerald-50">
                    <img
                        src="/assets/my-face.png"
                        alt="Profile"
                        className="w-full h-full object-contain rounded "
                    />
                </button>
                {/*--mobile and laptop menus*/}
                {isMobile ? <div>
                        {/*--mobile-size-nav--*/}
                        <Menubar className={"dark:border-gray-600 dark:bg-gray-800 "}>
                            <MenubarMenu>
                                <MenubarTrigger
                                    className={"p-1 text-gray-500 transition-all duration-300 hover:dark:text-gray-700 transition-all duration-300 ease-in-out"}
                                    onClick={handleToggle}>
                                    {isOpen ? (
                                        <XIcon className="w-7 h-7  transition-all duration-300 ease-in-out"/>
                                    ) : (
                                        <PlusIcon className="w-7 h-7  transition-all duration-300 ease-in-out"/>
                                    )}
                                </MenubarTrigger>
                                <MenubarContent className={"dark:bg-gray-800/[0.5] bg-white/[0.8]"}>
                                    {mobileMenu.map((item, id) => (
                                        <MenubarItem key={id}
                                                     className={"text-gray-300 transition-all duration-200 hover:text-gray-900"}>{item.label}</MenubarItem>
                                    ))}
                                    <MenubarItem className={"flex justify-start"}><ThemeToggle type={"text"}/> </MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                        </Menubar>
                    </div> :
                    <>
                        {/*--desk-size-nav--*/}
                        <div className={"hidden md:flex "}>
                            <Menubar className={"dark:border-gray-900 dark:bg-gray-800 "}>
                                {menuItems.map((menu, i) => (
                                    <MenubarMenu key={i}>
                                        <MenubarTrigger
                                            className={"py-2 text-gray-500 transition-all duration-300 hover:dark:text-gray-400 hover:text-gray-800"}>{menu.label}</MenubarTrigger>
                                        <MenubarContent className={"dark:bg-gray-800/[0.5] bg-white/[0.8]"}>
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
        </div>
    )
}