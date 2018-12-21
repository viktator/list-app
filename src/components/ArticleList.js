import React, {Component} from 'react'
import Article from './Article'
import accordeon from '../decorators/accordeon'

 class ArticleList extends Component{

    // state = {
    //     openArticleId: null
    // }

    // toggleOpen (openArticleId)  {
    //     this.setState({
    //         openArticleId: openArticleId === this.state.openArticleId ? null : openArticleId
    //     })
    // }

    render() {

        const {articles, openItemId, toggleOpenItem} = this.props
        const listItem = articles.map(article => <li key={article.id}>
            <Article article={article}
                    isOpen = {article.id === openItemId}
                    toggleOpenItem={ toggleOpenItem( article.id)}
                />
             </li>)
        return (
            <div>
           <ul>
               {listItem}
           </ul>
            </div>
        )
    }
}
export default accordeon(ArticleList)