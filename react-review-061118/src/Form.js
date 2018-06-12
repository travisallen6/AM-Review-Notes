import React, {Component} from 'react'

export default class Form extends Component {
    constructor(){
        super()
        this.state = {
            input: ''
        }
        this.handleInput = this.handleInput.bind(this)
    }

    handleInput(event){
        this.setState({
          input: event.target.value
        })
    }

    render(){
        return (
            <div> 
                <h1> {this.props.message}</h1>
                <input 
                    onChange={ this.handleInput } 
                    value={ this.state.input } />
            </div>
        )
        
    }
}
