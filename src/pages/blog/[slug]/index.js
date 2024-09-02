
const Blog=()=>{
    return (
    <>
    <div>
      <h1>post.title</h1>
      <p>post.anotherTitle</p>
    </div>
    </>
    )
}

export default Blog;

// export async function getStaticPaths() {
//     // Fetch the list of posts
//     const res = await fetch('https://api3.triptotemples.com/api/v1/categorymenu');
//     const posts = await res.json();
//     // Get the paths we want to pre-render based on posts
//     const paths = posts.map((post) => ({
//       params: { slug: post.slug },
//     }));
  
//     return { paths, fallback: false };
//   }

//   export async function getStaticProps({ params }) {
   
//     const res = await fetch(`https://api3.triptotemples.com/api/v1/cate-bloglist?filterby=category&query=${params.slug}`);
   
//     const post = await res.json();

//     console.log("post....",post)

//     return {
//       props: {
//         post,
//       },
//     };
//   }