import Navigation from '../components/ui/Navigation';
import Footer from '../components/ui/Footer';
import Card from '../components/common/Card';
import '../styles/styles.css';

function Articles() {
  const articles = [
    {
      title: "Reformation During the Resurgence of Industrial Policy Under the Biden Administration",
      url: "https://virginiapolitics.org/online/2024/4/15/reformation-during-the-resurgence-of-industrial-policy-under-the-biden-administration?rq=green%20energy%20",
      date: "April 15, 2024",
      image: "/images/biden.jpg",
      description: "An analysis of industrial policy and green energy under the Biden administration."
    },
    {
      title: "Shedding Light on the Dark Side of Congressional Stock Trading",
      url: "https://virginiapolitics.org/online/2023/5/15/shedding-light-on-the-dark-side-of-congressional-stock-trading?rq=brooks",
      date: "May 15, 2023",
      image: "/images/congress.png",
      description: "A look into congressional stock trading and its implications."
    }
  ];

  return (
    <div className="page-container">
      <header>
        <h1>Articles</h1>
        <Navigation />
        <hr />
      </header>

      <div className="cards-list">
        {articles.map((article, index) => (
          <Card
            key={index}
            title={article.title}
            description={
              <>
                {article.description}
                <br />
                <span className="article-date">{article.date}</span>
              </>
            }
            src={article.url}
            imgsrc={article.image}
            alt={article.title}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Articles;