import React from 'react'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer>
            <Link href={'/'}>Spotlight</Link>
            <Link href={'/art-pieces'}>Art Pieces</Link>
            <Link href={'/favourites'}>Favourites</Link>
        </footer>
    )
}
