

import InfiniteScrollArticles from '../../components/InfiniteScrollArticles';
const articles = [
    { id: 1, title: 'Article 1', content: 'Content of Article 1' },
    { id: 2, title: 'Article 2', content: 'Content of Article 2' },
    { id: 3, title: 'Article 3', content: 'Content of Article 3' },
    { id: 4, title: 'Article 4', content: 'Content of Article 4' },
    { id: 5, title: 'Article 5', content: 'Content of Article 5' },
    { id: 6, title: 'Article 6', content: 'Content of Article 6' },
    { id: 7, title: 'Article 7', content: 'Content of Article 7' },
    { id: 8, title: 'Article 8', content: 'Content of Article 8' },
    { id: 9, title: 'Article 9', content: 'Content of Article 9' },
    { id: 10, title: 'Article 10', content: 'Content of Article 10' },
    { id: 11, title: 'Article 11', content: 'Content of Article 11' },
  ];
  

const Blogs=()=>{
    return(
        <>
        <div className="">
        <InfiniteScrollArticles articles={articles} />
        </div>
        </>
    )

}
export default Blogs;