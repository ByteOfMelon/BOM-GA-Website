<template>
    <div class="nav sticky w-full top-0 z-50 flex gradient-dark p-4 shadow-lg text-lg">
        <div class="hidden sm:flex items-center justify-center space-x-8 w-full">
            <NuxtLink to="/about">About</NuxtLink>
            <hr />
            <NuxtLink to="/news">News</NuxtLink>
            <hr />
            <NuxtLink to="/winners">Winners</NuxtLink>
            <hr />
            <NuxtLink to="/voting">Voting</NuxtLink>
            <hr />
            <NuxtLink to="/faq">FAQ</NuxtLink>
        </div>
        <div class="sm:hidden flex items-center justify-start w-full">
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

    <div class="sm:hidden flex flex-col gradient-dark shadow-md sticky top-[72px] z-50" v-if="state.mobileMenu">
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