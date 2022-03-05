<script>
	async function choosePlan(plan) {
		const res = await fetch('/stripe/checkout', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ priceId: plan.price.id })
		});
		const { sessionId } = await res.json();
		// stripe.redirectToCheckout({
		// 	sessionId
		// });
	}
</script>
