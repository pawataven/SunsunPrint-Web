export const NAV_LINKS = [
  { label: 'หน้าแรก', to: '/' },
  { label: 'ผลงาน', to: '/our-work' },
  { label: 'บริการ', to: '/services' },
  { label: 'เกี่ยวกับเรา', to: '/about' }
]

export const LINE_ID = '@npn3701j'
export const LINE_ADD_FRIEND_URL = `https://line.me/R/ti/p/${LINE_ID}`
// Opens a chat with the official account with `text` already typed in; the visitor still presses send in LINE
export const buildLineMessageUrl = (text: string) =>
  `https://line.me/R/oaMessage/${encodeURIComponent(LINE_ID)}/?${encodeURIComponent(text)}`

// LINE opens the QR dialog instead of leaving the site; its href stays as the fallback before the page is interactive
export const SOCIAL_LINKS = [
  { label: 'LINE', icon: 'simple-icons:line', href: LINE_ADD_FRIEND_URL, opensLineDialog: true },
  { label: 'Facebook', icon: 'simple-icons:facebook', href: 'https://www.facebook.com/sunsunprint', opensLineDialog: false },
  { label: 'Instagram', icon: 'simple-icons:instagram', href: 'https://www.instagram.com/sunsunprint.co/', opensLineDialog: false }
]
