<template>
	<div class="bg-slate-900 min-h-screen text-white font-sans">
		<header class="border-b border-slate-700">
			<div class="container mx-auto p-4 flex justify-between items-center">
				<h1 class="text-2xl font-bold text-green-400">
				<NuxtLink to="/">Test</NuxtLink>
				</h1>
				<nav class="space-x-6">
				<NuxtLink to="/" class="hover:text-green-300 transition-colors">Home</NuxtLink>
				<NuxtLink to="/news" class="hover:text-green-300 transition-colors">News</NuxtLink>
				</nav>
			</div>
		</header>

		<main class="container mx-auto p-4 pt-8">
			<!-- NuxtPage is a component that renders the current page based on the route -->
			<NuxtPage />
		</main>

		<footer class="text-center p-4 mt-12 text-slate-500 text-sm">
			<p>&copy; {{ new Date().getFullYear() }} Test Inc. All rights reserved.</p>
		</footer>
	</div>
</template>

<style>
/* Global styles for a smooth experience */
body {
  margin: 0;
  font-family: 'Inter', sans-serif;
}

/* Style for active navigation links */
.router-link-exact-active {
  color: #4ade80; /* This is Tailwind's green-400 */
  font-weight: 600;
}
</style>
