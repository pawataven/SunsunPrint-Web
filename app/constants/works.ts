import type { Work, WorkCategory } from '~/types'
import { WORK_DETAILS } from './workDetails'

export const WORK_CATEGORIES: WorkCategory[] = [
  { id: 'signage', label: 'งานป้าย' },
  { id: 'stickers-graphics', label: 'งานสติ๊กเกอร์' },
  { id: 'event-exhibition', label: 'งานอีเวนต์' },
  { id: 'product-display', label: 'งานดิสเพลย์' },
  { id: 'packaging', label: 'งานบรรจุภัณฑ์' }
]

export const WORKS: Work[] = [
  {
    slug: 'gift-box-packaging',
    title: 'Gift Box',
    description: 'กล่องบรรจุภัณฑ์พิมพ์ลาย',
    tag: 'Packaging',
    category: 'packaging',
    orientation: 'portrait',
    details: WORK_DETAILS.bigMootooGiftBox,
    image: '/images/05_Packaging_Boxes/02_Gift_Boxes/box_p02_01.png',
    gallery: ['/images/05_Packaging_Boxes/02_Gift_Boxes/box_p02_02.png']
  },
  {
    slug: 'exhibition-booth',
    title: 'Exhibition Booth',
    description: 'แบ็คดรอปและกราฟิกบูธ',
    tag: 'Event',
    category: 'event-exhibition',
    orientation: 'landscape',
    details: WORK_DETAILS.tofusanBooth,
    image: '/images/03_Event_Exhibition/06_Booth_Foamboards/event_p06_02.png'
  },
  {
    slug: 'counter-display',
    title: 'Counter Display',
    description: 'ชั้นวางสินค้าพลาสวูด',
    tag: 'POSM',
    category: 'product-display',
    orientation: 'landscape',
    details: WORK_DETAILS.bergamotCounterDisplay,
    image: '/images/04_Product_Displays/01_Plaswood_Display_Shelves/display_p02_03.png'
  },
  {
    slug: 'floor-graphics',
    title: 'Floor Graphics',
    description: 'งานสติ๊กเกอร์ติดพื้น',
    tag: 'Graphic',
    category: 'stickers-graphics',
    orientation: 'portrait',
    details: WORK_DETAILS.ohJuiceFloorGraphic,
    image: '/images/02_Stickers_Graphics/01_Floor_Graphics/signage_p06_01.png'
  },
  {
    slug: 'vinyl-banner',
    title: 'Vinyl Banner',
    description: 'ป้ายไวนิลโฆษณากลางแจ้ง',
    tag: 'Signage',
    category: 'signage',
    orientation: 'landscape',
    details: WORK_DETAILS.ohJuiceVinylBanner,
    image: '/images/01_Signage/05_Vinyl_Banners/signage_p05_01.png'
  }
]
