"use client"
import React from "react";
import {Github, Instagram, Linkedin, Twitter} from "lucide-react";

export default function MyInfo(){
    return (<div className={"flex border w-5/6 rounded my-12 justify-center flex-col items-center"}>
        <div className={" flex w-full"}>
            <div className={"w-fit flex justify-start p-10 flex-col items-center bg-slate-300 "}>
                <img src={"/assets/profile.png"}
                     className={"  rounded shadow min-h-80 max-w-70 min-w-80 min-h-80 max-h-90 w-80"}/>
                     <div className={"w-full border mt-3 rounded p-3"}>
                        Download My CV
                         <div>
                             <button className={"p-1 text-xs bg-black hover:bg-gray-900 text-white rounded"}>CV</button>
                         </div>
                     </div>
            </div>
            <div className={"w-full bg-slate-300 ms-10 text-base/8 text-justify ms-3 flex justify-between flex-col"}>
                <div className={"text-3xl font-semiboold mb-3"}>Hello, I am</div>
                <div className={"text-5xl font-semiboold mb-3"}>AI/ML Engineer .</div>
                <div className={"text-5xl font-semiboold mb-3"}>CS Enthusiastic .</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque dolores est omnis possimus quibusdam quidem quisquam reprehenderit. Alias aspernatur autem, dolor illo non officia possimus quo quod, sed, soluta voluptas!
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque dolores est omnis possimus quibusdam quidem quisquam reprehenderit. Alias aspernatur autem, dolor illo non officia possimus quo quod, sed, soluta voluptas!
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque dolores est omnis possimus quibusdam quidem quisquam reprehenderit. Alias aspernatur autem, dolor illo non officia possimus quo quod, sed, soluta voluptas!
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto at, consequatur doloremque facere facilis fugiat incidunt iusto, molestiae non omnis porro provident quidem repudiandae sapiente soluta, ut vero voluptates!
                </p>
                <div className={"flex justify-end mt-8 "}>
                    <Twitter className={"size-7 ms-3 fill-black text-white hover:text-gray-100 transition-all duration-300 hover:fill-gray-300"}/>
                    <Instagram className={"size-7 ms-3 fill-black text-white hover:text-gray-100 transition-all duration-300 hover:fill-gray-300"}/>
                    <Linkedin className={"size-7 ms-3 fill-black text-white hover:text-gray-100 transition-all duration-300 hover:fill-gray-300"}/>
                    <Github className={"size-7 ms-3 fill-black text-white hover:text-gray-100 transition-all duration-300 hover:fill-gray-300"}/>
                </div>
            </div>
        </div>

    </div>)
}