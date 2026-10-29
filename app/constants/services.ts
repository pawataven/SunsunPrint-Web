import type { Service } from '~/types'

// Only categories that have a work page on /our-work are listed, so every row leads somewhere real
export const SERVICES: Service[] = [
  {
    category: 'signage',
    nameTh: 'งานป้าย',
    nameEn: 'Signage',
    items: 'อะคริลิก, พลาสวูด, สแตนเลส, ป้ายไฟ, ไวนิล, สติ๊กเกอร์',
    to: '/our-work/signage'
  },
  {
    category: 'event-exhibition',
    nameTh: 'งานอีเวนต์',
    nameEn: 'Event',
    items: 'แบ็คดรอปผ้า, โต๊ะพับพร้อมผ้า, แบ็คดรอปแขวน, โรลอัพ, สแตนดี้',
    to: '/our-work/event'
  }
]
