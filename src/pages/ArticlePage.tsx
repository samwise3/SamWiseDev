import '../styles/styles.css';
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
        <div className='page-container'>
            <Header/>
            <main className="page-main">
                <div className="article-header">
                    <Link className="back-link" to="/articles">← All articles</Link>
                    <h1 className="article-title">{ArticlePageParams.title}</h1>
                    {(ArticlePageParams.date || ArticlePageParams.url) &&
                        <div className="card-meta">
                            {ArticlePageParams.date && <span className="article-date">{ArticlePageParams.date}</span>}
                            {ArticlePageParams.url &&
                                <a href={ArticlePageParams.url} target="_blank" rel="noopener noreferrer">
                                    View published article ↗</a>
                            }
                        </div>
                    }
                </div>
                {ArticlePageParams.image &&
                    <img src={ArticlePageParams.image} alt={ArticlePageParams.title} className="article-page-image"/>
                }
                <div className='markdown-body'>
                    <ReactMarkdown>
                        {markdown}
                    </ReactMarkdown>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Article;