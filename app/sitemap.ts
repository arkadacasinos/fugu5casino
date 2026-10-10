import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://fugu5casino.vercel.app/',
      lastModified: new Date('2026-10-10'),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
