import { useState } from "react";
import GlobalStyle from "../styles";
import { SWRConfig } from "swr";

async function fetcher(url) {
  const response = await fetch(url);
  return await response.json();
}

export default function App({ Component, pageProps }) {
  const [ likes, setLikes ] = useState([])
  
  function handleToggle(slug) {
    setLikes((prevLikes) =>
      prevLikes.includes(slug)
        ? prevLikes.filter((item) => item !== slug)
        : [...prevLikes, slug]
    );
  }

  return (
    <>
    <SWRConfig value={{
        fetcher
      }}>
      <GlobalStyle />
      <Component liked={likes} onToggle={handleToggle} {...pageProps} />
</SWRConfig>
    </>
  );
}
