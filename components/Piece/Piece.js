import Link from 'next/link'
import React from 'react'
import LikeButton from '../LikeButton/LikeButton'


export default function Piece({ liked, piece, onToggle }) {
  return (
    <div>
      <LikeButton liked={liked} slug={piece.slug} onToggle={onToggle}/>
      <Link href={`art-pieces/${piece.slug}`}>
      <img src={piece.imageSource} alt={piece.name} width={'30%'}/>
      </Link>
      <p><b>{piece.name}</b></p>
      <p>{piece.artist}</p>
    </div>
  )
}
