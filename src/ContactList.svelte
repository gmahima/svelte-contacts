<script>
    import contacts from './stores/contacts'
    console.log($contacts)
    console.log(contacts)
</script>

<div>
    {#each $contacts as c} 
        <div><span>name</span>: <span>{c.name}</span></div>
        <div><span>phone</span>: <span>{c.phone}</span></div>
        <div><span>email</span>: <span>{c.email}</span></div>
        <div><span>starred</span>: <span>{c.starred}</span></div>
    {/each}
</div>