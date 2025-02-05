import Piece from "@/components/Piece/Piece";
import useSWR from "swr";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import SearchBar from "@/components/SearchBar/SearchBar";
import { useState } from "react";

export default function Overview({ onToggle, liked }) {
    const URL = 'https://example-apis.vercel.app/api/art'
    const { data, error, isLoading } = useSWR(URL);
    const [ searchString, setSearchString ] = useState('')

    function handleSearch(event) {
      event.preventDefault()
      setSearchString(event.target.value)
  }

    const search = data?.filter(piece => piece.name.toLowerCase().includes(searchString.toLowerCase()) || piece.slug.toLowerCase().includes(searchString.toLowerCase()) || piece.artist.toLowerCase().includes(searchString.toLowerCase()) || piece.year.toLowerCase().includes(searchString.toLowerCase()))
    
    return <>
    <Header/>
    <main>
      <section id="collection-header">
    <h1 className="title" style={{margin: 0}}>Collection</h1>
  <SearchBar onSearch={handleSearch}/>
      </section>
    {/* <p>Explore our full Collection</p> */}
    {isLoading && 'Loading...'}
    {data && <ul className="piece-wrapper">
      {search.map(piece => (<li key={piece.slug}><Piece liked={liked} piece={piece} onToggle={onToggle}/></li>))}
    </ul>
    }
    </main>
    <Footer/>
    </>
  }