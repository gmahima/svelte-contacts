<script>
    import contacts from './stores/contacts'
    console.log($contacts)
    console.log(contacts)
</script>

<div class=" flex flex-col">
    {#each $contacts as c} 
    <div class="bg-white rounded-lg flex flex-col shadow-xl mt-16 py-8 pl-4 text-left">
        <div class="text-gray-700 "><span>name</span>: <span>{c.name}</span></div>
        <div><span>phone</span>: <span>{c.phone}</span></div>
        <div><span>email</span>: <span>{c.email}</span></div>
        <div><span>starred</span>: <span>{c.starred}</span></div>
    </div>
        
    {/each}
</div>