import React from 'react'
import Link from 'next/link';
import { useRouter } from "next/router";
import useSWR from 'swr';
import Footer from '@/components/Footer/Footer';
import PieceDetail from '@/components/PieceDetail/PieceDetail';
import LikeButton from '@/components/LikeButton/LikeButton';
import BackButton from '@/components/BackButton/BackButton';
import Header from '@/components/Header/Header';
import ShareButton from '@/components/ShareButton/ShareButton';

const URL = 'https://example-apis.vercel.app/api/art'

export default function Preview({ onComment, onToggle, liked }) {
  const router = useRouter();
  const { slug } = router.query;
  const { data, error, isLoading } = useSWR(URL)
  if (data) {
    const piece = data.find(piece => piece.slug === slug)
    return (
      <>
        <main>
          <BackButton />
          <ShareButton />
          {/* <LikeButton slug={piece.slug} liked={liked} onToggle={onToggle} /> */}
          <PieceDetail onComment={onComment} onToggle={onToggle} liked={liked} piece={piece} />
        </main>
        <Footer />
      </>
    )
  }

}
