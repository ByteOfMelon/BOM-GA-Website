<template>
    <div v-if="showBanner" class="gradient-dark text-white p-2 text-center relative z-[60]">
        <div class="container mx-auto px-8">
            Voting open NOW for Byte of Melon Community Game Awards 2025! Click <NuxtLink to="/voting" class="underline font-bold hover:text-gray-200">here</NuxtLink> to learn more
        </div>
        <button @click="closeBanner" class="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 hover:bg-white/20 rounded" aria-label="Close banner">
            <fa icon="xmark" />
        </button>
    </div>

    <div class="nav sticky w-full top-0 z-50 flex gradient-dark p-4 shadow-lg text-lg">
        <div class="hidden md:flex items-center justify-center space-x-8 w-full">
            <NuxtLink to="/about">About</NuxtLink>
            <hr />
            <NuxtLink to="/news">News</NuxtLink>
            <hr />
            <NuxtLink to="/media">Media</NuxtLink>
            <hr />
            <NuxtLink to="/winners">Winners</NuxtLink>
            <hr />
            <NuxtLink to="/voting">Voting</NuxtLink>
            <hr />
            <NuxtLink to="/faq">FAQ</NuxtLink>
        </div>
        <div class="md:hidden flex items-center justify-start w-full">
            <div class="flex items-center space-x-2">
                <NuxtLink to="/">
                    <img src="~/assets/img/ga-logo.png" class="rounded-full h-[30px]" />
                </NuxtLink>
            </div>
            <div class="flex-grow"></div>
            <div class="flex">
                <div class="flex items-center h-[42px] cursor-pointer" @click="toggleMobileMenu()">
                    <div>
                        <fa :icon="state.mobileMenu ? 'xmark' : 'bars'"></fa>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="md:hidden flex flex-col gradient-dark shadow-md sticky top-[72px] z-50" v-if="state.mobileMenu">
        <div class="flex flex-col items-center justify-center w-full p-4 space-y-2">
            <NuxtLink to="/about" @click="clickMobileNavItem()" class="flex items-center h-[42px] w-full">
                <div class="w-full article">
                    <span>About</span>
                </div>
            </NuxtLink>
            <NuxtLink to="/news" @click="clickMobileNavItem()" class="flex items-center h-[42px] w-full">
                <div class="w-full article">
                    <span>News</span>
                </div>
            </NuxtLink>
            <NuxtLink to="/media" @click="clickMobileNavItem()" class="flex items-center h-[42px] w-full">
                <div class="w-full article">
                    <span>Media</span>
                </div>
            </NuxtLink>
            <NuxtLink to="/winners" @click="clickMobileNavItem()" class="flex items-center h-[42px] w-full">
                <div class="w-full article">
                    <span>Winners</span>
                </div>
            </NuxtLink>
            <NuxtLink to="/voting" @click="clickMobileNavItem()" class="flex items-center h-[42px] w-full">
                <div class="w-full article">
                    <span>Voting</span>
                </div>
            </NuxtLink>
            <NuxtLink to="/faq" @click="clickMobileNavItem()" class="flex items-center h-[42px] w-full">
                <div class="w-full article">
                    <span>FAQ</span>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
    const bannerCookie = useCookie('hide_voting_banner_2025');
    const showBanner = ref(!bannerCookie.value);

    const closeBanner = () => {
        bannerCookie.value = 'true';
        showBanner.value = false;
    }

    const state = reactive({
        mobileMenu: false
    });

    const toggleMobileMenu = async () => {
        state.mobileMenu = !state.mobileMenu;
    }

    const clickMobileNavItem = async () => {
        state.mobileMenu = false;
    }
</script>