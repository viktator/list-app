import React, {Component} from 'react'

export default (Component) => class WrapperAccordeonComponent extends Component {
    state = {
        openItemId: null
    }

    toggleOpenItem = (openItemId) => ()=> {
        this.setState({
            openItemId: openItemId === this.state.openItemId ? null : openItemId
        })
    }

    render() {
        return (
            <Component {...this.props}  toggleOpenItem={this.toggleOpenItem} openItemId={this.state.openItemId}/>
        )
    }
}