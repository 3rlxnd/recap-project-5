import Piece from "@/components/Piece/Piece";
import useSWR from "swr";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export default function Overview({ onToggle, liked }) {
  const URL = 'https://example-apis.vercel.app/api/art'
  const { data, error, isLoading, isValidating } = useSWR(URL);
  console.log(data);

  return <>
  <Header/>
  <main>
  <h1 className="title">Favourites</h1>
    {data && <ul className="piece-wrapper">
      {data.map(piece => {
        if (liked.some(item => item.slug === piece.slug && item.isLiked)) {
          return (<li key={piece.slug}><Piece liked={liked} piece={piece} onToggle={onToggle} /></li>)
        }
      })}
    </ul>
    }
    </main>
    <Footer />
  </>
}