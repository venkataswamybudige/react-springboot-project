import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { ExportTopBooks } from './layouts/HomePage/ExploreTopBooks';
import { Carousel } from './layouts/HomePage/Carousel';

function App() {
  return (
    <div>
    <Navbar></Navbar>
    <ExportTopBooks></ExportTopBooks>
    <Carousel></Carousel>
    </div>
    
    
  );
}

export default App;
