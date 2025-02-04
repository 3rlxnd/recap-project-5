import React from 'react'

export default function Colors({ piece }) {
    return (<>
        <h2>Colors</h2>
        <ul>
            {piece.colors.map(color => <div key={color} style={{ backgroundColor: color, padding: '25px' }}></div>)}
        </ul>
    </>
    )
}
