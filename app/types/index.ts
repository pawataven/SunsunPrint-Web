export type WorkCategoryId = 'signage' | 'stickers-graphics' | 'event-exhibition' | 'product-display'

export interface WorkCategory {
  id: WorkCategoryId
  label: string
}

export interface WorkFilter {
  id: string
  label: string
}

export interface WorkGroup {
  id: string
  title: string
  /** Chip label in the gallery's group filter */
  label: string
  /** Meta description of the group's own page (/our-work/<id>) */
  description: string
  works: Work[]
  /** Sub-type chips shown above the group's carousel; each work opts in through its `subcategory` */
  filters?: WorkFilter[]
  exploreTo: string
}

export interface Service {
  category: WorkCategoryId
  nameTh: string
  nameEn: string
  items: string
  to: string
}

export interface Work {
  slug: string
  title: string
  description: string
  tag: string
  category: WorkCategoryId
  /** Matches a `WorkFilter.id` of the group the work is listed in */
  subcategory?: string
  orientation: 'portrait' | 'landscape'
  /** Paragraphs shown in the work detail popup */
  details: string[]
  /** Path under /public, e.g. /images/works/brand-space-graphics.jpg — leave empty to show a placeholder */
  image?: string
}
