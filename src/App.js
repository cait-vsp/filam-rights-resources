import React from 'react';
import Header from './components_proj/Header';
import Home from './components_proj/Home';
import About from './components_proj/About';
import Contact from './components_proj/Contact';
import ResourcePage from "./components_proj/ResourcePage";
import { Routes, Route } from 'react-router-dom';



export default function App()
{
  return(
    <>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/resources" element={<ResourcePage/>}/>
        </Routes>
    </>

    
  );
}