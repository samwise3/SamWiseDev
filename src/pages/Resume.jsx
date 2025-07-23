import { useState, Document, pdfjs } from 'react';
import Navigation from '../components/ui/Navigation';
import Footer from '../components/ui/Footer';
import Header from '../components/ui/Header';
import '../styles/styles.css';

function Resume() {

  return (
    <div>
       <header>
        <Header/>
        <Navigation />
        <hr />
      </header>  
      <iframe 
        src="src/assets/Resume.pdf" 
        width="100%" 
        height="600px"
        type="application/pdf">
        <p>Your browser doesn't support PDFs. 
          <a href="src/assets/Resume.pdf">Download the PDF</a>
        </p>
      </iframe>
      <Footer />
    </div>
  );
}

export default Resume;