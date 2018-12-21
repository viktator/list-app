import React, {Component} from "react";


export default class UserForm extends Component {

    state = {
        userName: ''
    }

    hendleChangeInput = (event) => {
        this.setState({
            userName: event.target.value
        })
    }

    render() {
        return (
            <div>
                name: <input type="text" value={this.state.userName} onChange={this.hendleChangeInput}/>
            </div>

        )
    }
}