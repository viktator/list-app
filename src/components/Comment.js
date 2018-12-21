import React from 'react'
import PropTypes from 'prop-types'

export default function Comment(props) {
    const{comment} = props
    return (
        <div>
            <h5>{comment.user}</h5>
            <p>{comment.text}</p>
        </div>
    )
}
Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired
    }).isRequired
}