import Link from 'next/link'
import React from 'react'

export default function PieceDetail({ piece }) {
  return (
    <div>
      <button><Link href={'/art-pieces'}>Go Back</Link></button>
      <img src={piece.imageSource} alt={piece.name} width={'30%'}/>
      <p><b>{piece.name}</b></p>
      <p>{piece.artist}</p>
      <p>{piece.year}</p>
      <p>{piece.genre}</p>
    </div>
  )
}
