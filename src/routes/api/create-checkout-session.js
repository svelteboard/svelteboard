// //import Stripe from 'stripe';
// const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;

// export const stripe = new Stripe(STRIPE_SECRET_KEY);

// export async function post(req) {
// 	if (typeof req.body.priceId !== 'string') {
// 		return {
// 			status: 400,
// 			headers: {},
// 			body: JSON.stringify({
// 				error: {
// 					message: 'priceId is required'
// 				}
// 			})
// 		};
// 	}

// 	const priceId = req.body.priceId;

// 	try {
// 		const session = await stripe.checkout.sessions.create({
// 			mode: 'subscription',
// 			payment_method_types: ['card'],
// 			line_items: [
// 				{
// 					price: priceId,
// 					quantity: 1
// 				}
// 			],
// 			success_url: `http://${req.host}/?sessionId={CHECKOUT_SESSION_ID}`,
// 			cancel_url: `http://${req.host}/`
// 		});
// 		return {
// 			status: 200,
// 			headers: {},
// 			body: JSON.stringify({
// 				sessionId: session.id
// 			})
// 		};
// 	} catch (err) {
// 		return {
// 			status: 500,
// 			headers: {},
// 			body: JSON.stringify({
// 				error: err
// 			})
// 		};
// 	}
// }
