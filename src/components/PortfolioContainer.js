import React, { useState } from 'react';
import Navbar from './Navbar.js';
import Homepage from './pages/Homepage.js';
import About from './pages/About.js';
import Works from './pages/Works.js';
import Contact from './pages/Contact.js';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Homepage');

  // TODO: Add a comment describing the functionality of this method
  const renderPage = () => {
    if (currentPage === 'Homepage') {
      return <Homepage />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Works') {
      return <Works />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* // TODO: Add a comment describing what we are passing as props */}
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      {renderPage()}
    </div>
  );
}