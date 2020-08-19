<script>
	import contacts from './stores/contacts'
	import ContactList from './ContactList.svelte'
	import AddContactForm from './AddContactForm.svelte'
	import { Router, Route, Link } from "svelte-routing";
	export let url = "";

// contacts.subs returns a function to run before unmount
	// let contacts;
	// const unsubscribe = contacts.subscribe(value => {
	// 	contacts = value;
	// });
</script>

<div class="bg-gray-100 rounded-lg text-center h-full min-h-screen flex flex-col ">
	<Router url="{url}">
		<div class="bg-teal-400 flex justify-between">
			<h1 class=" p-4 sm:text-4xl text-white capitalize">My contacts</h1>
			<nav>
				<Link to="/">Home</Link>
				<Link to="add-contact">Add Contact</Link>
			</nav>
		</div>
		
			<Route path="add-contact" component="{AddContactForm}" />
			<Route path="/" component="{ContactList}" />
		
 
	</Router>
	
</div>

