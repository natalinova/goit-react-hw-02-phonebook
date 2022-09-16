import { Component } from "react";
import { nanoid } from "nanoid";
import PhonebookForm from "./PhonebookForm";
import PhonebookList from "./PhonebookList";


export default class Phonebook extends Component {
    state = {
        contacts: [
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }
  
  addContact = (contact) => {
    this.setState((prev) => {
      const newContact = {
        id: nanoid(),
        ...contact
      }
      return {
        contacts: [...prev.contacts, newContact] 
      }
    })
}
    render() {
        // const { addContact } = this;
        return (
       
        <div>
                <PhonebookForm />
                {/* <PhonebookList data={this.contacts}/> */}
                </div>
  );
}
  
}
