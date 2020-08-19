import { writable } from 'svelte/store';

const InitialContacts = [
    {   name: 'Uzumaki Naruto',
        phone: '1234567890',
        email: 'ramen@sample.com',
        starred: false,
        img: 'https://source.unsplash.com/100x100/?flower'
    },
    {   name: 'Gon Freecs',
        phone: '6789012345',
        email: 'gon@sample.com',
        starred: false,
        img: 'https://source.unsplash.com/100x100/?flower'
    }
]
const {subscribe, set, update} = writable(InitialContacts)

const addContact = (contact) => {
    if(contact.starred === undefined) {
        contact.starred = false
    }
    if(contact.img === undefined) {
        contact.img = 'https://source.unsplash.com/100x100/?flower'
    }
    update(contacts => [contact, ...contacts])
}

export default {addContact, subscribe}
