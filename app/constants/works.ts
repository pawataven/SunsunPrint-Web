import type { Work, WorkCategory } from '~/types'

export const WORK_CATEGORIES: WorkCategory[] = [
  { id: 'signage', label: 'Signage' },
  { id: 'stickers-graphics', label: 'Stickers & Graphics' },
  { id: 'event-exhibition', label: 'Event & Exhibition' },
  { id: 'product-display', label: 'Product Display' }
]

export const WORKS: Work[] = [
  {
    slug: 'brand-space-graphics',
    title: 'Brand Space Graphics',
    description: 'งานกราฟิกหน้าร้าน',
    tag: 'Signage',
    category: 'signage',
    orientation: 'portrait'
  },
  {
    slug: 'exhibition-booth',
    title: 'Exhibition Booth',
    description: 'แบ็คดรอปและกราฟิกบูธ',
    tag: 'Event',
    category: 'event-exhibition',
    orientation: 'landscape'
  },
  {
    slug: 'counter-display',
    title: 'Counter Display',
    description: 'ชั้นวางสินค้าพลาสวูด',
    tag: 'POSM',
    category: 'product-display',
    orientation: 'landscape'
  },
  {
    slug: 'floor-graphics',
    title: 'Floor Graphics',
    description: 'งานสติ๊กเกอร์ติดพื้น',
    tag: 'Graphic',
    category: 'stickers-graphics',
    orientation: 'portrait'
  },
  {
    slug: 'vinyl-banner',
    title: 'Vinyl Banner',
    description: 'ป้ายไวนิลโฆษณากลางแจ้ง',
    tag: 'Signage',
    category: 'signage',
    orientation: 'landscape'
  }
]
