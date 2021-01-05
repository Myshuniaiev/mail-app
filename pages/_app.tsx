import "../styles/globals.css";
import NextNprogress from "nextjs-progressbar";
import { Provider } from "react-redux";
import store from "../redux/store";
import { AppProps } from "next/dist/next-server/lib/router/router";

// APP
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <NextNprogress
        color="white"
        startPosition={0.3}
        stopDelayMs={200} 
      />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
