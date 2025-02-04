import Piece from "@/components/Piece/Piece";
import useSWR from "swr";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export default function Overview({ onToggle, liked }) {
    const URL = 'https://example-apis.vercel.app/api/art'
    const { data, error, isLoading, isValidating } = useSWR(URL);
    
    return <>
    <Header/>
    <main>
    <h1 className="title">Collection</h1>

    {/* <p>Explore our full Collection</p> */}
    {isLoading && 'Loading...'}
    {data && <ul className="piece-wrapper">
      {data.map(piece => (<li key={piece.slug}><Piece liked={liked} piece={piece} onToggle={onToggle} /></li>))}
    </ul>
    }
    </main>
    <Footer/>
    </>
  }