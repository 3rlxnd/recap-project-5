import React from 'react'

export default function CommentSection({pieceInfo, slug, onComment}) {
    function handleForm(event) {
        event.preventDefault()
        const formdata = new FormData(event.target)
        const data = Object.fromEntries(formdata)
        onComment(slug, data.comment)
    }
    const piece = pieceInfo.find(piece => piece.slug === slug)
    console.log(piece);
    if (piece?.comments) {
        console.log(true);
        
    }
    return (
        <div>
            <h2>Comments</h2>
            <ul>
            {piece?.comments && piece.comments.map((item, index) => <li key={index}>{item.message}<br/>{item.date}</li>)}
            </ul>
            <form onSubmit={handleForm}>
                <textarea name='comment' required/>
                <button>Send</button>
            </form>
        </div>
    )
}
