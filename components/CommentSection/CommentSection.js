import { faComment, faPaperPlane, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function CommentSection({ pieceInfo, slug, onComment }) {
    function handleForm(event) {
        event.preventDefault()
        const formdata = new FormData(event.target)
        const data = Object.fromEntries(formdata)
        onComment(slug, data.comment)
        event.target.reset()
    }

    const piece = pieceInfo.find(piece => piece.slug === slug)

    function timeAgo(dateString) {
        const commentDate = new Date(dateString); // Convert stored date to Date object
        const currentDate = new Date();
        const differenceInMs = currentDate - commentDate; // Time difference in milliseconds
        const differenceInMinutes = Math.floor(differenceInMs / (1000 * 60)); // Convert to minutes
        const differenceInHours = Math.floor(differenceInMinutes / 60); // Convert to hours
        const differenceInDays = Math.floor(differenceInHours / 24); // Convert to days

        if (differenceInMinutes < 1) return "Now"; // Less than 1 minute
        if (differenceInHours < 1) return `${differenceInMinutes} min ago`; // Less than 1 hour
        if (differenceInHours < 6) return `${differenceInHours}h`; // Less than 6 hours
        if (differenceInDays < 1) return "Today"; // Still the same day
        if (differenceInDays === 1) return "Yesterday"; // Posted yesterday
        return `${differenceInDays} days ago`; // More than 1 day
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h2 style={{marginTop: '20px'}}>Comments</h2>
            <ul className='comment-wrapper'>
                {piece?.comments ? piece.comments.map((item, index) => {
                    return (
                        <li className='comment' key={index}>
                            <FontAwesomeIcon icon={faComment} />
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                    <b>Me</b>
                                    <small>{timeAgo(item.date)}</small>
                                </div>
                                <p>{item.message}</p>
                            </div>
                        </li>
                    )
                }) : <div>
                    <h3 id='noComments-title'>No Comments yet</h3>
                    <p>Share your thoughts.</p>
                </div>
                }
            </ul>

            <form id='input-wrapper' onSubmit={handleForm}>
                <input type='text' name='comment' placeholder='Start a conversation' required />
                <button id='comment-button'>
                    <FontAwesomeIcon icon={faPaperPlane} className='icon' style={{color: 'gray'}}/>
                </button>
            </form>
        </div>
    )
}
