import React,{useState} from "react";   
import { motion } from "framer-motion";
import { paraAnim } from "../animations";
const Toggle  = ({children,title})=>{
    const [toggle,setToggle] = useState(false);
    return(
         <motion.div layout  onClick={()=>setToggle(!toggle)}>
             <motion.h3 layout >{title}</motion.h3>
             { toggle ? children:""}
             <div className="faq-line"></div>
         </motion.div>
    )
}

export default Toggle;