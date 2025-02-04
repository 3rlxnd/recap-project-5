import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function LikeButton({slug, liked, onToggle}) {
        const isLiked = liked.some(piece => piece.slug === slug && piece.isLiked);
    
  return (
    <a className='like-button' onClick={() => onToggle(slug)}>
    <FontAwesomeIcon style={{color: isLiked ? 'red' : 'grey'}} icon={faHeart} className="icon"/>
    </a>
  )
}
