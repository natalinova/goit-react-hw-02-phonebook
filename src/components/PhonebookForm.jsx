import { nanoid } from "nanoid";
import { Component } from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Form} from './PhonebookStyled'

export default class PhonebookForm extends Component {
    state = {
        name: '',
        number: ''
        
    }
    nameId = nanoid();
    numberId = nanoid();

    handleSubmit = (e) => {
        alert('wow!')
        console.log(e)
        const variant = e.currentTarget.value
        console.log(variant)
    }
    handleInput = (e) => {
        console.log(e)
        const { name, value } = e.target;
        this.setState({
            [name]: value
        }
        )
    }
   
    
    // handleSubmit = (e) => {
    //     console.log(e)
    //     //  e.preventDefault();
    //     // const { name, number } = this.state;
       
    //     //     this.props.onSubmit({ name, number });
    //     //     this.setState({
    //     //         name: '',
    //     //         number: ''
    //     //     })
    // }


    render() {
        const { nameId, numberId, handleInput, handleSubmit } = this;
        return (
        
                <Form onSubmit={handleSubmit}>
                <label htmlFor={nameId}> Name:</label>
                    <input
                        id={nameId}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={this.state.value}
                    onChange={handleInput}
                />
               
                <label htmlFor={numberId}> Phone: </label>
                <input
                    id={numberId}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={this.state.number}
                    onChange={handleInput}
                    />
            
                <button type="button">Add people</button>
                </Form>
                
    
        )
    }
}