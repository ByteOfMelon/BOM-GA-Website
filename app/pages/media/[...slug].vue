<script setup>
const route = useRoute()

const { data: vod, pending, error } = await useAsyncData(
	route.path,
	() => {
		return queryCollection('media').where('path', '=', route.path).first();
	}
)

// Helper function to format the date string for better readability.
const formatDate = (dateString) => {
	if (!dateString) return ''
	const options = { year: 'numeric', month: 'long', day: 'numeric' }
	return new Date(dateString).toLocaleDateString(undefined, options)
}

useHead(() => ({
    title: vod.value ? vod.value.title : "Loading...",
    meta: [
        { 
            key: 'description',
            name: 'description', 
            content: vod.value ? vod.value.description : "View this media on the official site of the Byte of Melon Community Game Awards." 
        },

        // Corrected Open Graph tags with 'property' and a unique 'key'
        { 
            key: 'og:title',
            property: 'og:title', 
            content: vod.value ? vod.value.title : "Byte of Melon Community Game Awards"
        },
        { 
            key: 'og:type',
            property: 'og:type', 
            content: 'website'
        },
        { 
            key: 'og:description',
            property: 'og:description', 
            content: vod.value ? vod.value.description : "View this media on the official site of the Byte of Melon Community Game Awards."
        },
        { 
            key: 'og:image',
            property: 'og:image', 
            content: vod.value ? `https://ga.byteofmelon.com/img${vod.path}.webp` : "https://ga.byteofmelon.com/img/generic-banner.png"
        },
    ]
}));
</script>

<template>
	<div class="flex flex-col justify-center items-center space-y-4 sm:p-8 pt-8">
		<div class="flex flex-col items-center space-y-8 text-center w-full" v-if="error || !vod">
			<h1 class="text-3xl sm:text-5xl font-extrabold mb-4 grad-title text-shadow-lg">Error loading media</h1>
			<div class="card justify-center items-center px-4 sm:px-12 py-4 flex flex-col space-y-4">
				<p>This media may have moved or been deleted.</p>
				<NuxtLink to="/media">
					<button>Return to media page</button>
				</NuxtLink>
			</div>
		</div>

		<div class="flex flex-col items-center space-y-8 text-center w-full" v-else-if="vod">
			<img :src="`/img${vod.path}.webp`" class="w-full sm:w-1/3" />
			<h1 class="text-3xl sm:text-5xl font-extrabold mb-4 grad-title text-shadow-lg">{{ vod.title }}</h1>
			<div class="card justify-center items-center px-4 sm:px-12 py-4 flex flex-col space-y-4">
				<p>{{ vod.description }}</p>
                <div class="py-6 w-2/3">
                    <hr class="w-full" />
                </div>
                <div class="article w-full lg:w-1/2">
                    <iframe :src="`https://www.youtube.com/embed/${vod.youtube_url}`" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="rounded-[16px] mb-4 w-full h-[200px] sm:h-[350px]"></iframe>
                </div>
				<ContentRenderer class="article-content" :value="vod" />
			</div>

			<h1 class="text-3xl sm:text-5xl font-extrabold mb-4 grad-title text-shadow-lg">Share this content</h1>
			<div class="card justify-center items-center px-4 sm:px-12 py-4 flex flex-col space-y-4">
				<div class="flex flex-row socials items-center text-4xl space-x-8">
                    <NuxtLink :to="`https://www.facebook.com/sharer/sharer.php?u=https%3A//ga.byteofmelon.com${vod.path}`" class="flex items-center socials-generic">
                        <fa :icon="['fab', 'facebook']" />
                    </NuxtLink>

                    <NuxtLink :to="`https://x.com/intent/post?text=${vod.title}%20https%3A%2F%2Fga.byteofmelon.com${vod.path}`" class="flex items-center socials-generic">
                        <fa :icon="['fab', 'x-twitter']" />
                    </NuxtLink>
                    
                    <NuxtLink :to="`https://bsky.app/intent/compose?text=${vod.title}%20from%20%40byteofmelon.com%20Community%20Game%20Awards%20https%3A//ga.byteofmelon.com${vod.path}`" class="flex items-center socials-generic">
                        <fa :icon="['fab', 'bluesky']" />
                    </NuxtLink>
                </div>
			</div>
		</div>
	</div>
</template>