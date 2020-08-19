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

<div class="bg-gray-100 rounded-lg text-center h-full min-h-screen flex flex-col ">
	<Router url="{url}">
		<div class=" flex justify-between capitalize border-b border-gray-300">
			<h1 class="sm:text-3xl ml-4 py-2 text-gray-700 font-semibold">My contacts</h1>
			<nav class=" flex items-center justify-between text-lg">
				<NavLink to="/">Contacts</NavLink>
				<NavLink to="add-contact">Add Contact</NavLink>
			</nav>
		</div>
		
			<Route path="add-contact" component="{AddContactForm}" />
			<Route path="/" component="{ContactList}" />
		
 
	</Router>
	
</div>

