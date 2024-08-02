// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import TreatmentOptions from './components/TreatmentOptions';
import ConnectDoctor from './components/ConnectDoctor';
import DermAiChatbot from './components/DermAiChatbot';
import Diagnosis from './components/Diagnosis';
import FileUpload from './components/FileUpload';
import SearchResults from './components/SearchResult';// Import the new upload page component
import './styles/global.css';
import './styles/navbar.css'; // Import global styles if needed

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/treatment-options" element={<TreatmentOptions />} />
            <Route path="/connect-doctor" element={<ConnectDoctor />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dermai-chatbot" element={<DermAiChatbot />} />
            <Route path="/diagnosis" element={<Diagnosis />} />
            <Route path="/upload" element={<FileUpload />} /> 
            <Route path="/search" element={<SearchResults />} />{/* Only show FileUpload here */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;






