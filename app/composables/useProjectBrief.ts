import { INSTALLATION_OPTIONS, UNSURE_MATERIAL } from '~/constants/startProject'
import type { ProjectBrief } from '~/types'

export type BriefStep = 1 | 2 | 3

const createEmptyBrief = (): ProjectBrief => ({
  type: null,
  subtype: '',
  material: UNSURE_MATERIAL,
  width: '',
  height: '',
  quantity: '1',
  dueDate: '',
  installation: INSTALLATION_OPTIONS[0]!,
  location: '',
  notes: '',
  hasFiles: false,
  fileLink: '',
  hasUploadedFiles: false,
  name: '',
  phone: '',
  email: '',
  lineId: '',
  consent: false
})

// Kept in shared state so a visitor who leaves to browse the works and comes back finds the brief where they left it
export const useProjectBrief = () => {
  const brief = useState('project-brief', createEmptyBrief)
  const step = useState<BriefStep>('project-brief-step', () => 1)

  // The subtype and material lists belong to the type, so a different type starts them over
  const selectType = () => {
    brief.value.subtype = ''
    brief.value.material = UNSURE_MATERIAL
  }

  return { brief, step, selectType }
}
