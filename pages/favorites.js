import Piece from "@/components/Piece/Piece";
import useSWR from "swr";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";

export default function Overview({ onToggle, liked }) {
  const URL = 'https://example-apis.vercel.app/api/art'
  const { data, error, isLoading, isValidating } = useSWR(URL);
  console.log(data);

  return <>
    <h1>Art Gallery</h1>
    {data && <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
      {data.map(piece => {
        if (liked.some(item => item.slug === piece.slug && item.isLiked)) {
          return (<li key={piece.slug}><Piece liked={liked} piece={piece} onToggle={onToggle} /></li>)
        }
      })}
    </ul>
    }
    <Footer />
  </>
}