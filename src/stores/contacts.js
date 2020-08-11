import { writable } from 'svelte/store';

const InitialContacts = [
    {   name: 'john doe',
        phone: '1234567890',
        email: 'john@sample.com',
        starred: false
    },
    {   name: 'jane doe',
        phone: '6789012345',
        email: 'jane@sample.com',
        starred: false
    }
]
const {subscribe, set, update} = writable(InitialContacts)

const addContact = (contact) => {
    if(contact.starred === undefined) {
        contact.starred = false
    }
    update(contacts => [contact, ...contacts])
}

export default {addContact, subscribe}
