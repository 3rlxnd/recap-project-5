import React from 'react'
import Piece from '../../components/Piece/Piece'
import { useRouter } from "next/router";
import useSWR from 'swr';
import Footer from '@/components/Footer/Footer';
import PieceDetail from '@/components/PieceDetail/PieceDetail';

const URL = 'https://example-apis.vercel.app/api/art'

export default function Preview() {
  const router = useRouter();
  const { slug } = router.query;
  const { data, error, isLoading } = useSWR(URL)
  if (data) {
    const piece = data.find(piece => piece.slug === slug)
    return (
      <>
        <PieceDetail piece={piece} />
        <Footer/>
      </>
    )
  }

}
