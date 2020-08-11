import { writable } from 'svelte/store';

const InitialContacts = [
    {   name: 'john doe',
        ph: '1234567890',
        email: 'john@sample.com',
        starred: false
    },
    {   name: 'jane doe',
        ph: '6789012345',
        email: 'jane@sample.com',
        starred: false
    }
]
const {subscribe, set, update} = writable(InitialContacts)

const addContact = (contact) => {
    update(contacts => [...contacts, contact])
}

export default {addContact, subscribe}
