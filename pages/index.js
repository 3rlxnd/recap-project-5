import Piece from "@/components/Piece/Piece";
import Link from "next/link";
import useSWR from "swr";

export default function HomePage() {
  const URL = 'https://example-apis.vercel.app/api/art'
  const { data, error, isLoading, isValidating } = useSWR(URL);
  console.log(data);
  
  return <>
  <Link href={'/art-pieces'}>Art Pieces</Link>
  </>
}
