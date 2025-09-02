<template>
    <div class="flex flex-col justify-center items-center space-y-4 sm:p-8 pt-8">
        <div class="flex flex-col items-center space-y-8 text-center">
            <h1 class="text-3xl sm:text-5xl font-extrabold mb-4 grad-title text-shadow-lg">About Byte of Melon Community Game Awards</h1>
            <div class="card justify-center items-center px-4 sm:px-12 py-4 flex flex-col space-y-4">
                <p>
                    The Byte of Melon Game Awards is an annual game award show presented by Michael Webb, aka "Byte of Melon", on his Twitch channel, <NuxtLink to="https://twitch.tv/byteofmelon">twitch.tv/byteofmelon</NuxtLink>.<br /><br />
                    
                    The goal of the show is to allow the audience to run the show by allowing winners to be chosen by the audience (from a select number of candidates decided by the Byte of Melon Community Game Awards Nomination Committee). The committee exists to pick interesting categories and legitimate choices for each of these categories, but still provide the final decision to our community in the spirit of the show. After all, it is our belief that video games deserve to be honored by the gamers, not the media.<br /><br />

                    We want to bring all kinds of gamers to this community, from casual to hyper-competitive gamers, and everything in-between. To accomplish this, we try to cover aspects of gaming that are not heavily covered in other gaming award shows, such as the category "Best Speedrun Game", in addition to being open to suggestions and improvements from the community at large.<br /><br />

                    Participate with the community and get announcements first on the <NuxtLink to="https://discord.gg/bhVkwgCDtZ">BOM Community Discord Server</NuxtLink>!
                </p>
                <div class="py-6 w-2/3">
                    <hr class="w-full" />
                </div>
                <h2 class="text-2xl sm:text-4xl font-extrabold mb-4 grad-title text-shadow-lg">Award Process</h2>
                <div class="flex flex-col space-y-6 !mt-8">
                    <div class="inner-card items-center p-2">
                        <div class="p-4 sm:p-8 sm:pl-9 flex items-center justify-center">
                            <h1 class="text-2xl sm:text-4xl brand-color font-bold">1</h1>
                        </div>
                        <div class="flex flex-col items-start text-left p-4">
                            <b class="brand-color">Nomination</b>
                            <p class="sm:text-lg">Nominations are decided by the Byte of Melon Community Game Awards Nomination Committee (see below for member list). The Committee takes into account several factors, such as popularity amongst gamers on various social media platforms, the nominations made by The Game Awards (if applicable), and their own personal experiences with the game.</p>
                        </div>
                    </div>
                    <div class="inner-card items-center p-2">
                        <div class="p-4 sm:p-8 sm:pl-9 flex items-center justify-center">
                            <h1 class="text-2xl sm:text-4xl brand-color font-bold">2</h1>
                        </div>
                        <div class="flex flex-col items-start text-left p-4">
                            <b class="brand-color">Voting</b>
                            <p class="sm:text-lg">After the nominees are decided, a public form is opened where the general public can vote on which nominee should win each award. The game with the most votes wins.</p>
                        </div>
                    </div>
                    <div class="inner-card items-center p-2">
                        <div class="p-4 sm:p-8 sm:pl-9 flex items-center justify-center">
                            <h1 class="text-2xl sm:text-4xl brand-color font-bold">3</h1>
                        </div>
                        <div class="flex flex-col items-start text-left p-4">
                            <b class="brand-color">Results</b>
                            <p class="sm:text-lg">After the form closes, the results will be compiled and shown, first live in the award ceremony, then published onto this website soon after the ceremony.</p>
                        </div>
                    </div>
                </div>
            </div>
            <h1 class="text-3xl sm:text-5xl font-extrabold mb-4 grad-title text-shadow-lg">About The Creator</h1>
            <div class="card justify-center items-center px-4 sm:px-12 py-4 flex flex-col space-y-4">
                <img src="~/assets/img/bom-portrait.webp" class="w-56 shadow-lg" />
                <h2 class="text-2xl sm:text-4xl font-extrabold mb-4 grad-title text-shadow-lg">Michael Webb</h2>
                <p>
                    Michael Webb, also known as Byte of Melon, is a YouTuber, Twitch streamer, web designer, programmer, video editor, etc, etc. He currently attends college at a local university to become a secondary education (middle and/or high school) social studies teacher. His main goal in his teaching career is to make sure that all students are seen, educated and given a good chance at life.
                </p>
                <div class="flex flex-row socials items-center text-2xl sm:text-4xl space-x-8">
                    <NuxtLink to="https://byteofmelon.com" class="flex items-center socials-generic">
                        <fa icon="globe" />
                    </NuxtLink>
                    
                    <NuxtLink to="https://x.com/byteofmelon" class="flex items-center socials-generic">
                        <fa :icon="['fab', 'x-twitter']" />
                    </NuxtLink>
                    
                    <NuxtLink to="https://bsky.app/profile/byteofmelon.com" class="flex items-center socials-generic">
                        <fa :icon="['fab', 'bluesky']" />
                    </NuxtLink>
                    
                    <NuxtLink to="https://youtube.com/@byteofmelon" class="flex items-center socials-generic">
                        <fa :icon="['fab', 'youtube']" />
                    </NuxtLink>
                    
                    <NuxtLink to="https://twitch.tv/byteofmelon" class="flex items-center socials-generic">
                        <fa :icon="['fab', 'twitch']" />
                    </NuxtLink>
                </div>
            </div>
            <h1 class="text-3xl sm:text-5xl font-extrabold mb-4 grad-title text-shadow-lg">Nomination Committee Members</h1>
            <div class="card justify-center items-center px-4 sm:px-12 py-4 flex flex-col space-y-4">
                <div class="flex" v-if="error">
                    <p>Error loading committee members, please try again later</p>
                </div>
                <div class="flex" v-else-if="pending">
                    <p>Loading members, please wait...</p>
                </div>
                <div class="flex flex-col w-full justify-center space-y-6" v-else-if="members">
                    <div class="flex flex-col sm:flex-row sm:space-x-8 items-center" v-for="member in members">
                        <img :src="member.avatar" class="sm:min-w-36 sm:w-36 min-w-32 w-32 mb-6 sm:mb-0" />
                        <div class="flex flex-col space-y-2 text-center sm:text-left">
                            <h3 class="text-xl font-bold grad-title">{{ member.name }}</h3>
                            <p class="text-base">{{ member.bio }}</p>
                            
                            <div class="flex flex-row socials justify-center sm:justify-start items-center text-xl space-x-4">
                                <NuxtLink :to="member.website" class="flex items-center socials-generic" v-if="member.website">
                                    <fa icon="globe" />
                                </NuxtLink>
                                
                                <NuxtLink :to="`https://x.com/${member.twitter}`" class="flex items-center socials-generic" v-if="member.twitter">
                                    <fa :icon="['fab', 'x-twitter']" />
                                </NuxtLink>
                                
                                <NuxtLink :to="`https://bsky.app/profile/${member.bluesky}`" class="flex items-center socials-generic" v-if="member.bluesky">
                                    <fa :icon="['fab', 'bluesky']" />
                                </NuxtLink>
                                
                                <NuxtLink :to="`https://youtube.com/${member.youtube}`" class="flex items-center socials-generic" v-if="member.youtube">
                                    <fa :icon="['fab', 'youtube']" />
                                </NuxtLink>
                                
                                <NuxtLink :to="`https://twitch.tv/${member.twitch}`" class="flex items-center socials-generic" v-if="member.twitch">
                                    <fa :icon="['fab', 'twitch']" />
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex" v-else>
                    <i>No members found. This is a bug!</i>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    useHead({ title: 'About' });

    definePageMeta({
        title: 'About'
    })

    const { data: members, pending, error } = await useAsyncData("committee_members", () => queryCollection('committee_members').order("order", "ASC").all())
</script>