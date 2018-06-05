import React from 'react';
import { Card } from 'semantic-ui-react';
import ContactCard from './contact-card';

export default function ContactList({contacts, deleteContact}){ // replace this line

  const cards = () => {
    return contacts.map(contact => {
      return (
        <ContactCard
        key={contact._id}
        contact={contact}
        deleteContact={deleteContact} /> // and this one
      )
    })
  }

  return (
    <Card.Group>
      { cards() }
    </Card.Group>
  )
}