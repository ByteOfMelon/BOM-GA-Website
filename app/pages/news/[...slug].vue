<script setup>
const route = useRoute()

const { data: article, pending, error } = await useAsyncData(
	route.path,
	() => {
		return queryCollection('news').where('path', '=', route.path).first();
	}
)

// Helper function to format the date string for better readability.
const formatDate = (dateString) => {
	if (!dateString) return ''
	const options = { year: 'numeric', month: 'long', day: 'numeric' }
	return new Date(dateString).toLocaleDateString(undefined, options)
}

useHead(() => ({
    title: article.value ? article.value.title : "Loading...",
    meta: [
        { 
            key: 'description',
            name: 'description', 
            content: article.value ? article.value.description : "Read this news article on the official site of the Byte of Melon Community Game Awards." 
        },

        // Corrected Open Graph tags with 'property' and a unique 'key'
        { 
            key: 'og:title',
            property: 'og:title', 
            content: article.value ? article.value.title : "Byte of Melon Community Game Awards"
        },
        { 
            key: 'og:type',
            property: 'og:type', 
            content: 'website'
        },
        { 
            key: 'og:description',
            property: 'og:description', 
            content: article.value ? article.value.description : "Read this news article on the official site of the Byte of Melon Community Game Awards."
        },
        { 
            key: 'og:image',
            property: 'og:image', 
            content: article.value ? article.value.image : "https://ga.byteofmelon.com/img/generic-banner.png"
        },
    ]
}));
</script>

<template>
	<div class="flex flex-col justify-center items-center space-y-4 p-8">
		<div class="flex flex-col items-center space-y-8 text-center w-full" v-if="error || !article">
			<h1 class="text-5xl font-extrabold mb-4 grad-title text-shadow-lg">Error loading article</h1>
			<div class="card justify-center items-center px-12 py-4 flex flex-col space-y-4">
				<p>This article may have moved or been deleted.</p>
				<NuxtLink to="/news">
					<button>Return to news page</button>
				</NuxtLink>
			</div>
		</div>

		<div class="flex flex-col items-center space-y-8 text-center w-full" v-else-if="article">
			<img :src="article.image" class="w-1/3" />
			<h1 class="text-5xl font-extrabold mb-4 grad-title text-shadow-lg">{{ article.title }}</h1>
			<div class="card justify-center items-center px-12 py-4 flex flex-col space-y-4">
				<p>{{ article.description }}</p>
				<div>
					<p class="text-base text-gray-400">Published on {{ formatDate(article.date) }}</p>
				</div>
                <div class="py-6 w-2/3">
                    <hr class="w-full" />
                </div>
				<ContentRenderer class="article-content" :value="article" />
			</div>

			<h1 class="text-5xl font-extrabold mb-4 grad-title text-shadow-lg">Share this article</h1>
			<div class="card justify-center items-center px-12 py-4 flex flex-col space-y-4">
				<div class="flex flex-row socials items-center text-4xl space-x-8">
                    <NuxtLink :to="`https://www.facebook.com/sharer/sharer.php?u=https%3A//ga.byteofmelon.com${article.path}`" class="flex items-center socials-generic">
                        <fa :icon="['fab', 'facebook']" />
                    </NuxtLink>

                    <NuxtLink :to="`https://x.com/intent/post?text=${article.title}%20https%3A%2F%2Fga.byteofmelon.com${article.path}`" class="flex items-center socials-generic">
                        <fa :icon="['fab', 'x-twitter']" />
                    </NuxtLink>
                    
                    <NuxtLink :to="`https://bsky.app/intent/compose?text=${article.title}%20from%20%40byteofmelon.com%20Community%20Game%20Awards%20https%3A//ga.byteofmelon.com${article.path}`" class="flex items-center socials-generic">
                        <fa :icon="['fab', 'bluesky']" />
                    </NuxtLink>
                </div>
			</div>
		</div>
	</div>
</template>