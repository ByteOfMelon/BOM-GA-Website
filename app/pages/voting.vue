<template>
	<div class="flex flex-col justify-center items-center space-y-8 sm:p-8 pt-8">
		<div class="flex flex-col items-center space-y-8 text-center w-full">
			<h1 class="text-3xl sm:text-5xl font-extrabold mb-4 grad-title text-shadow-lg">How Voting Works</h1>
			<div class="card justify-center items-center px-4 sm:px-12 py-4 flex flex-col space-y-4">
				<p>
                    Once the Nomination Committee picks the categories and nominees, a Google Form is opened to the public to decide the final winners in each category. Most category votes are optional, making sure people only pick if they are properly informed. Voting in as many categories as you can is encouraged to allow more voices to be heard at the award ceremony.

                    If a vote is currently open, you can click the button below. 
                </p>
			</div>
		</div>
		<div class="flex flex-col items-center space-y-8 text-center w-full">
			<h1 class="text-3xl sm:text-5xl font-extrabold mb-4 grad-title text-shadow-lg">Vote Now!</h1>
			<div class="card justify-center items-center px-4 sm:px-12 py-4 flex flex-col space-y-4">
				<p>
                    Click the button below to vote for your nominees! Submissions close on December 28, 2025 at midnight CST.
                </p>
				<NuxtLink to="https://forms.gle/eoDwthj7ezskms7A7">
					<button class="mt-4">
						Vote Now
					</button>
				</NuxtLink>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
    useHead({ title: 'Voting' });

    definePageMeta({
        title: 'Voting'
    })
</script>