import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { ExportTopBooks } from './layouts/HomePage/ExploreTopBooks';

function App() {
  return (
    <div>
    <Navbar></Navbar>
    <ExportTopBooks></ExportTopBooks>
    </div>
    
    
  );
}

export default App;
