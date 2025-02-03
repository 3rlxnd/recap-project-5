import GlobalStyle from "../styles";
import { SWRConfig } from "swr";

async function fetcher(url) {
  const response = await fetch(url);
  return await response.json();
}

export default function App({ Component, pageProps }) {
  return (
    <>
    <SWRConfig value={{
        fetcher,
        refreshInterval: 1000,
      }}>
      <GlobalStyle />
      <Component {...pageProps} />
</SWRConfig>
    </>
  );
}
