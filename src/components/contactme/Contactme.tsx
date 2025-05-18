"use client"
import DotGridBackground from "@/components/ui/DotBackground";
import {motion} from "framer-motion";

export default  function Contact(){

    return (<motion.div initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                       className={"border w-full rounded my-4 "}>
        <DotGridBackground/>
    </motion.div>)
}