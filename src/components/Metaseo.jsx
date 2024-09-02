import Head from 'next/head';

const Metaseo = ({ title, description, keywords }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {/* Add other meta tags as needed */}
    </Head>
  );
};

export default Metaseo;