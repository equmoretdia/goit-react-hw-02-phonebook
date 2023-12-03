import React from 'react';

import { nanoid } from 'nanoid/non-secure';

class App extends React.Component {
  state = {
    contacts: [],
    name: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const newContact = {
      id: nanoid(),
      name: this.state.name,
    };
    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
    this.formReset();
  };

  formReset = () => {
    this.setState({ name: '' });
  };

  handleChange = e => {
    console.log(e);
    const { name, value } = e.currentTarget;
    console.log(name);
    console.log(value);
    this.setState({ [name]: value });
  };

  render() {
    const { contacts, name } = this.state;
    return (
      <>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
              required
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <div>
          <h2>Contacts</h2>
          <ul>
            {contacts.map(contact => (
              <li key={contact.id}>{contact.name}</li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default App;
