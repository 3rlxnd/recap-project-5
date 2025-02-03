import React from 'react'
import Piece from '../../components/Piece/Piece'
import { useRouter } from "next/router";
import useSWR from 'swr';

const URL = 'https://example-apis.vercel.app/api/art'

export default function Preview() {
  const router = useRouter();
  const { slug } = router.query;
  const { data, error, isLoading } = useSWR(URL)
  if (data) {
    const piece = data.find(piece => piece.slug === slug)
    return (
      <div>
        <Piece piece={piece} />
      </div>
    )
  }
}
