import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {useLocation} from "react-router-dom";
import {MovieState} from "../movieState";

//animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animations";



const MovieDetails = ()=>{
    const location = useLocation();
    const url = location.pathname;
    const [movies,setMovies] = useState(MovieState);
    const [movie,setMovie] = useState(null);

    //UseEffect
    useEffect(()=>{
        const currentMovie = movies.filter((stateMovie)=>
         stateMovie.url===url
         );
         setMovie(currentMovie[0]);
    },[movies,url]);

  return(
      <>
      {movie &&(
      <Details exit="exit" variants={pageAnimation} initial = "hidden" animate = "show">
         <HeadLine>
              <h2>{movie.title}</h2>
              <img src={movie.mainImg} alt="movie" />
         </HeadLine>
         <Awards>
             {movie.awards.map((award)=>(<Award title ={award.title} description = {award.description} key = { award.title}/>))}
         </Awards >
         <ImageDisplay>
             <img src={movie.secondaryImg} alt="secondimage" />
         </ImageDisplay>
      </Details>
     )}
      </>
  )
};



const Details = styled(motion.div)`
    color: white;
`;
const HeadLine = styled.div`
    min-height: 100vh;
    padding-top: 25vh;
    position: relative;
    h2{
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%,-10%);
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;
const Awards = styled.div`
    min-height: 80vh;
    display: flex;
    margin: 5rem ;
    align-items: center;
    justify-content: space-evenly;
`;
const AwardStyle = styled.div`
  padding  : 2rem ;
  h3{
      font-size: larger;
  }
  p{
      font-size: 1rem;
      padding: 2rem 0rem;
  }
  .line{
      width: 40%;
      background: #23d997;
      height: 0.4rem;
      margin: 1rem 0rem;
  }
`;
const ImageDisplay = styled.div`
   min-height:50vh;
  img{
      width: 100%;
      height: 100vh;
      object-fit: cover;
  }
`;


const Award = ({title,description})=>{
    return(
           <AwardStyle>
               <h3>{title}</h3>
                <div className="line">
              
                </div>
                <p>{description}</p>
           </AwardStyle>

    );
}

export default MovieDetails;