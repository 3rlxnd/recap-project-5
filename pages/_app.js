import { useState, useEffect } from "react";
import GlobalStyle from "../styles";
import { SWRConfig } from "swr";


// localStorage.clear()

async function fetcher(url) {
  const response = await fetch(url);
  return await response.json();
}

const STORAGE_KEY = "piecesInfo";

const getInitialPiecesInfo = () => {
  if (typeof window !== "undefined") {
    const storedData = localStorage.getItem(STORAGE_KEY);
    return storedData ? JSON.parse(storedData) : [];
  }
  return [];
};

export default function App({ Component, pageProps }) {
  const [piecesInfo, setPiecesInfo] = useState(getInitialPiecesInfo)
  
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(piecesInfo));
  }, [piecesInfo]);


    function handleToggle(slug) {
      setPiecesInfo((prevPieces) =>
        prevPieces.some(piece => piece.slug === slug)
          ? prevPieces.map((item) => item.slug === slug ? { ...item, isLiked: !item.isLiked } : item)
          : [...prevPieces, { slug: slug, isLiked: true }]
      );
    }
    
    function handleComment(slug, comment) {
      const date = new Date()
      setPiecesInfo((prevPieces) =>
        prevPieces.some(piece => piece.slug === slug)
          ? prevPieces.map((item) => item.slug === slug ? { ...item, comments: item.comments ? [...item.comments, {message: comment, date: date.toLocaleString()}] : [{message: comment, date: comment.date}] } : item)
          : [...prevPieces, { slug: slug, comments: [{message: comment, date: date.toLocaleString()}] }]
      );
    }
  
    return (
      <>
        <SWRConfig value={{
          fetcher
        }}>
          <GlobalStyle />
          <Component liked={piecesInfo} onComment={handleComment} onToggle={handleToggle} {...pageProps} />
        </SWRConfig>
      </>
    );
  
    { isLoading && <p>Loading</p>}
  } 
  

  // const isLiked = piecesInfo.some(piece => piece.slug === slug && piece.isLiked);


