<script>
	import contacts from './stores/contacts'
	import ContactList from './ContactList.svelte'
	import AddContactForm from './AddContactForm.svelte'
	import { Router, Route, Link } from "svelte-routing";
	import NavLink from './NavLink.svelte'
	export let url = "";

// contacts.subs returns a function to run before unmount
	// let contacts;
	// const unsubscribe = contacts.subscribe(value => {
	// 	contacts = value;
	// });
</script>

<div class="bg-gray-100  text-center h-full min-h-screen flex flex-col pb-40 ">
	<Router url="{url}">
		<div class=" flex justify-between capitalize border-b border-gray-400 px-8 sm:px-40 sm:mb-10 fixed sm:static w-full">
			<h1 class="text-sm sm:text-3xl py-2 text-gray-700 font-bold sm:font-semibold">My contacts</h1>
			<nav class=" flex items-center justify-between text-xs sm:text-lg">
				<NavLink to="/" className="mr-2 sm:mr-4">Contacts</NavLink>
				<NavLink to="add-contact">Add Contact</NavLink>
			</nav>
		</div>
		<div class="mx-8 sm:mx-40">
			<Route path="add-contact" component="{AddContactForm}" />
			<Route path="/" component="{ContactList}" />
		</div>
			
		
 
	</Router>
	
</div>

