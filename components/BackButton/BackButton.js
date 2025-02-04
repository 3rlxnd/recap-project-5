import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function BackButton() {
  return (
    <Link href='/art-pieces' className='back-button' >
      <FontAwesomeIcon style={{ color: 'grey' }} icon={faArrowLeft} className="icon" />
    </Link>
  )
}
