// pages/api/articles.js
export default function handler(req, res) {
    const allArticles = [
      { id: 1, title: 'Article 1', content: 'Content of Article 1' },
      { id: 2, title: 'Article 2', content: 'Content of Article 2' },
      { id: 3, title: 'Article 3', content: 'Content of Article 3' },
      { id: 4, title: 'Article 4', content: 'Content of Article 4' },
      { id: 5, title: 'Article 5', content: 'Content of Article 5' },
      { id: 6, title: 'Article 5', content: 'Content of Article 5' },
      { id: 7, title: 'Article 5', content: 'Content of Article 5' },
      { id: 8, title: 'Article 5', content: 'Content of Article 5' },
      { id: 9, title: 'Article 5', content: 'Content of Article 5' },
      { id: 10, title: 'Article 5', content: 'Content of Article 5' },
    ];
  
    // Simulate pagination (e.g., 2 articles per page)
    const pageSize = 2;
    const page = parseInt(req.query.page || '1');
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
  
    const paginatedArticles = allArticles.slice(start, end);
  
    res.status(200).json({
      articles: paginatedArticles,
      total: allArticles.length,
    });
  }
  