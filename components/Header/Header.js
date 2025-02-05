import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (<header>
    <Link href='/'>
    <img id='logo' src='/logo.png'/>
    </Link>
  </header>

  )
}
