<template>
	<div class="flex flex-col justify-center items-center space-y-4 sm:p-8 pt-8">
		<div class="flex flex-col items-center space-y-8 text-center w-full">
			<h1 class="text-3xl sm:text-5xl font-extrabold mb-4 grad-title text-shadow-lg">Winners</h1>

			<div class="flex" v-if="error">
				<p>Error loading winners, please try again</p>
			</div>
			<div class="flex" v-else-if="pending">
				<p>Loading winners, please wait...</p>
			</div>
			<div class="flex w-full" v-else-if="winners">
				<div class="card justify-center items-center px-4 sm:px-12 py-4 flex flex-col space-y-4" v-for="w, index in winners">
					<h2 class="text-xl sm:text-2xl font-bold grad-title">{{ w.year }}</h2>

					<div class="flex flex-col space-y-8">
						<div class="flex flex-col space-y-2" v-for="c in w.categories">
							<h3 class="text-xl font-bold">{{ c.name }}</h3>
							<p class="text-base">{{ c.description }}</p>

							<div class="flex flex-col space-y-4 !mt-6">
								<div v-for="n in c.nominees">
									<div :class="`inner-card flex flex-row items-center space-x-4 sm:space-x-8 p-2 shadow-lg${n.winner ? ' gradient-regular-important' : ''}`" >
										<img :src="n.image" class="w-24" />
										<div class="flex flex-col text-left">
											<h3 class="text-base sm:text-xl font-bold">{{ n.name }}</h3>
											<p class="text-base sm:text-lg">{{ n.votes.toLocaleString("en-US") }} {{ n.votes === 1 ? 'vote' : 'votes'}}</p>
										</div>
										<div class="flex-grow"></div>
										<div class="flex" v-if="n.winner">
											<fa icon="check-circle" class="text-3xl"></fa>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="!pt-8 !py-0 w-2/3" v-if="index + 1 < winners.length">
						<hr class="w-full" />
					</div>
				</div>
			</div>
			<div class="flex" v-else>
				<i>No winners found. This is a bug!</i>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
    useHead({ title: 'Winners' });
    const { data: winners, pending, error } = await useAsyncData("winners", () => queryCollection('winners').order("year", "DESC").all())
</script>