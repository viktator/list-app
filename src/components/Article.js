import React, {Component} from 'react'
import CommentList from './CommentList'
import PropTypes from 'prop-types'
import toggleOpen from "../decorators/toggleOpen";
// import toggleOpen from '../decorators/toggleOpen'


 class Article extends Component {

    static propTypes = {
        article: PropTypes.object.isRequired
    }

    getArticle = () => {

        const {article,isOpen} = this.props
        if( !isOpen) return
        return (
            <section>
                {article.text}
                <CommentList comments={article.comments}/>
            </section>

        )
    }

    render() {
    const {article, toggleOpen, isOpen} = this.props
        console.log('___', 'update')
        return (
            <div>
                <h2>{article.title}</h2>
                <button onClick={toggleOpen}>{!isOpen ? 'open' : 'close'}</button>
                { //isOpen &&
                     this.getArticle()
                }
            </div>
        )
    }
}

export default toggleOpen(Article)