import React from "react";
//Global style
import GlobalStyle from "./components/GlobalStyle";
//import pages
import AboutUs from './pages/AboutUs';
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
//import nav
import Nav from './components/Nav';
//import from router
import {Route, Routes,useLocation} from 'react-router-dom';
import MovieDetails from "./pages/MovieDetails";
//animatons
import { AnimatePresence } from "framer-motion";
function App() {
  const location  = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
      <Routes location={location} key = {location.pathname} >
      <Route path="/" element = { <AboutUs />} >
          
      </Route>
      <Route path="/work" element = { <OurWork />} >
           
      </Route>
      <Route path="/work/:id" element ={ <MovieDetails /> } >  </Route>
      <Route path="/contact" element = { <ContactUs />} >  
      </Route>
      </Routes>
      </AnimatePresence> 
    </div>
  );
}

export default App;
