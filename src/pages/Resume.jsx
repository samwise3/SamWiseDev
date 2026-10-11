import React, { useState, useEffect } from 'react';
import Footer from '../components/ui/Footer';
import Header from '../components/ui/Header';
import '../styles/styles.css';
import ReactMarkdown from 'react-markdown';

const resumePath = '/assets/Resume.md'; 

function Resume() {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch(resumePath)
      .then(res => res.text())
      .then(text => setMarkdown(text))
      .catch(() => setMarkdown('Failed to load resume.'));
  }, []);

  return (
    <div className="page-container">
      <Header/>
      <main className="page-main">
        <div className="markdown-body resume-body">
          <ReactMarkdown>
            {markdown}
          </ReactMarkdown>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Resume;
