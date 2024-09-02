
// export async function getStaticPaths() {
//     // Replace with your API endpoint that returns all categories with their packages
//     const res = await fetch('https://api3.triptotemples.com/api/v1/category-site-path'); 
//     const categories = await res.json();

//     const paths = categories.flatMap(category => {
//         if (category.packages && category.packages.length > 0) {
//           return category.packages.map(pkg => ({
//             params: {
//               categorySlug: category.slug,
//               packageSlug: pkg.slug
//             }
//           }));
//         }
//         return [];
//       });
    
//     return { paths, fallback: false }; // fallback: false means any paths not returned will result in a 404 page
//   }




//   export async function getStaticProps({ params }) {
//     const { categorySlug, packageSlug } = params;
//     // Replace with your API endpoint that returns the package details
//     const res = await fetch(`https://api3.triptotemples.com/api/v1/package-data/${encodeURIComponent(decodeURIComponent(packageSlug))}`);
//     const pkg = await res.json();
//   console.log("pkg>>>>>,,,,",pkg)
//     return {
//       props: {
//         pkg,
//       },
//       revalidate: 200, // Re-generate the page every 10 seconds
//     };
//   }

const packageDetails=()=>{

    return(
        <>
        <h4>package Details</h4>
        <h4>pkg.title</h4>
        </>
    )

}


export default packageDetails