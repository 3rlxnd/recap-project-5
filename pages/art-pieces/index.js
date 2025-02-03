import Piece from "@/components/Piece/Piece";
import useSWR from "swr";
import Link from "next/link";

export default function Overview() {
    const URL = 'https://example-apis.vercel.app/api/art'
    const { data, error, isLoading, isValidating } = useSWR(URL);
    console.log(data);
    
    return <>
    <h1>Art Gallery</h1>
    {data && <ul style={{listStyle: 'none', margin: 0, padding: 0}}>
      {data.map(piece => (<li key={piece.slug}><Link href={`art-pieces/${piece.slug}`}><Piece piece={piece}/></Link></li>))}
    </ul>
    }
    </>
  }