import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function LikeButton({liked, onToggle}) {
  return (
    <button onClick={onToggle}>
    <FontAwesomeIcon style={liked ? { color: 'red'} : { color: 'grey'}} icon={faHeart} className="icon" />
    </button>
  )
}
