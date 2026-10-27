import type { Work, WorkCategory } from '~/types'

export const WORK_CATEGORIES: WorkCategory[] = [
  { id: 'signage', label: 'Signage' },
  { id: 'stickers-graphics', label: 'Stickers & Graphics' },
  { id: 'event-exhibition', label: 'Event & Exhibition' },
  { id: 'product-display', label: 'Product Display' }
]

// TODO: replace with each project's real description once the shop provides it
const PLACEHOLDER_DETAILS = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.'
]

export const WORKS: Work[] = [
  {
    slug: 'brand-space-graphics',
    title: 'Brand Space Graphics',
    description: 'งานกราฟิกหน้าร้าน',
    tag: 'Signage',
    category: 'signage',
    orientation: 'portrait',
    details: PLACEHOLDER_DETAILS,
    image: '/images/02_Stickers_Graphics/02_Window_Wall_Stickers/signage_p07_01.png'
  },
  {
    slug: 'exhibition-booth',
    title: 'Exhibition Booth',
    description: 'แบ็คดรอปและกราฟิกบูธ',
    tag: 'Event',
    category: 'event-exhibition',
    orientation: 'landscape',
    details: PLACEHOLDER_DETAILS,
    image: '/images/03_Event_Exhibition/06_Booth_Foamboards/event_p06_02.png'
  },
  {
    slug: 'counter-display',
    title: 'Counter Display',
    description: 'ชั้นวางสินค้าพลาสวูด',
    tag: 'POSM',
    category: 'product-display',
    orientation: 'landscape',
    details: PLACEHOLDER_DETAILS,
    image: '/images/04_Product_Displays/01_Plaswood_Display_Shelves/display_p02_03.png'
  },
  {
    slug: 'floor-graphics',
    title: 'Floor Graphics',
    description: 'งานสติ๊กเกอร์ติดพื้น',
    tag: 'Graphic',
    category: 'stickers-graphics',
    orientation: 'portrait',
    details: PLACEHOLDER_DETAILS,
    image: '/images/02_Stickers_Graphics/01_Floor_Graphics/signage_p06_01.png'
  },
  {
    slug: 'vinyl-banner',
    title: 'Vinyl Banner',
    description: 'ป้ายไวนิลโฆษณากลางแจ้ง',
    tag: 'Signage',
    category: 'signage',
    orientation: 'landscape',
    details: PLACEHOLDER_DETAILS,
    image: '/images/01_Signage/05_Vinyl_Banners/signage_p05_01.png'
  }
]
