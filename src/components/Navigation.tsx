import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"
import ThemeToggle from "@/components/theme&effects/ThemeToggle";
const menuItems = [
    {
        label: "About",
        content: [
            { type: "item", label: "Intro" },
            { type: "item", label: "Social Media" },
            { type: "separator" },
            { type: "item", label: "Contact" },
            { type: "item", label: "Resume / CV" },
        ],
    },
    {
        label: "Education",
        content: [
            { type: "item", label: "HNC (Pearson) in Software Engineering" },
            { type: "item", label: "HND in Software Engineering" },
            { type: "item", label: "BSc in Computing – University of Greenwich" },
            { type: "separator" },
            { type: "item", label: "Certifications" },
        ],
    },
    {
        label: "Projects",
        content: [
            { type: "item", label: "Machine Learning" },
            { type: "item", label: "Website Development" },
            { type: "item", label: "AI Tools / Automation" },
            { type: "separator" },
            { type: "item", label: "Academic Projects" },
            { type: "item", label: "Freelance / Side Projects" },
        ],
    },
    {
        label: "Skills",
        content: [
            { type: "item", label: "Languages & Frameworks" },
            { type: "item", label: "AI & Data Science" },
            { type: "separator" },
            { type: "item", label: "DevOps / MLOps" },
            { type: "item", label: "Cloud & Infrastructure" },
        ],
    },
    {
        label: "Blog",
        content: [
            { type: "item", label: "Tech Articles" },
            { type: "item", label: "Learning Journey" },
            { type: "item", label: "Tips & Resources" },
        ],
    },
];

export default function Navigation(){
    return(<div className={" p-3 flex justify-between container "}>
            <div className={"dark:bg-white  flex items-center border rounded font-mono px-1"}>
                Egon
            </div>
            <div>
                <Menubar className={"dark:border-gray-600 dark:bg-gray-800"}>
                    {menuItems.map((menu, i) => (
                        <MenubarMenu key={i}>
                            <MenubarTrigger>{menu.label}</MenubarTrigger>
                            <MenubarContent>
                                {menu.content.map((item, j) =>
                                    item.type === "separator" ? (
                                        <MenubarSeparator key={j} />
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
        </div>
    )
}