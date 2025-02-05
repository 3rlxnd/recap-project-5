import Piece from "@/components/Piece/Piece";
import useSWR from "swr";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import SearchBar from "@/components/SearchBar/SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Overview({ onToggle, liked }) {
  const URL = 'https://example-apis.vercel.app/api/art'
  const { data, error, isLoading, isValidating } = useSWR(URL);
  const [searchString, setSearchString] = useState('')
  const [searchVisible, setSearchVisible] = useState(false)

  const search = data?.filter(piece => piece.name.toLowerCase().includes(searchString.toLowerCase()) || piece.slug.toLowerCase().includes(searchString.toLowerCase()) || piece.artist.toLowerCase().includes(searchString.toLowerCase()) || piece.year.toLowerCase().includes(searchString.toLowerCase()))

  function handleSearch(event) {
    event.preventDefault()
    setSearchString(event.target.value)
  }

  return <>
    <Header />
    <main>
      <section id="collection-header">
        <h1 className="title" style={{ margin: 0 }}>Favourites</h1>
        <a onClick={() => setSearchVisible(!searchVisible)} id='search-button'><FontAwesomeIcon icon={faSearch} className='icon' /></a>
        {/* <a onClick={() => setSearchVisible(!searchVisible)} id='search-button'><FontAwesomeIcon icon={faFilter} className='icon' /></a> */}

      </section>
      {searchVisible && <SearchBar onSearch={handleSearch} />}
      {error && 'Error loading Data'}
      {isLoading && 'Loading...'}
      {data && <ul className="piece-wrapper">
        {search?.map(piece => {
          if (liked.some(item => item.slug === piece.slug && item.isLiked)) {
            return (<li key={piece.slug}><Piece liked={liked} piece={piece} onToggle={onToggle} /></li>)
          }
        })}
      </ul>}
    </main>
    <Footer />
  </>
}