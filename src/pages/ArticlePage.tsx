import '../styles/styles.css';
import Navigation from '../components/ui/Navigation';
import Footer from '../components/ui/Footer';
import Header from '../components/ui/Header';
import ReactMarkdown from 'react-markdown';
import { useEffect } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

interface ArticlePageProps{
    title: string;
    src: string;
    url?: string; // external url for published articles
    date?: string;
    image?: string;
    description: string;
}
/*
* renders a given article 
* pass an ArticlePageCard as a param
*/
export function Article(ArticlePageParams): React.ReactElement {
const [markdown, setMarkdown] = React.useState<string>('');
  
    useEffect(() => {
        fetch(ArticlePageParams.src)
        .then((res) => res.text())
        .then((text) => setMarkdown(text));
    }, [ArticlePageParams.src]);
    
    return (
        <div className='article-page-content'>
            <header>
                <Header/>
                <Navigation />
            </header>
            <h1 className="article-title">{ArticlePageParams.title}</h1>
            {ArticlePageParams.url && 
                <Link className="custom-link" to={ArticlePageParams.url} target="_blank" rel="noopener noreferrer">
                    View Published Article</Link>
            }
            <img src={ArticlePageParams.image} alt={ArticlePageParams.title} className="article-page-image"/>
            <div className='markdown-body'>
                <ReactMarkdown>
                    {markdown}
                </ReactMarkdown>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>

    )
}

export default Article;