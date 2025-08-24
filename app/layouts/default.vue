<template>
    <div>
        <Header />
        <NuxtLink to="/" class="flex w-full items-center justify-center p-8 pb-0">
            <img src="~/assets/img/ga-logo.png" class="w-1/2" />
        </NuxtLink>
        <div class="container mx-auto">
            <slot />
        </div>
    </div>
</template>