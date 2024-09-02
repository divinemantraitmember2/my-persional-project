import { useState, useEffect } from 'react';

const InfiniteScrollArticles = ({ articles }) => {
  const [displayedArticles, setDisplayedArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [index, setIndex] = useState(0);
  const [chunkSize, setchunkSize] = useState(2);
//   const chunkSize = 2; // Number of articles to load at a time
  const [hasMore, setHasMore] = useState(true); // To track if more data is available

  useEffect(() => {
    // Load initial chunk of articles
    loadMoreArticles();
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (index > 0) {
    loadMoreArticles();
    }
  }, [index]);

  const loadMoreArticles = () => {
    if (loading || !hasMore) return;
    setLoading(true);
    const nextIndex = index + chunkSize;
    const nextArticles = articles.slice(index, nextIndex);

    if (nextArticles.length === 0) {
      setHasMore(false); // No more articles to load
      setchunkSize(0)
    } else {
      setDisplayedArticles(prevArticles => [...prevArticles, ...nextArticles]);
      setIndex(nextIndex);
    }
    setLoading(false);
  };

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 && !loading && hasMore) {
      loadMoreArticles();
    }
  };

  return (
    <div>
      <h1>Articles</h1>
      {displayedArticles.length === 0 && <p>Loading...</p>}
      <ul>
        {displayedArticles.length > 0 ? (
          displayedArticles.map(article => (
            <li key={article.id}>
              <h2>{article.title}</h2>
              <p>{article.content}</p>
            </li>
          ))
        ) : (
          <p>Content Not Found</p>
        )}
      </ul>
      {loading && <p>Loading more articles...</p>}
    </div>
  );
};

export default InfiniteScrollArticles;
