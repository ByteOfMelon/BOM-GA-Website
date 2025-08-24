<template>
	<div class="flex flex-col justify-center items-center space-y-4 p-8">
		<div class="flex flex-col items-center space-y-8 text-center w-full">
			<h1 class="text-5xl font-extrabold mb-4 grad-title text-shadow-lg">Frequently Asked Questions</h1>
			<div class="card justify-center items-center px-12 py-4 flex flex-col space-y-4">
				<div class="flex" v-if="error">
                    <p>Error loading FAQ, please try again later</p>
                </div>
                <div class="flex" v-else-if="pending">
                    <p>Loading FAQ, please wait...</p>
                </div>
                <div class="flex flex-col w-full justify-center space-y-6" v-else-if="faq">
                    <div class="flex flex-col space-x-8 text-center items-center" v-for="q, index in faq">
                        <h2 class="text-2xl font-bold grad-title">{{ q.title }}</h2>
                        <ContentRenderer :value="q" />
                        <div class="!pt-8 !py-0 w-2/3" v-if="index + 1 < faq.length">
                            <hr class="w-full" />
                        </div>
                    </div>
                </div>
                <div class="flex" v-else>
                    <i>No FAQs found. This is a bug!</i>
                </div>
			</div>
		</div>
	</div>
</template>

<script setup>
    useHead({ title: 'FAQ' });
    const { data: faq, pending, error } = await useAsyncData("faq", () => queryCollection('faq').order("order", "ASC").all())
</script>