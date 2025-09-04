import Navigation from '../components/ui/Navigation';
import Footer from '../components/ui/Footer';
import Card from '../components/common/Card';
import '../styles/styles.css';
import Header from '../components/ui/Header';
import { Link } from 'react-router-dom';

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
      <header>
        <Header/>
        <Navigation />
      </header>
      <main>
        <div className="center">
          <h4>A collection of various articles I've written in op-ed formats.</h4>
        </div>
      </main>
      <div className="cards-list">
        {articles.map((article, index) => (
          <Card
            key={index}
            title={
              <Link to={`/articles/${article.slug}`}>
                {article.title}
              </Link>
            }
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