import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function ShareButton({}) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Check this out!",
          text: "This is an awesome website.",
          url: window.location.href,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      alert("Your browser does not support the Web Share API");
    }
  };
  
  return (
    <a onClick={handleShare} className='share-button'>
      <FontAwesomeIcon style={{ color: 'grey' }} icon={faPaperPlane} className="icon" />
    </a>
  )
}

