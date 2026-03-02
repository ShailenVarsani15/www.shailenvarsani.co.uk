import React, { useState, useEffect } from 'react';
import './news.css'
import './global.css'

const TechCrunchNews = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // 1. Add state for pagination
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
        );
        const data = await response.json();
        if (data.articles) setArticles(data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  // 2. Function to increase the count
  const loadMore = () => {
    setVisibleCount(prevCount => prevCount + 4);
  };

  if (loading) return <p>Loading TechCrunch News...</p>;

  return (
    <div className="flex justify-around columns-2 news">
        <div className='introTitle content-center'>
            <p>See the latest news in the world of</p>
            <p><span className="animated-underline">Technology</span>.</p>
        </div>
        {articles.length > 0 ? (
        <>
            <div className="articles-list">
                {articles.slice(0, visibleCount).map((article, index) => (
                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="read-article animated-underline">  
                        <div key={index} className="flex article-card">
                            <div className="article-content">
                                <p className="author">{article.author || 'TechCrunch Staff'}</p>
                                <h3 className='title'>{article.title}</h3>
                                <p className="description">
                                    {article.description?.length > 150 ? `${article.description.slice(0, 150)}...` : article.description}
                                </p>
                            </div>
                        </div>
                    </a>
                ))}
                {visibleCount < articles.length && (
                    <button onClick={loadMore} className="load-more-btn">Load More</button>
                )}
            </div>
        </>
        ) : (
            <p>No articles found.</p>
        )}
    </div>
  );
};

export default TechCrunchNews;