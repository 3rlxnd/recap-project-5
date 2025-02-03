import React from 'react'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer>
            <nav>
                <Link href={'/'}>Spotlight</Link>
                <Link href={'/art-pieces'}>Gallery</Link>
                <Link href={'/favourites'}>Favourites</Link>
            </nav>
        </footer>
    )
}
