import { PROJECT_TYPES } from '~/constants/startProject'
import type { ProjectBrief } from '~/types'

const NOT_GIVEN = 'ไม่ระบุ'

const orNotGiven = (value: string | undefined) => value?.trim() || NOT_GIVEN

// The date input gives a bare yyyy-mm-dd; reading it as UTC and formatting in UTC keeps the day from shifting by timezone
const formatDueDate = (isoDate: string) =>
  new Date(`${isoDate}T00:00:00Z`).toLocaleDateString('th-TH', { dateStyle: 'long', timeZone: 'UTC' })

export const formatBriefSize = ({ width, depth, height }: Pick<ProjectBrief, 'width' | 'depth' | 'height'>) => {
  const parts = [
    width.trim() && `กว้าง ${width.trim()}`,
    depth.trim() && `ลึก ${depth.trim()}`,
    height.trim() && `สูง ${height.trim()}`
  ].filter(Boolean)
  return parts.length ? `${parts.join(' x ')} ซม.` : ''
}

// Every field the chosen type asks for is listed, empty ones as "ไม่ระบุ", so the shop sees what the visitor skipped as
// well as what they filled in. Fields the type doesn't ask for are left out, so a value kept from a type the visitor
// switched away from never reaches the shop. The same text is previewed, copied, downloaded and emailed
export const buildBriefMessage = (brief: ProjectBrief) => {
  const projectType = PROJECT_TYPES.find(type => type.id === brief.type)
  const isPackaging = projectType?.isPackaging ?? false

  return [
    `ประเภทงานหลัก: ${orNotGiven(projectType?.title)}`,
    `ประเภทย่อย: ${orNotGiven(brief.subtype)}`,
    '',
    `วัสดุ: ${orNotGiven(brief.material)}`,
    ...(projectType?.finishes ? [`เทคนิคตกแต่งพิเศษ: ${orNotGiven(brief.finish)}`] : []),
    isPackaging
      ? `ขนาด (กว้าง × ลึก × สูง): ${orNotGiven(brief.width)} × ${orNotGiven(brief.depth)} × ${orNotGiven(brief.height)} ซม.`
      : `ขนาด (กว้าง × สูง): ${orNotGiven(brief.width)} × ${orNotGiven(brief.height)} ซม.`,
    `จำนวน: ${brief.quantity.trim() ? `${brief.quantity.trim()} ชิ้น` : NOT_GIVEN}`,
    `วันที่ต้องการใช้: ${brief.dueDate ? formatDueDate(brief.dueDate) : 'ยังไม่ระบุ'}`,
    ...(isPackaging ? [] : [`ต้องการติดตั้ง: ${orNotGiven(brief.installation)}`]),
    `${isPackaging ? 'สถานที่จัดส่ง' : 'สถานที่ติดตั้ง'}: ${orNotGiven(brief.location)}`,
    `รายละเอียดเพิ่มเติม: ${orNotGiven(brief.notes)}`,
    '',
    `ไฟล์แนบ: ${brief.hasFiles ? orNotGiven(brief.fileLink) : 'ไม่มี'}`,
    '',
    `ชื่อผู้ติดต่อ: ${orNotGiven(brief.name)}`,
    `เบอร์โทรศัพท์: ${orNotGiven(brief.phone)}`,
    `LINE ID: ${orNotGiven(brief.lineId)}`,
    `อีเมล: ${orNotGiven(brief.email)}`
  ].join('\n')
}
