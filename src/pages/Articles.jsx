import Footer from '../components/ui/Footer';
import Card from '../components/common/Card';
import '../styles/styles.css';
import Header from '../components/ui/Header';

export const articles = [
    {
      title: "Reformation During the Resurgence of Industrial Policy Under the Biden Administration",
      slug: 'industrial-policy',
      src: "/assets/articles/IndustrialPolicy.md",
      url: "https://virginiapolitics.org/online/2024/4/15/reformation-during-the-resurgence-of-industrial-policy-under-the-biden-administration?rq=green%20energy%20",
      date: "April 15, 2024",
      image: "/images/biden.jpg",
      description: "An analysis of industrial policy and green energy under the Biden administration."
    },
    {
      title: "Shedding Light on the Dark Side of Congressional Stock Trading",
      slug: 'congressional-stock-trading',
      src: "/assets/articles/StockTrading.md",
      url: "https://virginiapolitics.org/online/2023/5/15/shedding-light-on-the-dark-side-of-congressional-stock-trading?rq=brooks",
      date: "May 15, 2023",
      image: "/images/congress.png",
      description: "A look into congressional stock trading and its implications."
    },
    {
      title: "Green Energy Means a Greener Economy",
      slug: 'green-economy',
      src: "/assets/articles/GreenEconomy.md",
      //url: "https://virginiapolitics.org/online/2023/5/15/shedding-light-on-the-dark-side-of-congressional-stock-trading?rq=brooks",
      //date: "May 15, 2023",
      image: "/images/green-energy.jpg",
      description: "How investing in green technology can lead to economic rewards."
    }
  ];

function Articles() {

  return (
    <div className="page-container">
      <Header/>
      <main className="page-main">
        <div className="page-heading">
          <p className="page-eyebrow">Writing</p>
          <h1>Articles</h1>
          <p>Essays on policy, energy, and economics.</p>
        </div>
        <div className="cards-list">
          {articles.map((article) => (
            <Card
              key={article.slug}
              title={article.title}
              to={`/articles/${article.slug}`}
              description={article.description}
              meta={
                <>
                  {article.date && <span className="article-date">{article.date}</span>}
                  {article.url && (
                    <a href={article.url} target="_blank" rel="noopener noreferrer">Published version ↗</a>
                  )}
                </>
              }
              imgsrc={article.image}
              alt={article.title}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Articles;
