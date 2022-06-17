import { ContextProviders } from "../components/contexts";
import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ContextProviders>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProviders>
  );
}

export default MyApp;
