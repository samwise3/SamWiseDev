import Home from './pages/Home';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
// import AboutMe from './pages/AboutMe';
import Articles from './pages/Articles';

import React from 'react';

export const routes = [
  { path: '/', name: 'Home', element: React.createElement(Home) },
  // { path: '/about', name: 'About Me', element: React.createElement(AboutMe) },
  { path: '/resume', name: 'Resume', element: React.createElement(Resume) },
  { path: '/articles', name: 'Articles', element: React.createElement(Articles) },
  { path: '/projects', name: 'Projects', element: React.createElement(Projects) },
];