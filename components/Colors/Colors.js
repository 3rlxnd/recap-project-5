import React from 'react'

export default function Colors({ piece }) {
    return (<div>
        <ul id='color-wrapper'>
            {piece.colors.map(color => <div className='color' key={color} style={{ backgroundColor: color }}></div>)}
        </ul>
    </div>
    )
}
