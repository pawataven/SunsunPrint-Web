export type WorkCategoryId = 'signage' | 'stickers-graphics' | 'event-exhibition' | 'product-display'

export interface WorkCategory {
  id: WorkCategoryId
  label: string
}

export interface Work {
  slug: string
  title: string
  description: string
  tag: string
  category: WorkCategoryId
  orientation: 'portrait' | 'landscape'
  /** Path under /public, e.g. /images/works/brand-space-graphics.jpg — leave empty to show a placeholder */
  image?: string
}
