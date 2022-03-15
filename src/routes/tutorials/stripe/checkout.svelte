<script>
	import { loadStripe } from '@stripe/stripe-js';
	import { onMount } from 'svelte';

	let stripe;
	let stripe_secret =
		'sk_test_51KdbAWEirxNxOhIUVcKnTO7MTGLvxO4cWjU0DddPWuw1VUYIa6bgVZseAmWlMnlDZHwzLLoFPhkLvNvIJqkMHNnv00pPOqZ0Iu';
	let stripe_perishable =
		'pk_test_51KdbAWEirxNxOhIUPKUFRqICuP7FUWzu2T49O8z0Hwh4dMz2xV2OcUGa4favl0sXaHrBsIOf4VHGd5lqFmqtuSmB00y2AXZPjN';
	let quantity = 1;
	let name = 'Stripe Playground';
	let description = 'This is a playground to check out Stripe Checkout';
	let currency = 'usd';
	let unit_amount = '1000';
	let images = '';
	let priceData = true;
	let price_id = 'price_1Kdc0YEirxNxOhIUSSrZ91yj';
	async function postStripe() {
		const stripe = await loadStripe(stripe_perishable);
		const headers = new Headers();
		const product_data = { name, description };
		if (images != '') {
			product_data.images = images;
		}
		headers.append('Content-Type', 'application/json');
		const res = await fetch('/stripe/checkout', {
			method: 'POST',
			headers,
			body: JSON.stringify({
				stripe_secret,
				stripe_perishable,
				price_data: { currency, unit_amount, product_data },
				price_id,
				priceData,
				quantity
			})
		});
		const { sessionId } = await res.json();
		stripe.redirectToCheckout({
			sessionId
		});
	}
	onMount(async () => {
		stripe = await loadStripe(stripe_perishable);
	});
	$: stripeObj = () => {
		if (priceData) {
			return {
				price_data: {
					currency: currency,
					unit_amount: unit_amount,
					product_data: {
						name,
						description,
						images: [images]
					}
				}
			};
		}
		return price_id;
	};
</script>

<svelte:head>
	<title>Stripe Checkout Playground</title>
	<meta property="og:title" content="Stripe Checkout Playground" />
	<meta property="og:site_name" content="Svelte Board" />
	<meta property="og:url" content="https://svelteboard.com/tutorials/stripe/checkout" />
	<meta property="og:description" content="Stripe playground to test the Stripe Checkout API." />
	<meta property="og:type" content="article" />
	<meta
		property="og:image"
		content="https://svelteboard.com/content/stripeCheckoutPlayground.png"
	/>
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="max-w-4xl m-auto mt-20 px-4">
	<h1 class="text-3xl tracking-tight font-extrabold text-slate-900">Stripe Checkout Playground</h1>
	<p class="prose prose-slate prose-xl">
		Stripe Checkout lets you integrate payment processing into your app. With Checkout, you create
		the cart on your end and send the customer to the Stripe for Checkout. Stripe also has no code
		options for <a href="https://stripe.com/payments/payment-links" target="_blank">Payment Links</a
		>
		and <a href="https://stripe.com/invoicing" target="_blank">Invoicing</a>.
	</p>

	<div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
		<div class="sm:col-span-3">
			<label for="stripe-sk" class="block text-sm font-medium text-slate-700">
				Stripe Secret Key</label
			>
			<div class="mt-1">
				<input
					type="text"
					name="stripe-sk"
					bind:value={stripe_secret}
					class="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-slate-300 rounded-md"
				/>
			</div>
		</div>

		<div class="sm:col-span-3">
			<label for="stripe-pk" class="block text-sm font-medium text-slate-700">
				Stripe Perishable Key
			</label>
			<div class="mt-1">
				<input
					type="text"
					name="stripe-pk"
					bind:value={stripe_perishable}
					class="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-slate-300 rounded-md"
				/>
			</div>
		</div>

		<div class="sm:col-span-6 mt-8">
			<div class="flex items-center justify-between max-w-xl m-auto">
				<span class="flex-grow flex flex-col">
					<span class="text-sm font-medium text-gray-900" id="availability-label"
						><span class={priceData ? '' : 'text-gray-500'}>Price Data</span> /
						<span class={priceData ? 'text-gray-500' : ''}>Price ID</span></span
					>
					<span class="text-sm text-gray-500" id="availability-description"
						>{priceData
							? 'Price data lets you create a product on the fly.'
							: 'Price ID can be used, if you created your product ahead of time in the Stripe Dashboard or with an API.'}</span
					>
				</span>
				<button
					on:click={() => (priceData = !priceData)}
					type="button"
					class="{priceData
						? 'bg-blue-600'
						: 'bg-gray-200'} relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					role="switch"
					aria-checked="false"
					aria-labelledby="availability-label"
					aria-describedby="availability-description"
				>
					<span
						aria-hidden="true"
						class="{priceData
							? 'translate-x-5'
							: 'translate-x-0'} pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
					/>
				</button>
			</div>
		</div>
		{#if priceData}
			<div class="sm:col-span-3">
				<label for="currency" class="block text-sm font-medium text-slate-700"> Currency </label>
				<div class="mt-1">
					<input
						type="text"
						name="currency"
						bind:value={currency}
						class="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-slate-300 rounded-md"
					/>
				</div>
			</div>

			<div class="sm:col-span-3">
				<label for="unit_amount" class="block text-sm font-medium text-slate-700">
					Unit Amount (Price in Cents)
				</label>
				<div class="mt-1">
					<input
						type="number"
						name="unit_amount"
						bind:value={unit_amount}
						min="0"
						class="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-slate-300 rounded-md"
					/>
				</div>
			</div>

			<div class="sm:col-span-4">
				<label for="name" class="block text-sm font-medium text-slate-700">Name</label>
				<div class="mt-1">
					<input
						type="text"
						name="name"
						bind:value={name}
						class="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-slate-300 rounded-md"
					/>
				</div>
			</div>

			<div class="sm:col-span-4">
				<label for="description" class="block text-sm font-medium text-slate-700"
					>Description
				</label>
				<div class="mt-1">
					<textarea
						type="text"
						name="description"
						bind:value={description}
						class="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-slate-300 rounded-md"
					/>
				</div>
			</div>

			<div class="sm:col-span-4">
				<label for="images" class="block text-sm font-medium text-slate-700"> Image URL </label>
				<div class="mt-1">
					<input
						type="text"
						name="images"
						bind:value={images}
						class="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-slate-300 rounded-md"
					/>
				</div>
			</div>
		{:else}
			<div class="sm:col-span-4">
				<label for="price_id" class="block text-sm font-medium text-slate-700"> Price ID </label>
				<div class="mt-1">
					<input
						type="text"
						name="price_id"
						bind:value={price_id}
						class="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-slate-300 rounded-md"
					/>
				</div>
			</div>
		{/if}

		<div class="sm:col-span-4">
			<label for="quantity" class="block text-sm font-medium text-slate-700"> Quantity </label>
			<div class="mt-1">
				<input
					name="quantity"
					type="number"
					min="1"
					bind:value={quantity}
					class="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-24 sm:text-sm border-slate-300 rounded-md"
				/>
			</div>
		</div>
	</div>
	<button
		on:click={postStripe}
		type="submit"
		class="mt-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
		>Check me out!
	</button>
</div>
<div class="bg-slate-900 text-slate-50 max-w-3xl m-auto mt-8 p-8 font-mono rounded-md shadow">
	<p>
		line_items: [{`{`}<br />
		&nbsp;&nbsp;&nbsp;&nbsp;price_data: {'{'}<br />
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;currency:
		<span class="text-[#7dd3fc]">'{currency}'</span>,<br />
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;unit_amount:
		<span class="text-[#7dd3fc]">{unit_amount}</span>,<br />
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;product_data:{'{'}<br />
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name:
		<span class="text-[#7dd3fc]">'{name}'</span>,<br />
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;description:
		<span class="text-[#7dd3fc]">'{description}'</span>,<br />
		{#if images}
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;images: [<span
				class="text-[#7dd3fc]">'{images}'</span
			>]<br />
		{/if}
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br />
		&nbsp;&nbsp;&nbsp;&nbsp;{`}`}, <br />
		&nbsp;&nbsp;&nbsp;&nbsp;quantity: <span class="text-[#7dd3fc]">{quantity}</span> <br />
		}]
	</p>
</div>

<div class="max-w-3xl m-auto prose prose-slate clear-both pt-8 pb-32 prose-a:text-blue-600">
	<h3>Next Steps</h3>
	<p class="prose-xl">
		This demo only uses one line_item, but you can create an array of objects for a cart, but you
		can add more line items to add more products. You can also use Stripe Checkout to create
		subscriptions! We've got more playground and Tutorials coming!
	</p>
	<h3>More Reading</h3>
	<ul>
		<a href="https://stripe.com/payments/checkout" target="_blank">
			<li>Stripe Checkout</li>
		</a>
		<a href="https://stripe.com/docs/keys" target="_blank">
			<li>Manage Stripe API Keys</li>
		</a>
		<a
			href="https://github.com/srmullen/sveltekit-stripe/tree/7e239e1ae8486daacf2de451a0923e1c5e6b9bb2"
			target="_blank"
		>
			<li>srmullen / sveltekit-stripe</li>
		</a>
		<a href="https://stripe.com/docs/payments/checkout" target="_blank">
			<li>Stripe Checkout Docs</li>
		</a>
		<a href="https://stripe.com/docs/payments/checkout/migrating-prices" target="_blank">
			<li>Stripe Checkout Prices API</li>
		</a>
	</ul>
</div>
