import Link from 'next/link'
import React from 'react'
import LikeButton from '../LikeButton/LikeButton'
import CommentSection from '../CommentSection/CommentSection'
import Colors from '../Colors/Colors';

export default function PieceDetail({ liked, piece, onToggle, onComment }) {
  console.log(piece);
  
  return (
    <div>
      <button><Link href={'/art-pieces'}>Go Back</Link></button>
      <LikeButton slug={piece.slug} liked={liked} onToggle={onToggle}/>
      <img src={piece.imageSource} alt={piece.name} width={'30%'}/>
      <p><b>{piece.name}</b></p>
      <p>{piece.artist}</p>
      <p>{piece.year}</p>
      <p>{piece.genre}</p>
      <Colors piece={piece} />
      <CommentSection slug={piece.slug} pieceInfo={liked} onComment={onComment}/>
    </div>
  )
}
