import Piece from "@/components/Piece/Piece";
import useSWR from "swr";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import SearchBar from "@/components/SearchBar/SearchBar";
import { useState } from "react";
import { faFilter, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Overview({ onToggle, liked }) {
    const URL = 'https://example-apis.vercel.app/api/art'
    const { data, error, isLoading } = useSWR(URL);
    const [ searchString, setSearchString ] = useState('')
    const [ searchVisible, setSearchVisible ] = useState(false)

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
    <a onClick={() => setSearchVisible(!searchVisible)} id='search-button'><FontAwesomeIcon icon={faSearch} className='icon' /></a>
    {/* <a onClick={() => setSearchVisible(!searchVisible)} id='search-button'><FontAwesomeIcon icon={faFilter} className='icon' /></a> */}
        
      </section>
    {searchVisible && <SearchBar onSearch={handleSearch}/>}
    {/* <p>Explore our full Collection</p> */}
    {isLoading && 'Loading...'}
    {error && 'Error loading Data'}
    
    {data && <ul className="piece-wrapper">
      {search.map(piece => (<li key={piece.slug}><Piece liked={liked} piece={piece} onToggle={onToggle}/></li>))}
    </ul>
    }
    </main>
    <Footer/>
    </>
  }