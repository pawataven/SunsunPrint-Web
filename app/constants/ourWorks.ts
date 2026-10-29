import type { Work, WorkFilter, WorkGroup } from '~/types'

// TODO: replace with each project's real description once the shop provides it
const PLACEHOLDER_DETAILS = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.'
]

const ALL_WORKS: Work[] = [
  {
    slug: 'all-vinyl-banner',
    title: 'Vinyl Banner',
    description: 'ป้ายไวนิลโฆษณากลางแจ้ง',
    tag: 'Signage',
    category: 'signage',
    orientation: 'landscape',
    details: PLACEHOLDER_DETAILS,
    image: '/images/01_Signage/05_Vinyl_Banners/signage_p05_01.png'
  },
  {
    slug: 'all-illuminated-signage',
    title: 'Illuminated Signage',
    description: 'ป้ายไฟและตัวอักษร',
    tag: 'Signage',
    category: 'signage',
    orientation: 'landscape',
    details: PLACEHOLDER_DETAILS,
    image: '/images/01_Signage/04_Illuminated_Signs/signage_p04_01.png'
  },
  {
    slug: 'all-exhibition-booth',
    title: 'Exhibition Booth',
    description: 'แบ็คดรอปและกราฟิกบูธ',
    tag: 'Event',
    category: 'event-exhibition',
    orientation: 'landscape',
    details: PLACEHOLDER_DETAILS,
    image: '/images/03_Event_Exhibition/06_Booth_Foamboards/event_p06_02.png'
  },
  {
    slug: 'all-window-stickers',
    title: 'Window Stickers',
    description: 'สติ๊กเกอร์ติดกระจกและผนัง',
    tag: 'Graphic',
    category: 'stickers-graphics',
    orientation: 'landscape',
    details: PLACEHOLDER_DETAILS,
    image: '/images/02_Stickers_Graphics/02_Window_Wall_Stickers/signage_p07_01.png'
  },
  {
    slug: 'all-floor-graphics',
    title: 'Floor Graphics',
    description: 'งานสติ๊กเกอร์ติดพื้น',
    tag: 'Graphic',
    category: 'stickers-graphics',
    orientation: 'landscape',
    details: PLACEHOLDER_DETAILS,
    image: '/images/02_Stickers_Graphics/01_Floor_Graphics/signage_p06_01.png'
  },
  {
    slug: 'all-counter-display',
    title: 'Counter Display',
    description: 'ชั้นวางสินค้าพลาสวูด',
    tag: 'POSM',
    category: 'product-display',
    orientation: 'landscape',
    details: PLACEHOLDER_DETAILS,
    image: '/images/04_Product_Displays/01_Plaswood_Display_Shelves/display_p02_03.png'
  },
  {
    slug: 'all-acrylic-sign',
    title: 'Acrylic Sign',
    description: 'ป้ายอะคริลิก',
    tag: 'Signage',
    category: 'signage',
    orientation: 'landscape',
    details: PLACEHOLDER_DETAILS,
    image: '/images/01_Signage/01_Acrylic_Signs/signage_p01_01.png'
  },
  {
    slug: 'all-rollup',
    title: 'Roll-up Banner',
    description: 'โรลอัพสำหรับงานอีเวนต์',
    tag: 'Event',
    category: 'event-exhibition',
    orientation: 'landscape',
    details: PLACEHOLDER_DETAILS,
    image: '/images/03_Event_Exhibition/04_Rollups/event_p04_01.png'
  },
  {
    slug: 'all-display-shelf',
    title: 'Display Shelf',
    description: 'ชั้นวางสินค้าพลาสวูด',
    tag: 'POSM',
    category: 'product-display',
    orientation: 'landscape',
    details: PLACEHOLDER_DETAILS,
    image: '/images/04_Product_Displays/01_Plaswood_Display_Shelves/display_p01_01.png'
  }
]

const EVENT_FILTERS: WorkFilter[] = [
  { id: 'fabric-displays', label: 'แบ็คดรอปผ้า' },
  { id: 'table-covers', label: 'โต๊ะพับพร้อมผ้า' },
  { id: 'hanging-backdrops', label: 'แบ็คดรอปแขวน' },
  { id: 'rollups', label: 'โรลอัพ' },
  { id: 'standees', label: 'สแตนดี้' }
]

const EVENT_WORKS: Work[] = [
  {
    slug: 'event-fabric-backdrop',
    title: 'Fabric Backdrop',
    description: 'แบ็คดรอปผ้า',
    tag: 'Event',
    category: 'event-exhibition',
    subcategory: 'fabric-displays',
    orientation: 'landscape',
    details: PLACEHOLDER_DETAILS,
    image: '/images/03_Event_Exhibition/01_Fabric_Backdrops/event_p01_01.png'
  },
  {
    slug: 'event-fabric-backdrop-2',
    title: 'Fabric Backdrop',
    description: 'แบ็คดรอปผ้า',
    tag: 'Event',
    category: 'event-exhibition',
    subcategory: 'fabric-displays',
    orientation: 'landscape',
    details: PLACEHOLDER_DETAILS,
    image: '/images/03_Event_Exhibition/01_Fabric_Backdrops/event_p01_02.png'
  },
  {
    slug: 'event-table-cover',
    title: 'Table Cover',
    description: 'โต๊ะพับพร้อมผ้าคลุม',
    tag: 'Event',
    category: 'event-exhibition',
    subcategory: 'table-covers',
    orientation: 'landscape',
    details: PLACEHOLDER_DETAILS,
    image: '/images/03_Event_Exhibition/02_Fabric_Table_Covers/event_p02_01.png'
  },
  {
    slug: 'event-hanging-backdrop',
    title: 'Hanging Backdrop',
    description: 'แบ็คดรอปผ้าแขวนผนัง',
    tag: 'Event',
    category: 'event-exhibition',
    subcategory: 'hanging-backdrops',
    orientation: 'landscape',
    details: PLACEHOLDER_DETAILS,
    image: '/images/03_Event_Exhibition/03_Hanging_Backdrops/event_p03_01.png'
  },
  {
    slug: 'event-rollup',
    title: 'Roll-up Banner',
    description: 'โรลอัพสำหรับงานอีเวนต์',
    tag: 'Event',
    category: 'event-exhibition',
    subcategory: 'rollups',
    orientation: 'landscape',
    details: PLACEHOLDER_DETAILS,
    image: '/images/03_Event_Exhibition/04_Rollups/event_p04_01.png'
  },
  {
    slug: 'event-rollup-2',
    title: 'Roll-up Banner',
    description: 'โรลอัพสำหรับงานอีเวนต์',
    tag: 'Event',
    category: 'event-exhibition',
    subcategory: 'rollups',
    orientation: 'landscape',
    details: PLACEHOLDER_DETAILS,
    image: '/images/03_Event_Exhibition/04_Rollups/event_p04_02.png'
  },
  {
    slug: 'event-standee',
    title: 'PP Board Standee',
    description: 'สแตนดี้และป้ายพีพีบอร์ด',
    tag: 'Event',
    category: 'event-exhibition',
    subcategory: 'standees',
    orientation: 'landscape',
    details: PLACEHOLDER_DETAILS,
    image: '/images/03_Event_Exhibition/05_PP_Board_Standees/event_p05_01.png'
  }
]

const SIGNAGE_FILTERS: WorkFilter[] = [
  { id: 'acrylic-signs', label: 'อะคริลิก' },
  { id: 'plaswood-signs', label: 'พลาสวูด' },
  { id: 'stainless-signs', label: 'สแตนเลส' },
  { id: 'illuminated-signs', label: 'ป้ายไฟ' },
  { id: 'vinyl-banners', label: 'ไวนิล' },
  { id: 'sticker-installation', label: 'สติ๊กเกอร์' }
]

const SIGNAGE_WORKS: Work[] = [
  {
    slug: 'signage-acrylic',
    title: 'Acrylic Sign',
    description: 'ป้ายอะคริลิก',
    tag: 'Signage',
    category: 'signage',
    subcategory: 'acrylic-signs',
    orientation: 'landscape',
    details: PLACEHOLDER_DETAILS,
    image: '/images/01_Signage/01_Acrylic_Signs/signage_p01_01.png'
  },
  {
    slug: 'signage-acrylic-2',
    title: 'Acrylic Sign',
    description: 'ป้ายอะคริลิก',
    tag: 'Signage',
    category: 'signage',
    subcategory: 'acrylic-signs',
    orientation: 'landscape',
    details: PLACEHOLDER_DETAILS,
    image: '/images/01_Signage/01_Acrylic_Signs/signage_p01_02.png'
  },
  {
    slug: 'signage-plaswood',
    title: 'Plaswood Sign',
    description: 'ป้ายพลาสวูด',
    tag: 'Signage',
    category: 'signage',
    subcategory: 'plaswood-signs',
    orientation: 'landscape',
    details: PLACEHOLDER_DETAILS,
    image: '/images/01_Signage/02_Plaswood_Signs/signage_p02_01.png'
  },
  {
    slug: 'signage-stainless',
    title: 'Stainless Sign',
    description: 'ป้ายสแตนเลส',
    tag: 'Signage',
    category: 'signage',
    subcategory: 'stainless-signs',
    orientation: 'landscape',
    details: PLACEHOLDER_DETAILS,
    image: '/images/01_Signage/03_Stainless_Signs/signage_p03_01.png'
  },
  {
    slug: 'signage-illuminated',
    title: 'Illuminated Sign',
    description: 'ป้ายไฟและตัวอักษร',
    tag: 'Signage',
    category: 'signage',
    subcategory: 'illuminated-signs',
    orientation: 'landscape',
    details: PLACEHOLDER_DETAILS,
    image: '/images/01_Signage/04_Illuminated_Signs/signage_p04_01.png'
  },
  {
    slug: 'signage-vinyl-banner',
    title: 'Vinyl Banner',
    description: 'ป้ายไวนิลโฆษณากลางแจ้ง',
    tag: 'Signage',
    category: 'signage',
    subcategory: 'vinyl-banners',
    orientation: 'landscape',
    details: PLACEHOLDER_DETAILS,
    image: '/images/01_Signage/05_Vinyl_Banners/signage_p05_01.png'
  },
  {
    slug: 'signage-vinyl-banner-2',
    title: 'Vinyl Banner',
    description: 'ป้ายไวนิลโฆษณากลางแจ้ง',
    tag: 'Signage',
    category: 'signage',
    subcategory: 'vinyl-banners',
    orientation: 'landscape',
    details: PLACEHOLDER_DETAILS,
    image: '/images/01_Signage/05_Vinyl_Banners/signage_p05_02.png'
  },
  {
    slug: 'signage-sticker-installation',
    title: 'Sticker Installation',
    description: 'งานติดตั้งสติ๊กเกอร์',
    tag: 'Signage',
    category: 'signage',
    subcategory: 'sticker-installation',
    orientation: 'landscape',
    details: PLACEHOLDER_DETAILS,
    image: '/images/02_Stickers_Graphics/02_Window_Wall_Stickers/signage_p06_02.png'
  }
]

export const WORK_GROUPS: WorkGroup[] = [
  { id: 'all', title: 'ผลงานทั้งหมด', label: 'ทั้งหมด', works: ALL_WORKS, exploreTo: '/OurWork/all' },
  { id: 'event', title: 'งานอีเวนต์', label: 'งานอีเวนต์', works: EVENT_WORKS, filters: EVENT_FILTERS, exploreTo: '/OurWork/event' },
  { id: 'signage', title: 'งานป้าย', label: 'งานป้าย', works: SIGNAGE_WORKS, filters: SIGNAGE_FILTERS, exploreTo: '/OurWork/signage' }
]
