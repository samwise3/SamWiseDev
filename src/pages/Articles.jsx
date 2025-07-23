import Navigation from '../components/ui/Navigation';
import Footer from '../components/ui/Footer';
import '../styles/styles.css';

function Articles() {
  const articles = [
    {
      title: "Reformation During the Resurgence of Industrial Policy Under the Biden Administration",
      url: "https://virginiapolitics.org/online/2024/4/15/reformation-during-the-resurgence-of-industrial-policy-under-the-biden-administration?rq=green%20energy%20",
      date: "April 15, 2024",
      image: "/images/biden.jpg",
    },
    {
      title: "Shedding Light on the Dark Side of Congressional Stock Trading",
      url: "https://virginiapolitics.org/online/2023/5/15/shedding-light-on-the-dark-side-of-congressional-stock-trading?rq=brooks",
      date: "May 15, 2023",
      image: "/images/congress.png",
    }
  ];

  return (
    <div className="page-container">
      <header>
        <h1>Articles</h1>
        <Navigation />
        <hr />
      </header>

      <main className="articles-container">
        {articles.map((article, index) => (
          <a 
            key={index} 
            href={article.url} 
            className="article-card"
            target="_blank" 
            rel="noopener noreferrer" 
          >
            <article>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <img 
                src={article.image} 
                alt="Article Image"
                className="article-image"
              />
              <span className="article-date">{article.date}</span>
            </article>
          </a>
        ))}
      </main>

      <Footer />
    </div>
  );
}

export default Articles;