import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

export default function SearchBar({ onSearch, visible }) {
    return (
        <div id='searchBar'>
            <input onChange={() => onSearch(event)} id='search-input' type='text' placeholder='Search...' />
        </div>
    )
}
