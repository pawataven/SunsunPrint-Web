import { PROJECT_TYPES } from '~/constants/startProject'
import type { ProjectBrief } from '~/types'

// The date input gives a bare yyyy-mm-dd; reading it as UTC and formatting in UTC keeps the day from shifting by timezone
const formatDueDate = (isoDate: string) =>
  new Date(`${isoDate}T00:00:00Z`).toLocaleDateString('th-TH', { dateStyle: 'long', timeZone: 'UTC' })

export const formatBriefSize = (width: string, height: string) => {
  const parts = [width.trim() && `กว้าง ${width.trim()}`, height.trim() && `สูง ${height.trim()}`].filter(Boolean)
  return parts.length ? `${parts.join(' x ')} ซม.` : ''
}

const toLines = (fields: [label: string, value: string][]) =>
  fields.filter(([, value]) => value.trim()).map(([label, value]) => `${label}: ${value.trim()}`)

export const buildBriefMessage = (brief: ProjectBrief) => {
  const typeTitle = PROJECT_TYPES.find(type => type.id === brief.type)?.title ?? ''
  const fileNames = brief.files.map(file => file.name).join(', ')

  const projectLines = toLines([
    ['ประเภทงาน', typeTitle],
    ['ประเภทงานย่อย', brief.subtype],
    ['วัสดุ', brief.material],
    ['ขนาด', formatBriefSize(brief.width, brief.height)],
    ['จำนวน', brief.quantity && `${brief.quantity} ชิ้น`],
    ['ต้องการใช้งาน', brief.dueDate ? formatDueDate(brief.dueDate) : ''],
    ['การติดตั้ง', brief.installation],
    ['สถานที่ติดตั้ง', brief.location],
    ['รายละเอียดเพิ่มเติม', brief.notes],
    ['ไฟล์แนบ (จะส่งตามในแชท)', fileNames]
  ])

  const contactLines = toLines([
    ['ชื่อ', brief.name],
    ['เบอร์โทร', brief.phone],
    ['อีเมล', brief.email],
    ['LINE ID', brief.lineId]
  ])

  return ['สวัสดี SUNSUN PRINT ขอใบเสนอราคางานตามนี้', '', ...projectLines, '', ...contactLines].join('\n')
}
