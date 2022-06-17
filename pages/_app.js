
import { ContextProviders } from "../components/contexts";
import Layout from "../components/Layout";
import "../styles/globals.css";
import { Provider } from 'react-redux'
import { store } from '../redux/store'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
    <ContextProviders>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProviders>
    </Provider>

  );
}

export default MyApp;
