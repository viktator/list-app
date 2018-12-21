import React, {Component} from 'react'
import toggleOpen from '../decorators/toggleOpen'
import Comment from './Comment'


class CommentList extends Component {



    getBody =() => {
        const {comments} = this.props
        if(!comments ||  !comments.length) return <span>There is no comments</span>

        return (
            <ul>
                {comments.map(comment => <li key={comment.id}><Comment comment={comment} /></li>)}
            </ul>
        )
    }

    render() {
        const { toggleOpen, isOpen} = this.props
        const text = !isOpen ?  'open comments' : 'hide comments'

        return (
            <div>
            <button onClick={toggleOpen}>{text}</button>
                {isOpen && this.getBody()}
            </div>
        )
    }
}
export default toggleOpen(CommentList)