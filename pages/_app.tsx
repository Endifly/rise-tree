import "../styles/globals.css";
import type { AppProps } from "next/app";
import ThemeBaseline from "components/ThemeBaseline";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeBaseline>
      <Component {...pageProps} />
    </ThemeBaseline>
  );
}

export default MyApp;
