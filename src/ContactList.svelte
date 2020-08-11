<script>
    import contacts from './stores/contacts'
    console.log($contacts)
    console.log(contacts)
</script>

<div>
    {#each $contacts as c} 
    <div class="bg-white rounded-lg flex flex-col border border-red-600">
        <div><span>name</span>: <span>{c.name}</span></div>
        <div><span>phone</span>: <span>{c.phone}</span></div>
        <div><span>email</span>: <span>{c.email}</span></div>
        <div><span>starred</span>: <span>{c.starred}</span></div>
    </div>
        
    {/each}
</div>