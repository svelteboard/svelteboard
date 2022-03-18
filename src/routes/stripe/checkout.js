import Stripe from 'stripe';

export async function post({ request }) {
	const res = await request.json();
	const { stripe_secret, checkout_session } = res;
	const stripe = Stripe(stripe_secret);

	try {
		const session = await stripe.checkout.sessions.create(checkout_session);
		const sessionId = session.id;
		return {
			headers: { 'Content-Type': 'application/json' },
			body: { sessionId }
		};
	} catch (err) {
		console.log(err.raw.message);
		return {
			status: 500,
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				error: err.raw.message
			})
		};
	}
}
