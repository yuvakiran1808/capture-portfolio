import React from "react";
//import component pages
import AboutSection from "../components/AboutSection";
import FaqSection from "../components/FaqSection";
import ServicesSection from "../components/ServicesSection";
//animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animations";



const AboutUs = ()=>{
    return(
     <motion.div exit="exit" variants={pageAnimation} initial = "hidden" animate = "show" >
        <AboutSection />
       <ServicesSection />
       <FaqSection />
     </motion.div>
    );
};

export default AboutUs;

