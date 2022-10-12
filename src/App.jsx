import React from "react";
import { MenuNav } from "./components/MenuNav";
import Blog from "./pages/Blog";
import Projets from "./pages/Projets";
import Team from "./pages/Team";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Error from "./pages/Error";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";
import Footer from "./components/Footer";
import NewCourse from './components/courses/newCourse'
import AllCourses from "./components/courses/allCourses";


function App () {
  return <BrowserRouter>
         <Box pt='100'>
         <MenuNav/>
         <Routes>
            <Route exact  path="/" element={ <Home/> }/>
            <Route path="/blog" element={ <Blog/> }/>
            <Route path="/projets" element={ <Projets/> }/>
            <Route path="/team" element={ <Team/> }/>
            <Route path="/contacts" element={ <Contacts/> }/>
            /** Courses routes */
            <Route path="/courses" element={ <AllCourses/> }/>
            <Route path="/courses/new" element={ <NewCourse/> }/>
            <Route path="*" element={ <Error/> }/>
         </Routes>
         <Footer/>
           </Box>
         </BrowserRouter>
}

export default App;
