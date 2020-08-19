<script>
    import contacts from './stores/contacts'
    console.log($contacts)
    console.log(contacts)
    let name;
    let phone;
    let email;
    let starred=false;
    const handleSubmit = (e) => {
        e.preventDefault()

        contacts.addContact({name, phone, email, starred})
    }
</script>

<form on:submit={handleSubmit} class="flex flex-col border border-red-300">
    <input bind:value={name} placeholder="name" required>
    <input type="tel" bind:value={phone} placeholder="phone" required>
    <input type="email" bind:value={email} placeholder="email" required>
    <label>
        <input type="checkbox" bind:value={starred}>
        starred
    </label>
    
    <button type="submit" class="border border-red-300">submit</button>
</form>