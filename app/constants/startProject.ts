import type { ProjectType } from '~/types'

export const PROJECT_TYPES: ProjectType[] = [
  {
    id: 'signage',
    label: 'Signage',
    title: 'งานป้าย',
    summary: 'อะคริลิก · พลาสวูด · ป้ายไฟ · ไวนิล',
    subtypes: ['ป้ายอะคริลิก', 'ป้ายพลาสวูด', 'ป้ายสแตนเลส', 'ป้ายไฟ', 'ป้ายไวนิล'],
    materials: ['อะคริลิก', 'พลาสวูด', 'สแตนเลส', 'ไวนิล'],
    image: '/images/01_Signage/05_Vinyl_Banners/signage_p05_01.png',
    alt: 'ป้ายไวนิลโฆษณา Oh! Juice ตั้งกลางแจ้งหน้าศูนย์การค้า ผลงานของ SunsunPrint'
  },
  {
    id: 'stickers-graphics',
    label: 'Graphics',
    title: 'งานสติ๊กเกอร์',
    summary: 'กระจก · พื้น · ผนัง · ไดคัท',
    subtypes: ['สติ๊กเกอร์ติดกระจก', 'สติ๊กเกอร์ติดพื้น', 'สติ๊กเกอร์ติดผนัง', 'สติ๊กเกอร์บันได', 'สติ๊กเกอร์ไดคัท'],
    materials: ['สติ๊กเกอร์ PVC', 'สติ๊กเกอร์ใส', 'สติ๊กเกอร์ฝ้า', 'สติ๊กเกอร์พื้นกันลื่น'],
    image: '/images/02_Stickers_Graphics/01_Floor_Graphics/signage_p06_01.png',
    alt: 'สติ๊กเกอร์ติดพื้น Oh! Juice หน้าเคาน์เตอร์ในศูนย์การค้า ผลงานของ SunsunPrint'
  },
  {
    id: 'event-exhibition',
    label: 'Events',
    title: 'งานอีเวนต์และบูธ',
    summary: 'แบ็คดรอป · โรลอัพ · สแตนดี้',
    subtypes: ['แบ็คดรอป', 'บูธนิทรรศการ', 'โรลอัพ', 'สแตนดี้', 'ผ้าคลุมโต๊ะ'],
    materials: ['ผ้า', 'ไวนิล', 'PP บอร์ด', 'โฟมบอร์ด'],
    image: '/images/03_Event_Exhibition/06_Booth_Foamboards/event_p06_01.png',
    alt: 'บูธนิทรรศการ SAWANU พร้อมผนังภาพทะเลและเคาน์เตอร์ ผลงานของ SunsunPrint'
  },
  {
    id: 'product-display',
    label: 'Display',
    title: 'ชั้นวางสินค้า',
    summary: 'ดิสเพลย์สินค้า · พลาสวูด · POSM',
    subtypes: ['ชั้นวางพลาสวูด', 'ดิสเพลย์ตั้งโต๊ะ', 'ป้ายตั้งโต๊ะ', 'POSM'],
    materials: ['พลาสวูด', 'อะคริลิก'],
    image: '/images/04_Product_Displays/01_Plaswood_Display_Shelves/display_p01_02.png',
    imagePosition: 'center 12%',
    alt: 'ชั้นวางสินค้าตั้งโต๊ะพิมพ์ลาย ALA+ Project Health ผลงานของ SunsunPrint'
  }
]

export const UNSURE_MATERIAL = 'ไม่แน่ใจ / ให้ร้านแนะนำ'

export const INSTALLATION_OPTIONS = ['ไม่แน่ใจ', 'ต้องการให้ติดตั้ง', 'รับไปติดตั้งเอง']

// The shop's shared Google Drive folder for customer files. Anyone with the link can edit it, so customers can also see
// each other's uploads; the shop moves files out regularly
export const FILE_UPLOAD_FOLDER_URL = 'https://drive.google.com/drive/folders/1_a52Nq3SLIqEdSxAWR0QKITiUXW3zcdx?usp=sharing'
