import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

export default function SearchBar({ onSearch }) {
    const [visible, setVisible] = useState(false)

    return (
        <div id='searchBar'>
            {visible && <input onChange={() => onSearch(event)} id='search-input' type='text' placeholder='Search...' />}
            <a onClick={() => setVisible(!visible)} id='search-button'><FontAwesomeIcon icon={faSearch} className='icon' /></a>
        </div>
    )
}
