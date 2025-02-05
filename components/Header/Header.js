import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBinoculars, faHeart, faLayerGroup } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const router = useRouter();
  return (<header>
    <Link href='/'>
      <img id='logo' src='/logo.png' />
    </Link>
    <nav>
      <Link
        className={`link ${router.pathname === '/' ? 'active' : ''}`}
        href="/"
      >
        <FontAwesomeIcon icon={faBinoculars} className='icon-nav' />
        <p>Discover</p>
      </Link>
      <Link
        className={`link ${router.pathname === '/art-pieces' ? 'active' : ''}`}
        href="/art-pieces"
      >
        <FontAwesomeIcon icon={faLayerGroup} className='icon-nav' />
        <p>Collection</p>

      </Link>
      <Link
        className={`link ${router.pathname === '/favorites' ? 'active' : ''}`}
        href="/favorites"
      >
        <FontAwesomeIcon icon={faHeart} className='icon-nav' />
        <p>Favourites</p>

      </Link>
    </nav>
  </header>

  )
}
