<script>
    import contacts from './stores/contacts'
    console.log($contacts)
    console.log(contacts)
</script>

<div class=" flex flex-col mt-16 sm:mt-0">
    {#each $contacts as c} 
    <div class=" text-xs p-2 mt-2 bg-white rounded-lg flex flex-col sm:flex-row shadow-sm sm:shadow-xl sm:py-8 sm:pl-4 text-center sm:text-left mt-12 sm:text-lg items-center">
        <img src="{c.img}" class="rounded-full "/>
        <div class="flex flex-col mt-2 sm:mt-0 sm:ml-8 self-stretch justify-center sm:text-left">
            <div class="text-gray-700 font-semibold text-sm font-bold sm:text-xl"><span>{c.name}</span></div>
            <div><span><a href="tel:{c.phone}">{c.phone}</a></span></div>
            <div><span><a href="mailto:{c.email}">{c.email}</a></span></div>
            <div><span>{c.starred}</span></div>
        </div>
    </div>
        
    {/each}
</div>