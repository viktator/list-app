import React, {Component} from 'react'
import {connect} from 'react-redux'
import {increment} from '../AC'

 class Counter extends Component {
   
    render() {
        return (
            <div>
                <h2>{this.props.counter}</h2>
                <button onClick={this.props.increment}>Increase me</button>
            </div>
        )
    }
}

export default connect((state) => ({
    counter: state.counter
}), {increment})(Counter)