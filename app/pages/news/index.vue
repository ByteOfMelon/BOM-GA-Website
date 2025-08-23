<script setup>
const route = useRoute();

// This is the modern, recommended way to fetch content for a page.
// We fetch all documents from the '/news' path and sort by date descending.
const { data: articles, pending, error } = await useAsyncData(
  route.path,
  () => {
    return queryCollection('content').all();
  }
)

// You can uncomment this for debugging in your browser console
console.log(articles.value)
console.error(error);
</script>

<template>
  <div>
    <h2 class="text-3xl font-bold border-b-2 border-green-400 pb-2 mb-6">Latest News</h2>

    <!-- Show a loading message while content is being fetched -->
    <div v-if="pending">
      <p class="text-slate-400">Fetching articles...</p>
    </div>

    <!-- Show an error message if data fetching fails -->
    <div v-else-if="error">
      <p class="text-red-400 font-semibold">An error occurred while fetching articles.</p>
      <p class="text-slate-500 mt-2">Please check the terminal for more details.</p>
    </div>

    <!-- Display the list of articles if fetching was successful -->
    <div v-else-if="articles && articles.length" class="space-y-4">
      <div v-for="article in articles" :key="article.path" class="bg-slate-800 p-4 rounded-lg hover:bg-slate-700/80 transition-all duration-200">
        <NuxtLink :to="article.path" class="block group">
          <h3 class="text-xl font-semibold text-green-400 group-hover:text-green-300">{{ article.title }}</h3>
          <p class="text-slate-400 mt-1">{{ article.description }}</p>
        </NuxtLink>
      </div>
    </div>

    <!-- Show a message if no articles are found -->
    <div v-else>
      <p class="text-slate-500">No news articles found. Try adding a `.md` file in the `content/news` directory.</p>
    </div>
  </div>
</template>
