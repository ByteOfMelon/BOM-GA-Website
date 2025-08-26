<script setup>
    useHead({ title: 'News' });

    definePageMeta({
        title: 'News'
    })

	const { data: articles, pending, error } = await useAsyncData("articles", () => queryCollection('news').order('date', 'DESC').all());

    // Helper function to format the date string for better readability.
    const formatDate = (dateString) => {
        if (!dateString) return '';
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }
</script>

<template>
	<div class="flex flex-col justify-center items-center space-y-4 sm:p-8 pt-8">
		<div class="flex flex-col items-center space-y-8 text-center w-full">
			<h1 class="text-3xl sm:text-5xl font-extrabold mb-4 grad-title text-shadow-lg">Latest News</h1>
			<div class="card justify-center items-center px-4 sm:px-12 py-4 flex flex-col space-y-4">
				<div class="flex" v-if="error">
					<p>Error loading news, please click the button below to visit News</p>
				</div>
				<div class="flex" v-else-if="pending">
					<p>Loading news, please wait...</p>
				</div>
				<div class="flex flex-row sm:flex-col w-full justify-center space-y-6 w-full" v-else-if="articles">
					<div class="flex flex-col sm:flex-row w-full" v-for="article in articles" :key="article.path">
						<NuxtLink :to="article.path" class="w-full">
							<div class="article flex flex-col sm:flex-row items-center sm:space-x-8">
								<img :src="article.image" class="w-64" />
								<div class="flex flex-col space-y-2 text-center sm:text-left sm:mt-0 mt-4">
									<h3 class="text-xl font-bold">{{ article.title }}</h3>
									<p class="text-base">{{ article.description }}</p>
									<p class="text-sm text-gray-400">{{ formatDate(article.date) }}</p>
								</div>
							</div>
						</NuxtLink>
					</div>
				</div>
				<div class="flex" v-else>
					<i>No news articles</i>
				</div>
			</div>
		</div>
	</div>
</template>
