import React from "react";
import home1 from '../img/home1.png';
import styled from "styled-components";
//import styles
import { About,Description,Image,Hide } from "../styles";
//Framer motion
import {motion} from "framer-motion"; 
import { titleAnim,fade,photoAnim } from "../animations";
import Wave from "./Wave";
const AboutSection = ()=>{
    //   const titleAnim = {
    //       hidden : {opacity : 0},
    //       show : {opacity : 1,transition : {duration : 2}},

    //   };
    //   const container = {
    //       hidden : {x : 100},
    //       show : { x : 0, transition: {duration : 0.75 ,staggerChildren :1,} },
    //   };
    return(
        <About>
            <Description>
                <motion.div  className="title">
                    <Hide>
                        <motion.h2 variants={titleAnim}>We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim} >your <span>dreams</span> come </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim} >true</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>Contact us for any photography</motion.p>
                <motion.button variants={fade}>Contact Us</motion.button>
            </Description>
            <Image >
                <motion.img src={home1} alt="Cameraman" variants={photoAnim} />
            </Image>
            <Wave />
        </About>
    );
};

//styled components



export default AboutSection;