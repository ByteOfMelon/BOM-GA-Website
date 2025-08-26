<template>
    <div class="flex flex-col justify-center items-center space-y-4 sm:p-8 pt-8">
        <div class="flex flex-col items-center space-y-8 text-center">
            <h1 class="text-3xl sm:text-5xl font-extrabold mb-4 grad-title text-shadow-lg">Game awards by the community, for the community</h1>
            <div class="card justify-center items-center px-4 sm:px-12 py-4 flex flex-col space-y-4">
                <p>Have your say in awarding the best video games! The Byte of Melon Game Awards is entirely decided by your own vote, rather than the views of a select few.</p>

                <h2 class="text-2xl sm:text-4xl font-extrabold !mt-8 mb-4 grad-title text-shadow-lg">About</h2>
                <p>
                    The Byte of Melon Game Awards is an annual game award show presented by Michael Webb, aka "Byte of Melon", on his Twitch channel, <NuxtLink to="https://twitch.tv/byteofmelon">twitch.tv/byteofmelon</NuxtLink>.<br /><br />
                    
                    The goal of the show is to allow the audience to run the show by allowing winners to be chosen by the audience (from a select number of candidates decided by the Byte of Melon Community Game Awards Nomination Committee). The committee exists to pick interesting categories and legitimate choices for each of these categories, but still provide the final decision to our community in the spirit of the show. After all, it is our belief that video games deserve to be honored by the gamers, not the media.<br /><br />

                    Participate with the community and get announcements first on the <NuxtLink to="https://discord.gg/bhVkwgCDtZ">BOM Community Discord Server</NuxtLink>!<br /><br />

                    Learn more about the selection process and the Nomination Committee below.
                </p>
                <NuxtLink to="/about">
                    <button>Learn More</button>
                </NuxtLink>
            </div>
            <h1 class="text-3xl sm:text-5xl font-extrabold mb-4 grad-title text-shadow-lg">Latest News</h1>
            <div class="card justify-center items-center px-4 sm:px-12 py-4 flex flex-col space-y-8">
                <div class="flex" v-if="error">
                    <p>Error loading news, please click the button below to visit News</p>
                </div>
                <div class="flex" v-else-if="pending">
                    <p>Loading news, please wait...</p>
                </div>
                <div class="flex w-full justify-center space-x-6" v-else-if="articles">
                    <div class="flex flex-col w-full sm:w-1/4" v-for="article in articles" :key="article.path">
                        <NuxtLink :to="article.path">
                            <div class="article">
                                <img :src="article.image" class="mb-4" />
                                <div class="flex flex-col space-y-2">
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
                <NuxtLink to="/news">
                    <button>Read More News</button>
                </NuxtLink>
            </div>
            <h1 class="text-3xl sm:text-5xl font-extrabold mb-4 grad-title text-shadow-lg">Past Shows</h1>
            <div class="card justify-center items-center px-4 sm:px-12 py-4 flex flex-col space-y-4">
                <div class="flex" v-if="error_vod">
                    <p>Error loading VODs, please try again</p>
                </div>
                <div class="flex" v-else-if="pending_vod">
                    <p>Loading VODs, please wait...</p>
                </div>
                <div class="flex flex-col w-full justify-center space-x-6" v-else-if="vods">
                    <div v-for="vod in vods">
                        <div v-if="vod.order === 1">
                            <h2 class="text-2xl sm:text-4xl font-extrabold mb-4 grad-title text-shadow-lg">{{ vod.year }}</h2>
                            <div class="flex flex-col items-center justify-center">
                                <div class="flex" v-if="vod">
                                    <div class="article">
                                        <iframe :src="`https://www.youtube.com/embed/${vod.youtube_url}`" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="rounded-[16px] mb-4 w-full h-[200px] sm:h-[350px]"></iframe>
                                        <div class="flex flex-col space-y-2 mb-4">
                                            <h3 class="text-xl font-bold">{{ vod.title }}</h3>
                                            <p class="text-base">{{ vod.description }}</p>
                                        </div>
                                        <NuxtLink :to="`/vods#${vod.year}`">
                                            <button>View All {{vod.year}} Videos</button>
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
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

<script setup lang="ts">
    useHead({ 
        title: 'Home'
    })

    // Fetch news
    const { data: articles, pending, error } = await useAsyncData("articles", () => queryCollection('news').order('date', 'DESC').limit(4).all());

    // Fetch full VODs
    const { data: vods, pending: pending_vod, error: error_vod } = await useAsyncData("vods", () => queryCollection('vods').order('year', 'DESC').order("order", "ASC").all());

    // Helper function to format the date string for better readability.
    const formatDate = (dateString: string) => {
        if (!dateString) return '';
        const options: any = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }
</script>