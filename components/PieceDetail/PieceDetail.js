import Link from 'next/link'
import React from 'react'
import LikeButton from '../LikeButton/LikeButton'
import CommentSection from '../CommentSection/CommentSection'
import Colors from '../Colors/Colors';
import ShareButton from '../ShareButton/ShareButton';

export default function PieceDetail({ liked, piece, onToggle, onComment }) {
  console.log(piece);

  return (
    <div >
      <div id='piece-details-wrapper'>
        <div id='piece-details'>
          <div id='piece-details-header'>
            {/* <ShareButton /> */}
            <h1 style={{maxWidth: '350px', marginBottom: 0}} className='title'>{piece.name}</h1>
          </div>
          {/* <h2 className='sub-title'>{piece.artist}</h2> */}
          <p className='sub-title'>{`${piece.artist}`}</p>
          <p>{piece.year !== 'unknown' ? `from ${piece.year}` : ''}</p>
          {/* <p>{piece.genre}</p> */}
          <Colors piece={piece} />
        </div>
        <div id='image-wrapper'>

          <img src={piece.imageSource} alt={piece.name} id='detail-image' />
          <LikeButton slug={piece.slug} liked={liked} onToggle={onToggle} />
        </div>
      </div>
      <CommentSection slug={piece.slug} pieceInfo={liked} onComment={onComment} />
    </div>
  )
}
