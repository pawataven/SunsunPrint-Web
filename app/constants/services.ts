import type { Service } from '~/types'

export const SERVICES: Service[] = [
  {
    category: 'signage',
    nameTh: 'งานป้าย',
    nameEn: 'Signage',
    items: 'อะคริลิก, พลาสวูด, สแตนเลส, ป้ายไฟ, ไวนิล'
  },
  {
    category: 'stickers-graphics',
    nameTh: 'งานสติ๊กเกอร์',
    nameEn: 'Graphics',
    items: 'กระจก, ผนัง, พื้น, ไดคัท, ตกแต่งพื้นที่'
  },
  {
    category: 'event-exhibition',
    nameTh: 'งานอีเวนต์',
    nameEn: 'Event',
    items: 'แบ็คดรอป, โรลอัพ, สแตนดี้, กราฟิกบูธ'
  },
  {
    category: 'product-display',
    nameTh: 'งานชั้นวางสินค้า',
    nameEn: 'Display',
    items: 'ชั้นวางพลาสวูด, POSM, ดิสเพลย์สินค้า'
  }
]
