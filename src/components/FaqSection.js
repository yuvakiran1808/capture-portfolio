import React from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { motion } from "framer-motion";
import { paraAnim } from "../animations";
const FaqSection = ()=>{

    return(
      <Faq>
          <h2>
              Any Questions? <span>FAQ</span>
          </h2>
          <AnimateSharedLayout>
          <Toggle title = "How Do I Start?">
          <div  className="question">
              <div className="answer">
                  <motion.p variants={paraAnim} initial = "hidden" animate = "show">Lorem ipsum dolor sit amet.</motion.p>
                  <motion.p variants={paraAnim} initial = "hidden" animate = "show" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, sunt.</motion.p>
              </div>
          </div>
          </Toggle>

          <Toggle title = "How Do I Start?">
          <div  className="question" >
              <div className="answer">
                  <motion.p variants={paraAnim} initial = "hidden" animate = "show">Lorem ipsum dolor sit amet.</motion.p>
                  <motion.p variants={paraAnim} initial = "hidden" animate = "show">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, sunt.</motion.p>
              </div>
          </div>
          </Toggle>
          <Toggle title = "How Do I Start?">
          <div  className="question" >
              <div className="answer">
                  <motion.p variants={paraAnim} initial = "hidden" animate = "show">Lorem ipsum dolor sit amet.</motion.p>
                  <motion.p variants={paraAnim} initial = "hidden" animate = "show">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, sunt.</motion.p> 
              </div>
          </div>
          </Toggle>
          <Toggle title = "How Do I Start?">
          <div  className="question" >
              <div className="answer">
                  <motion.p variants={paraAnim} initial = "hidden" animate = "show">Lorem ipsum dolor sit amet.</motion.p>
                  <motion.p variants={paraAnim} initial = "hidden" animate = "show">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, sunt.</motion.p>
              </div>
          </div>
          </Toggle>
          </AnimateSharedLayout>
      </Faq>
    );
};

const Faq = styled(About)`
display: block;
span{
    display: block;
}
h2{
    padding-bottom: 2rem;
    font-weight: lighter;

}
.faq-line{
    background: #cccccc;
    height: 0.2rem;
    width: 100%;
}
.question{
    padding: 2rem 0rem;
    cursor: pointer;
}
.answer{
    /* padding: 2rem 0rem; */
    p{
        padding: 1rem 0rem;
    }
}
`;

export default FaqSection;