import React, { Component } from 'react';

export default class Form extends Component {
    constructor() {
        super()
        this.state = {
            dropdown: '0',
            appointmentInput: '',
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = () => {

        this.props.submit(this.state.dropdown, this.state.appointmentInput)

        this.setState({
            dropdown: '0',
            appointmentInput: ''
        })


    }

    render() {
        let options = this.props.days.map( (optionDay, i) => {
            let label = `${optionDay.month}-${optionDay.day}`
            return (
                <option key={ i } value={ i } > { label } </option>
            )
        })
        

        return (
            <div>
                <select
                    name='dropdown'
                    onChange={ this.handleChange }
                    value={ this.state.dropdown } >
                    { options }
                </select>

                <input 
                    name='appointmentInput'
                    onChange={ this.handleChange }
                    value={ this.state.appointmentInput }/>
                <button
                 onClick={ this.handleSubmit }>Submit</button>
            </div>
        )
    }
}