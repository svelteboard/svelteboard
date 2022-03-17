<script>
	let iframe;
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
<div class="max-w-2xl m-auto mt-16">
	<h1 class="text-3xl tracking-tight font-extrabold text-slate-900">Stripe Checkout Playground</h1>
	<h3 class="text-slate-600 mb-4">
		Stripe Checkout lets you integrate payment processing into your app.<br />
		Full Demo at:
		<a class="underline text-blue-600" href="https://stripeplayground.vercel.app/"
			>stripeplayground.vercel.app</a
		>
	</h3>
	<p class="prose prose-slate prose-xl">
		Stripe Checkout supports one-time payments, subscriptions, and a ton of different payment
		methods. Checkout works by first creating a checkout session which tells Stripe, and then
		redirecting to Stripe. The session you create tells Stripe what the customer is buying (by
		passing a Price ID or making product on the fly with <span
			class="font-mono text-slate-900 bg-slate-200 p-1 rounded-md text-lg">price_data</span
		>), how many they are ording (by passing
		<span class="font-mono text-slate-900 bg-slate-200 p-1 rounded-md text-lg">quantity</span>), how
		often (<span class="font-mono text-slate-900 bg-slate-200 p-1 rounded-md text-lg"
			>mode: 'payment'</span
		>
		or
		<span class="font-mono text-slate-900 bg-slate-200 p-1 rounded-md text-lg"
			>mode: 'subscription'</span
		>), where to send the customer on success or on cancel (<span
			class="font-mono text-slate-900 bg-slate-200 p-1 rounded-md text-lg">success_url</span
		>
		or
		<span class="font-mono text-slate-900 bg-slate-200 p-1 rounded-md text-lg">cancel_url</span>),
		and other optional fields like payment methods, customer id, metadata, and more!<br />
		Full list of parameters:
		<a href="https://stripe.com/docs/api/checkout/sessions/create" target="_blank"
			>stripe.com/docs/api/checkout/sessions/create</a
		> <br /><br />

		Each product is an object in the
		<span class="font-mono text-slate-900 bg-slate-200 px-2 py-1 rounded-md text-lg"
			>line_items</span
		>
		array. Each item can have a name, description, and image that can be set ahead of time or on the
		fly. From the Stripe Dashboard, you can also setup recurring billing data, and upsells (for subscriptions),
		and
		<a href="https://stripe.com/docs/payments/checkout/cross-sells" target="_blank">cross-sells</a>.
	</p>
</div>

<div class="max-w-xl m-auto prose prose-slate pt-8 prose-a:text-blue-600">
	<h3>More Reading</h3>
	<ul>
		<a href="https://stripe.com/payments/checkout" target="_blank">
			<li>Stripe Checkout</li>
		</a>
		<a href="https://stripe.com/docs/payments/checkout" target="_blank">
			<li>Stripe Checkout Docs</li>
		</a>
		<a href="https://stripe.com/docs/keys" target="_blank">
			<li>Manage Stripe API Keys</li>
		</a>
		<a href="https://stripe.com/docs/payments/checkout/migrating-prices" target="_blank">
			<li>Stripe Checkout Prices API</li>
		</a>
		<a href="https://www.srmullen.com/articles/sveltekit-stripe-integration/" target="_blank">
			<li>Integrating SvelteKit and Stripe Checkout</li>
		</a>
		<a
			href="https://github.com/srmullen/sveltekit-stripe/tree/7e239e1ae8486daacf2de451a0923e1c5e6b9bb2"
			target="_blank"
		>
			<li>srmullen / sveltekit-stripe</li>
		</a>
		<a href="https://www.sveltestripe.com/" target="_blank">
			<li>Svlelte Stripe</li>
		</a>
		<a href="https://stripe.com/payments/payment-links" target="_blank">
			<li>Stripe payment links</li>
		</a>
		<a href="https://stripe.com/invoicing" target="_blank">
			<li>Stripe Invoicing</li>
		</a>
		<a href="https://stripe.com/docs/api/checkout/sessions" target="_blank">
			<li>Stripe Checkout Sessions API DOCS</li>
		</a>

		<a href="https://stripe.com/docs/js" target="_blank">
			<li>Stripe JS API</li>
		</a>
	</ul>
</div>

<div>
	<iframe
		class="w-full h-[2500px] md:h-[1500px]"
		src="https://stripeplayground.vercel.app/embed"
		title="Stripe Playground"
	/>
</div>
