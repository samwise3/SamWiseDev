import '../styles/styles.css';

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

    return (
        <div className='article-page-content'>
            <h2>{ArticlePageParams.title}</h2>
            <iframe
                src={ArticlePageParams.src}
                width='100%'
                height='600px'
            ></iframe>
        </div>

    )

}

export default Article;