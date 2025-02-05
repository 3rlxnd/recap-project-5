import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Footer() {
    const router = useRouter();
    return (
        <footer>
            <nav>
                <Link 
                    className={`link ${router.pathname === '/' ? 'active' : ''}`} 
                    href="/"
                >
                    Discover
                </Link>
                <Link 
                    className={`link ${router.pathname === '/art-pieces' ? 'active' : ''}`} 
                    href="/art-pieces"
                >
                    Collection
                </Link>
                <Link 
                    className={`link ${router.pathname === '/favorites' ? 'active' : ''}`} 
                    href="/favorites"
                >
                    Favourites
                </Link>
            </nav>
        </footer>
    )
}
