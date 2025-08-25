<script setup>
    useHead({ title: 'VODs' });

	const { data: vods, pending, error } = await useAsyncData("vods", () => queryCollection('vods').order('year', 'DESC').order("order", "ASC").all());

    // Helper function to format the date string for better readability.
    const formatDate = (dateString) => {
        if (!dateString) return '';
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }
</script>

<template>
	<div class="flex flex-col justify-center items-center space-y-4 p-8">
		<div class="flex flex-col items-center space-y-8 text-center w-full">
			<h1 class="text-5xl font-extrabold mb-4 grad-title text-shadow-lg">VODs</h1>
			<div class="card justify-center items-center px-12 py-4 flex flex-col space-y-4">
				<div class="flex" v-if="error">
					<p>Error loading VODs, please try again later</p>
				</div>
				<div class="flex" v-else-if="pending">
					<p>Loading VODs, please wait...</p>
				</div>
				<div class="flex flex-col w-full justify-center space-y-6 w-full" v-else-if="vods">
					<div class="flex flex-col w-full" v-for="vod in vods" :key="vod.path">
                        <h2 class="text-4xl font-extrabold mb-4 grad-title text-shadow-lg" :id="vod.year" v-if="vod.order === 1">{{ vod.year }}</h2>
                        <div class="flex flex-row w-full">
                            <NuxtLink :to="vod.path" class="w-full">
                                <div class="article flex flex-row items-center space-x-8">
                                    <img :src="`/img${vod.path}.png`" class="w-64" />
                                    <div class="flex flex-col space-y-2 text-left">
                                        <h3 class="text-xl font-bold">{{ vod.title }}</h3>
                                        <p class="text-base">{{ vod.description }}</p>
                                    </div>
                                </div>
                            </NuxtLink>
                        </div>
					</div>
				</div>
				<div class="flex" v-else>
					<i>No VODs found</i>
				</div>
			</div>
		</div>
	</div>
</template>
