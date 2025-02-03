import React from 'react'
import useSWR from 'swr';

export default function SpotlightPiece({ piece }) {
    const URL = 'https://example-apis.vercel.app/api/art'
    const { data, error, isLoading } = useSWR(URL);

    if (data) {
        console.log(data);
        let random = Math.floor(Math.random() * data.length);
        const piece = data[random];


        return (
            <div>
                <img src={piece.imageSource} alt={piece.name} width={'30%'} />
                <p><b>{piece.name}</b></p>
            </div>
        )
    }
}
