<template>
    <div class="h-screen">
        <Header />
        <NuxtLink to="/" class="flex w-full items-center justify-center p-8 pb-0">
            <img src="~/assets/img/ga-logo.png" class="w-full lg:w-1/2 2xl:w-1/3" />
        </NuxtLink>
        <div class="container mx-auto">
            <slot />
        </div>
    </div>
</template>