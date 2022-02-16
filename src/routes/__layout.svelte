<script>
	import '../app.css';
</script>

<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')
  
  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          green: colors.green,
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<!--
  This example requires updating your template:

  ```
  <html class="h-full bg-gray-100">
  <body class="h-full">
  ```
-->
<div class="min-h-full">
	<!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
	<div class="fixed inset-0 flex z-40 lg:hidden" role="dialog" aria-modal="true">
		<!--
      Off-canvas menu overlay, show/hide based on off-canvas menu state.

      Entering: "transition-opacity ease-linear duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "transition-opacity ease-linear duration-300"
        From: "opacity-100"
        To: "opacity-0"
    -->
		<div class="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true" />

		<!--
      Off-canvas menu, show/hide based on off-canvas menu state.

      Entering: "transition ease-in-out duration-300 transform"
        From: "-translate-x-full"
        To: "translate-x-0"
      Leaving: "transition ease-in-out duration-300 transform"
        From: "translate-x-0"
        To: "-translate-x-full"
    -->
		<div class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-green-900">
			<!--
        Close button, show/hide based on off-canvas menu state.

        Entering: "ease-in-out duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "ease-in-out duration-300"
          From: "opacity-100"
          To: "opacity-0"
      -->
			<div class="absolute top-0 right-0 -mr-12 pt-2">
				<button
					type="button"
					class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
				>
					<span class="sr-only">Close sidebar</span>
					<!-- Heroicon name: outline/x -->
					<svg
						class="h-6 w-6 text-white"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>

			<div class="flex-shrink-0 flex items-center px-4">▦</div>
			<nav
				class="mt-5 flex-shrink-0 h-full divide-y divide-green-800 overflow-y-auto"
				aria-label="Sidebar"
			>
				<div class="px-2 space-y-1">
					<!-- Current: "bg-green-800 text-white", Default: "text-green-50 hover:text-white hover:bg-green-600" -->
					<a
						href="#"
						class="bg-green-800 text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
						aria-current="page"
					>
						<!-- Heroicon name: outline/home -->
						<svg
							class="mr-4 flex-shrink-0 h-6 w-6 text-green-100"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
							/>
						</svg>
						Home
					</a>

					<a
						href="#"
						class="text-green-50 hover:text-white hover:bg-green-700 group flex items-center px-2 py-2 text-base font-medium rounded-md"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="mr-4 flex-shrink-0 h-6 w-6 text-green-100"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M12 14l9-5-9-5-9 5 9 5z" />
							<path
								d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
							/>
						</svg>
						Tutorials
					</a>

					<a
						href="/snippets"
						class="text-green-50 hover:text-white hover:bg-green-700 group flex items-center px-2 py-2 text-base font-medium rounded-md"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="mr-4 flex-shrink-0 h-6 w-6 text-green-100"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M12 14l9-5-9-5-9 5 9 5z" />
							<path
								d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
							/>
						</svg>
						Code Snippets
					</a>
				</div>
			</nav>
		</div>

		<div class="flex-shrink-0 w-14" aria-hidden="true">
			<!-- Dummy element to force sidebar to shrink to fit close icon -->
		</div>
	</div>

	<!-- Static sidebar for desktop -->
	<div class="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
		<!-- Sidebar component, swap this element with another sidebar if you like -->
		<div
			class="flex flex-col flex-grow bg-gradient-to-b from-green-700 to-green-900 pt-5 pb-4 overflow-y-auto"
		>
			<div class="flex items-center flex-shrink-0 px-4">
				<h4 class="text-center w-full -ml-4 text-3xl text-green-50">▦</h4>
			</div>
			<nav
				class="mt-5 flex-1 flex flex-col divide-y divide-green-800 overflow-y-auto"
				aria-label="Sidebar"
			>
				<div class="px-2 space-y-1">
					<!-- Current: "bg-green-800 text-white", Default: "text-green-50 hover:text-white hover:bg-green-600" -->
					<a
						href="/"
						class="bg-green-800 text-white group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
						aria-current="page"
					>
						<!-- Heroicon name: outline/home -->
						<svg
							class="mr-4 flex-shrink-0 h-6 w-6 text-green-100"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
							/>
						</svg>
						Home
					</a>

					<a
						href="/tutorials"
						class="text-green-50 hover:text-white hover:bg-green-700 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
					>
						<!-- Heroicon name: outline/clock -->

						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="mr-4 flex-shrink-0 h-6 w-6 text-green-100"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M12 14l9-5-9-5-9 5 9 5z" />
							<path
								d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
							/>
						</svg>
						Tutorials
					</a>
					<a
						href="/tutorials"
						class="text-green-50 hover:text-white hover:bg-green-700 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="mr-4 flex-shrink-0 h-6 w-6 text-green-100"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"
							/>
						</svg>
						Code Snippets
					</a>
				</div>
			</nav>
		</div>
	</div>

	<main class="flex-1 pb-8 pl-64 max-w-5xl m-auto">
		<slot />
	</main>
</div>
