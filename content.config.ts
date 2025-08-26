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
    }),
    media: defineCollection({
      type: "page",
      source: "media/**.md",
      schema: z.object({
        order: z.number(),
        year: z.number(),
        youtube_url: z.string()
      })
    }),
    winners: defineCollection({
      type: "data",
      source: "winners/**.json",
      schema: z.object({
        year: z.number(),
        categories: z.array(z.object({
          name: z.string(),
          description: z.string(),
          order: z.number(),
          nominees: z.array(z.object({
            name: z.string(),
            votes: z.number(),
            winner: z.boolean(),
            image: z.string()
          }))
        }))
      })
    }),
  }
})
