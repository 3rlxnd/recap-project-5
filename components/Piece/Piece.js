import React from 'react'

export default function Piece({ piece }) {
  return (
    <div>
      <img src={piece.imageSource} alt={piece.name} width={'30%'}/>
      <p><b>{piece.name}</b></p>
      <p>{piece.artist}</p>
    </div>
  )
}
