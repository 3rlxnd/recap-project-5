import useSWR from "swr";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { useEffect, useState } from "react";
import SpotlightPiece from "@/components/SpotlightPiece/SpotlightPiece";

export default function Overview({ onToggle, liked }) {
  const URL = 'https://example-apis.vercel.app/api/art'
  const { data, error, isLoading, isValidating } = useSWR(URL);

  const [random, setRandom] = useState(0)

  useEffect(() => {
    if (!data) return;

    const interval = setInterval(() => {
      setRandom(Math.floor(Math.random() * data.length));
    }, 7000);

    return () => clearInterval(interval); // Cleanup function
  }, [data]);

  return <>
    <Header />
    <main>
      <h1 className="title">Discover</h1>
      {data && <SpotlightPiece liked={liked} piece={data[random]} onToggle={onToggle} />
      }
    </main>
    <Footer />
  </>
}