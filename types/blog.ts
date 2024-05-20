import { categories } from '@/database/categories'

export type Category = (typeof categories)[number]

export interface Post {
  slug: string
  title: string
  publishDate: string
  categories: Category[]
}
