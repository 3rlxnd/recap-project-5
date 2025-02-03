import Link from 'next/link'
import React from 'react'
import LikeButton from '../LikeButton/LikeButton'
import CommentSection from '../CommentSection/CommentSection'

export default function PieceDetail({ liked, piece, onToggle }) {
  return (
    <div>
      <button><Link href={'/art-pieces'}>Go Back</Link></button>
      <LikeButton liked={liked.includes(piece.slug) ? true : false} onToggle={() => onToggle(piece.slug)}/>
      <img src={piece.imageSource} alt={piece.name} width={'30%'}/>
      <p><b>{piece.name}</b></p>
      <p>{piece.artist}</p>
      <p>{piece.year}</p>
      <p>{piece.genre}</p>
      <CommentSection/>
    </div>
  )
}
