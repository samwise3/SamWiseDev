import Home from './pages/Home';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
// import AboutMe from './pages/AboutMe';
import Articles from './pages/Articles';
import { articles } from './pages/Articles';
import ArticlePage from './pages/ArticlePage';

import React from 'react';

export const navBarRoutes = [
  { path: '/', name: 'Home', element: React.createElement(Home) },
  { path: '/resume', name: 'Resume', element: React.createElement(Resume) },
  { path: '/articles', name: 'Articles', element: React.createElement(Articles) },
  { path: '/projects', name: 'Projects', element: React.createElement(Projects) },
]
export const routes = [
  ...navBarRoutes,
  ...articles.map(article => ({
    path: `/articles/${article.slug}`,
    name: article.title,
    element: React.createElement(ArticlePage, { ...article })
  }))
];