import Link from 'next/link'
import React from 'react'
import LikeButton from '../LikeButton/LikeButton'


export default function Piece({ liked, piece, onToggle }) {
  return (
    <div className='piece'>
      <LikeButton liked={liked} slug={piece.slug} onToggle={onToggle}/>
      <Link href={`art-pieces/${piece.slug}`}>
      <img src={piece.imageSource} alt={piece.name} width={'100%'} className='cover-img'/>
      </Link>
      <div className='piece-info'>
      <h2 className='piece-title'>{piece.name}</h2>
      <p>{piece.artist}</p>
      </div>
    </div>
  )
}
