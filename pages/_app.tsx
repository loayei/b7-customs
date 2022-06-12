import "../styles/globals.css";
import type { AppProps } from "next/app";
import ScrollObserver from "../utilities/scroll";
import SizeObserver from "../utilities/size-observe";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SizeObserver>
      <ScrollObserver>
        <Component {...pageProps} />
      </ScrollObserver>
    </SizeObserver>
  );
}

export default MyApp;
