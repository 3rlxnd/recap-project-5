import React from 'react'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer>
            <nav>
                <Link className='link' href={'/'}>Spotlight</Link>
                <Link className='link' href={'/art-pieces'}>Gallery</Link>
                <Link className='link' href={'/favorites'}>Favourites</Link>
            </nav>
        </footer>
    )
}
