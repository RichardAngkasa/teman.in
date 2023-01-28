import "../styles/globals.css";
import { Yantramanav } from "@next/font/google";

const yantramanav = Yantramanav({
  subsets: ["latin"],
  weight: ["900", "400", "100"],
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={yantramanav.className}>
      <Component {...pageProps} />;
    </main>
  );
}

export default MyApp;
