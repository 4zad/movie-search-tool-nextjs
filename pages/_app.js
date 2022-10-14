import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { SWRConfig } from 'swr';

import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <SWRConfig value={{ fetcher: (...args) => fetch(...args).then((res) => res.json()) }}>
        <Component {...pageProps} />
      </SWRConfig>
    </Layout>
  );
}

export default MyApp;
