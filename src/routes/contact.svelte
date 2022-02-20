<script>
	async function handleSubmit() {
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');
		const body = {
			fname: fname,
			lname: lname,
			email: email,
			question: quest
		};
		const options = {
			method: 'POST',
			headers,
			mode: 'cors',
			body: JSON.stringify(body)
		};
		fetch('/api/send', options);
		submitButton.disabled = true;
		sent = true;
		submitButton.innerText = 'Question Sent!';
	}
	let fname, lname, email, quest, submitButton;
	let sent = false;
</script>

<div class="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
	<div class="relative max-w-xl mx-auto">
		<div class="text-center">
			<h2 class="text-3xl font-extrabold tracking-wider text-slate-900 sm:text-4xl uppercase">
				Send a Question
			</h2>
			<p class="mt-4 text-xl leading-6 text-slate-600">Shoot us a question or comment.</p>
		</div>
		<div class="mt-12">
			<form
				on:submit|preventDefault={handleSubmit}
				method="POST"
				class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
			>
				<div>
					<label for="first-name" class="block text-sm font-medium text-slate-700">First name</label
					>
					<div class="mt-1">
						<input
							type="text"
							name="first-name"
							id="first-name"
							autocomplete="given-name"
							bind:value={fname}
							class="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-slate-300 rounded-md"
						/>
					</div>
				</div>
				<div>
					<label for="last-name" class="block text-sm font-medium text-slate-700">Last name</label>
					<div class="mt-1">
						<input
							type="text"
							name="last-name"
							id="last-name"
							autocomplete="family-name"
							bind:value={lname}
							class="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-slate-300 rounded-md"
						/>
					</div>
				</div>
				<div class="sm:col-span-2">
					<label for="email" class="block text-sm font-medium text-slate-700">Email</label>
					<div class="mt-1">
						<input
							id="email"
							name="email"
							type="email"
							autocomplete="email"
							bind:value={email}
							class="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-slate-300 rounded-md"
						/>
					</div>
				</div>
				<div class="sm:col-span-2">
					<label for="question" class="block text-sm font-medium text-slate-700"
						>Question (or comment)</label
					>
					<div class="mt-1">
						<textarea
							id="question"
							name="question"
							rows="4"
							bind:value={quest}
							class="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border border-slate-300 rounded-md"
						/>
					</div>
				</div>

				<div class="sm:col-span-2">
					<button
						bind:this={submitButton}
						type="submit"
						class="{sent
							? 'text-green-800 bg-green-50'
							: 'text-white bg-green-700 hover:bg-green-600 hover:border-green-300 border-t border-green-500'} block w-full py-3 text-center rounded font-semibold shadow focus:outline-none focus-visible:underline lg:text-base"
						>Ask Question</button
					>
				</div>
			</form>
			{#if sent}
				<p class="mt-4 text-xl leading-6 text-slate-600 text-center">
					Great, we got your question! <br />
					With any luck we may have an answer for you!
				</p>
			{/if}
		</div>
	</div>
</div>
