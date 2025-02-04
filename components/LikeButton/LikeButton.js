import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function LikeButton({slug, liked, onToggle}) {
        const isLiked = liked.some(piece => piece.slug === slug && piece.isLiked);
    
  return (
    <button onClick={() => onToggle(slug)}>
    <FontAwesomeIcon style={isLiked ? { color: 'red'} : { color: 'grey'}} icon={faHeart} className="icon" />
    </button>
  )
}
