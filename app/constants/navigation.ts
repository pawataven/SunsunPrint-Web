// Mirrors the labels and pages of WORK_GROUPS in ourWorks.ts, kept here so the header on every page doesn't pull in the whole works data.
// "All" opens the main works page rather than /our-work/all, at the site owner's request
const WORK_MENU_LINKS = [
  { label: 'งานทั้งหมด', to: '/our-work' },
  { label: 'งานอีเวนต์', to: '/our-work/event' },
  { label: 'งานป้าย', to: '/our-work/signage' },
  { label: 'งานสติ๊กเกอร์', to: '/our-work/stickers' },
  { label: 'งานดิสเพลย์', to: '/our-work/display' },
  { label: 'งานบรรจุภัณฑ์', to: '/our-work/packaging' }
]

export const NAV_LINKS = [
  { label: 'หน้าแรก', to: '/' },
  { label: 'ผลงาน', to: '/our-work', children: WORK_MENU_LINKS },
  { label: 'บริการ', to: '/services' },
  { label: 'เกี่ยวกับเรา', to: '/about' }
]

export const LINE_ID = '@npn3701j'
export const LINE_ADD_FRIEND_URL = `https://line.me/R/ti/p/${LINE_ID}`

// LINE opens the QR dialog instead of leaving the site; its href stays as the fallback before the page is interactive
export const SOCIAL_LINKS = [
  { label: 'LINE', icon: 'simple-icons:line', href: LINE_ADD_FRIEND_URL, opensLineDialog: true },
  { label: 'Facebook', icon: 'simple-icons:facebook', href: 'https://www.facebook.com/sunsunprint', opensLineDialog: false },
  { label: 'Instagram', icon: 'simple-icons:instagram', href: 'https://www.instagram.com/sunsunprint.co/', opensLineDialog: false }
]
