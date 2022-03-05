<script>
	import Repl from '$lib/repl';
	import { onMount } from 'svelte';
	let repl;

	onMount(() => {
		repl.set({ components });
	});

	let components = [
		{
			name: 'App',
			type: 'svelte',
			source: `<script>
	import { onMount } from 'svelte';
	import {loadStripe} from '@stripe\/stripe-js';
	
		onMount(async () => {
			\/\/ Stripe.js will not be loaded until \`loadStripe\` is called
const stripe = await loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
				});
	
	async function checkout(){
			\/\/ Call your backend to create the Checkout Session
	const response = await fetch('\/create-checkout-session', { method: 'POST' });
	const session = await response.json();

	\/\/ When the customer clicks on the button, redirect them to Checkout.
	const result = await stripe.redirectToCheckout({
		sessionId: session.id,
	});

	if (result.error) {
		\/\/ If \`redirectToCheckout\` fails due to a browser or network
		\/\/ error, display the localized error message to your customer
		\/\/ using \`result.error.message\`.
	}
	}
<\/script>

`
		}
	];
</script>

<div class="max-w-7xl m-auto px-2 pt-8 md:pt-32 pb-16">
	<div class="flex">
		<h2 class="grow text-3xl tracking-tight font-extrabold text-slate-900 sm:text-4xl">Stripe</h2>
	</div>
</div>

<div class="max-w-full m-auto h-[700px] border shadow-xl rounded-lg overflow-clip">
	<Repl bind:this={repl} on:change={(e) => (components = e.detail.components)} />
</div>
