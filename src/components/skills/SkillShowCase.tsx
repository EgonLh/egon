"use client"
import DecryptedText from "@/components/ui/DecryptedText/DecryptedText";

const skills = [
    {
        topic: "Languages",
        skills: [
            { name: "JavaScript", description: "A versatile, high-level programming language used extensively for building dynamic and interactive web applications on both the client-side and server-side with environments like Node.js. It's the backbone of modern frontend development." },
            { name: "TypeScript", description: "A statically typed superset of JavaScript that enhances developer productivity and code quality through type safety, better IDE support, and early error detection in large-scale JavaScript applications." },
            { name: "Python", description: "A powerful and readable language often used in data science, automation, web development, and machine learning. Known for its extensive libraries (e.g., Pandas, NumPy, scikit-learn) and simplicity in writing clean code." },
            { name: "HTML", description: "The standard markup language used to create and structure content on the web. It defines the structure of webpages using elements like headings, paragraphs, links, and forms." },
            { name: "CSS", description: "A style sheet language used for describing the visual presentation of web pages. With modern tools like Flexbox and Grid, CSS enables responsive and elegant UI designs across various devices." },
        ],
    },
    {
        topic: "Frontend Frameworks & Libraries",
        skills: [
            { name: "React.js", description: "A declarative, component-based JavaScript library for building user interfaces. Used to develop dynamic web applications with reusable UI components and efficient rendering through a virtual DOM." },
            { name: "Next.js", description: "A React framework that supports server-side rendering (SSR), static site generation (SSG), and built-in routing. Ideal for creating fast, SEO-friendly, and scalable web apps." },
            { name: "Redux Toolkit (RTK)", description: "A modern, concise toolset for managing global state in React applications. RTK simplifies Redux logic with less boilerplate and built-in best practices." },
            { name: "React Query", description: "A powerful data-fetching library for React that handles server state, caching, synchronization, and background updates, improving performance and user experience." },
            { name: "Tailwind CSS", description: "A utility-first CSS framework that speeds up UI development by using pre-defined utility classes directly in markup, encouraging rapid prototyping and consistent design systems." },
            { name: "Bootstrap", description: "A popular CSS framework offering pre-styled components and a responsive grid system, widely used to build mobile-first, responsive websites quickly." },
        ],
    },
    {
        topic: "Backend & API",
        skills: [
            { name: "Express.js", description: "A minimalist and flexible Node.js web application framework used for building RESTful APIs, middleware, and backend services. Enables rapid backend development with easy routing and HTTP request handling." },
        ],
    },
    {
        topic: "Database",
        skills: [
            { name: "MongoDB", description: "A document-oriented NoSQL database that stores data in flexible, JSON-like documents. Suitable for applications requiring scalability, schema-less data, and quick development iterations." },
        ],
    },
    {
        topic: "Programming Concepts",
        skills: [
            { name: "Object-Oriented Programming (OOP)", description: "A programming paradigm based on the concept of objects, which encapsulate data and behavior. Used to design modular, reusable, and maintainable code structures." },
            { name: "Functional Programming (FP)", description: "An approach to programming that treats computation as the evaluation of mathematical functions, emphasizing immutability, pure functions, and higher-order functions to reduce side effects." },
            { name: "Asynchronous Programming", description: "A programming technique that enables non-blocking execution using callbacks, Promises, or async/await to handle time-consuming tasks like API calls or file I/O efficiently." },
            { name: "MVC Architecture", description: "A software design pattern that separates application logic into three interconnected components—Model, View, and Controller—promoting organized, maintainable, and testable code." },
        ],
    },
    {
        topic: "AI / Machine Learning",
        skills: [
            { name: "Machine Learning", description: "Hands-on experience with training predictive models using Python libraries like scikit-learn. Involved in data preprocessing, model selection, evaluation, and deployment for real-world use cases." },
            { name: "AI Concepts", description: "Understanding of core concepts such as supervised and unsupervised learning, overfitting, feature engineering, and the end-to-end machine learning pipeline including experimentation and optimization." },
        ],
    },
    {
        topic: "Tools & Utilities",
        skills: [
            { name: "Git & GitHub", description: "Version control system and collaboration platform used to track code changes, manage branches, resolve merge conflicts, and collaborate with teams in open-source and professional projects." },
            { name: "VS Code / WebStorm", description: "Powerful code editors and IDEs that provide robust tooling, extensions, and debugging capabilities to improve development speed and code quality across various programming environments." },
            { name: "Postman", description: "An API development tool used for sending HTTP requests, testing RESTful endpoints, documenting APIs, and automating workflows through collections and environments." },
            { name: "NPM / Yarn", description: "JavaScript package managers used for managing project dependencies, running scripts, and maintaining modular and consistent codebases in large-scale applications." },
            { name: "Notion", description: "JavaScript package managers used for managing project dependencies, running scripts, and maintaining modular and consistent codebases in large-scale applications." },
            { name: "Vercel", description: "JavaScript package managers used for managing project dependencies, running scripts, and maintaining modular and consistent codebases in large-scale applications." },

        ],
    },
];

export default function SkillShowCase(){
    return (<div>
        <div className={" my-9 p-2 "}>
            <div className={"text-4xl"}>Checkout the technologies I familiar</div>
            <div className={"text-xs my-3"}><DecryptedText text="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. !"  speed={100}
                                                           maxIterations={20}
                                                           characters="ABCD1234!?"
                                                           className="revealed"
                                                           parentClassName="all-letters"
                                                           encryptedClassName="encrypted" /><br/></div>
            <div className={"flex justify-center flex-col w-full  py-4 items-center"}>


            {/*    test*/}
                {
                    skills.map((skill,index)=>(
                        <div className={"w-4/5 grid grid-cols-2 mb-3 "}>
                            <div className={"hover:mx-4 transition-all duration-300  "}><li><DecryptedText text={skill.topic}  speed={100}
                                                                                                                 maxIterations={20}
                                                                                                                 characters="ABCD1234!?"
                                                                                                                 className="revealed"
                                                                                                                 parentClassName="all-letters"
                                                                                                                 encryptedClassName="encrypted" /></li></div>
                            <div>{skill.skills.map((item,index)=>
                                (<div className={"mb-4 hover:border transition-all duration-300 hover:p-3 rounded"}>
                                    <div className={"text-lg text-gray-300 hover:text-gray-800 transition-all duration-500 font-semibold font-mono"}>{item.name}</div>
                                    <div className={"text-xs text-justify "}>{item.description}</div>
                                </div>)
                            )}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>)
}
