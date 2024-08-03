import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { ExportTopBooks } from './layouts/HomePage/Components/ExploreTopBooks';
import { Carousel } from './layouts/HomePage/Components/Carousel';
import { Heros } from './layouts/HomePage/Components/Heros';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { LibraryServices } from './layouts/HomePage/Components/LibraryServices';
import { HomePage } from './layouts/HomePage/HomePage';

export const App = () => {
  return (
    <div>
    <Navbar></Navbar>
    <HomePage></HomePage>
    <Footer></Footer>
    </div>
    
    
  );
}

