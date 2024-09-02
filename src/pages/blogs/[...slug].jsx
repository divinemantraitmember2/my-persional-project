
import { getBlogData,getAllBlogSlugs } from '../../utils/api/Httproutes';


// const BlogsSlug=()=>{
//     return(
//         <>
//     <h4 className="text-red">Blogs Slug..</h4>
//     </>
//     )
// }

import { useState, useEffect, useRef } from 'react';

const InfiniteScrollArticles = ({ initialArticles, totalArticles }) => {
  const [articles, setArticles] = useState(initialArticles);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(2); // Start with page 2 because page 1 was fetched on the server
  const triggerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !loading && articles.length < totalArticles) {
        setPage(prevPage => prevPage + 1);
      }
    }, { threshold: 1.0 });

    if (triggerRef.current) {
      observer.observe(triggerRef.current);
    }

    return () => {
      if (observer && observer.disconnect) {
        observer.disconnect();
      }
    };
  }, [loading, articles.length, totalArticles]);

  useEffect(() => {
    if (page > 1) {
      fetchArticles();
    }
  }, [page]);

  const fetchArticles = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/articles?page=${page}`);
      const { articles: newArticles } = await response.json();
      setArticles(prevArticles => [...prevArticles, ...newArticles]);
    } catch (error) {
      console.error('Failed to fetch articles:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Articles</h1>
      <div>
        {articles.map((article) => (
          <div key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
          </div>
        ))}
      </div>
      <div ref={triggerRef} style={{ height: '50px' }}>
        {loading && articles.length < totalArticles ? (
          <p>Loading more articles...</p>
        ) : articles.length >= totalArticles ? (
          <p>No more articles to load.</p>
        ) : (
          <p>Scroll down to load more...</p>
        )}
      </div>
    </div>
  );
};

// Server-Side Rendering for Initial Data Fetch
export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/articles?page=1');
  const { articles, total } = await res.json();

  return {
    props: {
      initialArticles: articles,
      totalArticles: total,
    },
  };
}

export default InfiniteScrollArticles;




// export const getStaticPaths = async () => {
//      const {data}= await getAllBlogSlugs(); // Assume this function fetches all available blog slugs
//     //  console.log("data1....",data)
//       const paths = data.map((item) => {
//         // Extract the category slug and the blog post slug
//         let categorySlug = "";
//         if(item.category.length>0 && item.category !=null){
//             item.category.map((cateItem)=>{
//             categorySlug=cateItem.slug !==""?cateItem.slug:"blogs";
//             })
//         }
//         // const categorySlug = item.category; // Assuming you want the first category's slug
//         const blogPostSlug = item.slug;
//         // console.log("b s..",blogPostSlug)
//         // Create the slug array
//         const slugArray = [categorySlug, blogPostSlug];
//         console.log("slugArray...",slugArray)
//         // Construct the path object
//         return { params: { slug: slugArray } };
//       });
      
// //   console.log(paths);
    
//       return {
//         paths,
//         fallback: 'blocking',
//       };
//   };

//   export const getStaticProps = async (context) => {
   
//     const { slug } = context.params;
//     const blogPostSlug = slug[0];
//     // console.log("blogPostSlug...",blogPostSlug)
    
//     try {
//        const response = await getBlogData(blogPostSlug);
//        if (response.status === 200) {
//         //  console.log("response,,,,",response.data[0])
//           return { props: { packagedetail: { success: true, response: response.data[0] } } };
//        } else {
//           return { notFound: true };
//        }
//     } catch (error) {
//        return { notFound: true };
//     }
//  }
 
 
// export default BlogsSlug


