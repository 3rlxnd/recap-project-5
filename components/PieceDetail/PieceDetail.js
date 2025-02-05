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
          <p style={{marginBottom: '20px', color: 'grey', fontWeight: 500}}>{piece.genre.toUpperCase()}</p>
          <div id='piece-details-header'>
            {/* <ShareButton /> */}
            <h1 style={{maxWidth: '350px', marginBottom: 0}} className='title'>{piece.name}</h1>
          </div>
          {/* <h2 className='sub-title'>{piece.artist}</h2> */}
          <p className='sub-title'>{`${piece.artist}`}</p>
          <i>{piece.year !== 'unknown' ? `from ${piece.year}` : ''}</i>
          {/* <i>{piece.dimensions.height + ' x ' + piece.dimensions.width}</i> */}
          <Colors piece={piece} />
        </div>
        <div id='image-wrapper'>

          <img src={piece.imageSource} alt={piece.name} id='detail-image' />
          <LikeButton slug={piece.slug} liked={liked} onToggle={onToggle} />
        </div>
      </div>
      <hr style={{marginTop: '30px'}}/>
      <CommentSection slug={piece.slug} pieceInfo={liked} onComment={onComment} />
    </div>
  )
}
