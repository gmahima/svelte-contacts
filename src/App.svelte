<script>
	import contacts from './stores/contacts'
	import ContactList from './ContactList.svelte'
	import AddContactForm from './AddContactForm.svelte'
	

// contacts.subs returns a function to run before unmount
	// let contacts;
	// const unsubscribe = contacts.subscribe(value => {
	// 	contacts = value;
	// });
</script>


<div class="bg-gray-100 rounded-lg text-center h-full min-h-screen flex flex-col ">
	<h1 class="bg-teal-400 p-4 sm:text-4xl text-white capitalize">My contacts</h1>
	<div class="flex justify-around border border-red-700 my-auto">
		<ContactList />
		<AddContactForm />
	</div>
	
	
	
</div>

