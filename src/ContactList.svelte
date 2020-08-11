<script>
    import contacts from './stores/contacts'
    console.log($contacts)
    console.log(contacts)
</script>

<div>
    {#each $contacts as c} 
        <p>{c.name}</p>
    {/each}
</div>