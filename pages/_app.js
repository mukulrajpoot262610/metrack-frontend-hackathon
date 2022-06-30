import Layout from "components/layout";
import "styles/globals.css";
import { Provider } from "react-redux";
import { store } from "redux/store";
import { useEffect } from "react";
import * as ga from "lib/ga";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
