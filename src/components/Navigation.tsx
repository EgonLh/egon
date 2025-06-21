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
import {FileText} from "lucide-react";

// -- navigation items -- //
const menuItems = [
    {
        label: "About",
        content: [
            {type: "item", label: "About me", link: `/about`},
            {type: "separator"},
            {type: "item", label: "Resume / CV", link: `/about/#CV`},
        ],
    },
    {
        label: "Education",
        content: [
            {type: "item", label: "Progress Nodes", link: `/education`},
            {type: "separator"},
            {type: "item", label: "HNC (Pearson) in Software Engineering", link: `/education#journey`},
            {type: "item", label: "HND in Software Engineering", link: `/education/#journey`},
            {type: "separator"},
            {type: "item", label: "BSc in Computing – University of Greenwich", link: `/education#journey`},

        ],
    },
    {
        label: "Projects",
        content: [
            {type: "item", label: "ShowCases", link: `/projects`},
            {type: "separator"},
            {type: "item", label: "Development", link: `/projects/#category`},
            {type: "item", label: "AI / ML", link: `/projects/#category`},
            {type: "item", label: "Academic projects", link: `/projects/#category`},
            {type: "separator"},
            {type: "item", label: "Learning Logs", link: `/projects/#category`},
        ],
    },
    {
        label: "Skills",
        content: [
            {type: "item", label: "Areas of Knowledge", link: `/skills`},
            {type: "separator"},
            {type: "item", label: "Programming Languages", link: `/skills/#pglang`},
            {type: "item", label: "Frontend Frameworks & Libraries", link: `/skills/#fe`},
            {type: "item", label: "Backend Technologies & Databases", link: `/skills/#be`},
            {type: "separator"},
            {type: "item", label: "Fundamental Knowledge", link: `/skills/#knowledge`},
            {type: "separator"},
            {type: "item", label: "Artificial Intelligence & Machine Learning", link: `/skills/#ai`},
            {type: "item", label: "Tools", link: `/skills/#tools`}
        ]
        ,
    },
];
const mobileMenu = [
    {label: "About", link: `/about`},
    {label: "Skill", link: `/skills`},
    {label: "Education", link: `/education`},
    {label: "Project", link: `/projects`}
];

export default function Navigation() {
    const isMobile = useIsMobile();
    const handleRefresh = () => {
        window.location.reload();
    };

    return (<div className={"container mx-auto sticky sticky top-0 z-[9999]"}>
            <div className={" p-3 flex justify-between  my-3  lg:m-0 "}>
                {/* -- my-img -- */}
                <button
                    onClick={handleRefresh}
                    className="md:flex items-center justify-center border rounded font-mono w-12 h-13 p-1 bg-white/30 dark:bg-gray-200/10 backdrop-blur-md">
                    <a href={"/"}>
                        <img
                            src="/assets/my-img.png"
                            alt="Profile"
                            className="w-full h-full object-contain rounded "
                        />
                    </a>
                </button>
                {/*--mobile and laptop menus*/}
                {isMobile ? <div>
                        {/*--mobile-size-nav--*/}
                        <Menubar className={"dark:border-gray-600 dark:bg-gray-800 "}>
                            <MenubarMenu>
                                <MenubarTrigger
                                    className={"p-1 text-gray-500 transition-all duration-300 hover:dark:text-gray-700 transition-all duration-300 ease-in-out"}
                                    >
                                        <FileText className="w-7 h-7  transition-all duration-300 ease-in-out"/>
                                </MenubarTrigger>
                                <MenubarContent className={"dark:bg-gray-800/[0.5] bg-white/[0.8]"}>
                                    {mobileMenu.map((item, id) => (
                                        <a href={item?.link}><MenubarItem key={id}
                                                                          className={"text-gray-300 transition-all duration-200 hover:text-gray-900"}>
                                            {item.label}
                                        </MenubarItem>
                                        </a>
                                    ))}
                                    <MenubarItem className={"flex justify-start"}><ThemeToggle type={"text"}/>
                                    </MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                        </Menubar>
                    </div> :
                    <>
                        {/*--desk-size-nav--*/}
                        <div className={"hidden md:flex "}>
                            <Menubar
                                className="dark:border-gray-900 dark:bg-gray-800 bg-white/30 dark:bg-gray-800/30 backdrop-blur-md">
                                {menuItems.map((menu, i) => (
                                    <MenubarMenu key={i}>
                                        <MenubarTrigger
                                            className={"py-2 text-gray-500 transition-all duration-300 hover:dark:text-gray-400 hover:text-gray-800"}>{menu.label}</MenubarTrigger>
                                        <MenubarContent className={"dark:bg-gray-800/[0.5] bg-white/[0.8]"}>
                                            {menu.content.map((item, j) =>
                                                item.type === "separator" ? (
                                                    <MenubarSeparator key={j}/>
                                                ) : (
                                                    <a href={item?.link}>
                                                        <MenubarItem key={j}>
                                                            {item.label}
                                                        </MenubarItem>
                                                    </a>
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