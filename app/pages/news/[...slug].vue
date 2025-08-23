<script setup>
// Get the current route object to extract the path
const route = useRoute()

// This is the modern, recommended way to fetch content for a page.
// We fetch all documents from the '/news' path and sort by date descending.
const { data: article, pending, error } = await useAsyncData(
  route.path,
  () => {
    return queryCollection('content').where('path', '=', route.path).first();
  }
)

// Helper function to format the date string for better readability.
const formatDate = (dateString) => {
  if (!dateString) return ''
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString(undefined, options)
}
</script>

<template>
  <main>
    <!-- Handle the case where the data fetch fails for reasons other than not found -->
    <div v-if="error">
      <h1 class="text-2xl font-semibold text-red-400">Error loading article</h1>
      <p class="text-slate-400 mt-4">We're sorry, but this article could not be loaded at the moment.</p>
      <NuxtLink to="/news" class="text-green-400 hover:underline mt-4 inline-block">
        &larr; Back to News
      </NuxtLink>
    </div>

    <!-- Render the article if it was fetched successfully -->
    <article v-else-if="article" class="prose prose-invert max-w-none prose-h1:text-green-400 prose-a:text-green-400 hover:prose-a:text-green-300">
      <!-- Article Header -->
      <div class="mb-8 border-b border-slate-700 pb-4">
        <h1 class="mb-2">{{ article.title }}</h1>
        <p v-if="article.date" class="text-sm text-slate-500 !my-0">
          Published on: {{ formatDate(article.date) }}
        </p>
      </div>
      
      <!-- This renders the main body of the Markdown file -->
      <ContentRenderer :value="article" />
    </article>
  </main>
</template>

<style>
/* Basic styling for content rendered from Markdown via Tailwind Typography */
.prose {
  line-height: 1.75;
}
.prose h1, .prose h2, .prose h3 {
  font-weight: 700;
}
</style>
