import { writable } from 'svelte/store';

const InitialContacts = [
    {   name: 'Uzumaki Naruto',
        phone: '1234567890',
        email: 'ramen@sample.com',
        starred: false
    },
    {   name: 'Gon Freecs',
        phone: '6789012345',
        email: 'gon@sample.com',
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
