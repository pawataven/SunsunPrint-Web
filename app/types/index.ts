export type WorkCategoryId = 'signage' | 'stickers-graphics' | 'event-exhibition' | 'product-display'

export interface WorkCategory {
  id: WorkCategoryId
  label: string
}

export interface Service {
  category: WorkCategoryId
  nameTh: string
  nameEn: string
  items: string
}

export interface Work {
  slug: string
  title: string
  description: string
  tag: string
  category: WorkCategoryId
  orientation: 'portrait' | 'landscape'
  /** Paragraphs shown in the work detail popup */
  details: string[]
  /** Path under /public, e.g. /images/works/brand-space-graphics.jpg — leave empty to show a placeholder */
  image?: string
}
