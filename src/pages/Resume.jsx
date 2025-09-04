import React, { useState, useEffect } from 'react';
import Navigation from '../components/ui/Navigation';
import Footer from '../components/ui/Footer';
import Header from '../components/ui/Header';
import '../styles/styles.css';
import ReactMarkdown from 'react-markdown';

const resumePath = '/assets/Resume.md'; // Use absolute path

function Resume() {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch(resumePath)
      .then(res => res.text())
      .then(text => setMarkdown(text))
      .catch(() => setMarkdown('Failed to load resume.'));
  }, []);

  return (
    <div>
      <header>
        <Header/>
        <Navigation />
        <hr />
      </header>
      <div className="markdown-body">
        <ReactMarkdown>
          {markdown}
        </ReactMarkdown>
      </div>
      <Footer />
    </div>
  );
}

export default Resume;