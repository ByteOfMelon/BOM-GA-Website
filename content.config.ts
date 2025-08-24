import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    news: defineCollection({
      type: 'page',
      source: 'news/**.md',
      schema: z.object({
        tags: z.array(z.string()),
        image: z.string(),
        date: z.date()
      })
    }),
    committee_members: defineCollection({
      type: "data",
      source: "committee/**.json",
      schema: z.object({
        name: z.string(),
        avatar: z.string(),
        bio: z.string(),
        website: z.string(),
        twitter: z.string(),
        bluesky: z.string(),
        youtube: z.string(),
        twitch: z.string(),
        order: z.number()
      })
    }),
    faq: defineCollection({
      type: "page",
      source: "faq/**.md",
      schema: z.object({
        order: z.number()
      })
    })
  }
})
