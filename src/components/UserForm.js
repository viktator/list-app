import React, {Component} from "react";
import './main.css'


export default class UserForm extends Component {

    state = {
        userName: '',
        text: ''
    }
    getClassName = (type) => {
      return  this.state[type].length < 7 ? 'error_input' : ''
    }

    hendleChangeInput = (type) => (event) => {
    
        this.setState({
        [type]: event.target.value
        })
    }

    render() {
        return (
            <div>
                name: <input type="text"
                 value={this.state.userName} 
                 onChange={this.hendleChangeInput('userName')}
                 className={this.getClassName('userName')}
                 />
                text: <input type="text"
                 value={this.state.text}
                  onChange={this.hendleChangeInput('text')}
                  className={this.getClassName('text')}
                  />
            </div>

        )
    }
}