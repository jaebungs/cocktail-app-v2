import React from 'react';
import Layout from '../components/Layout';
import 'normalize.css';
import '../styles/index.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

export async function getStaticProps() {
  return {
    props: {},
  };
}
