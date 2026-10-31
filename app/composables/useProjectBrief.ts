import { INSTALLATION_OPTIONS, UNSURE_MATERIAL } from '~/constants/startProject'
import type { ProjectBrief } from '~/types'

export type BriefStep = 1 | 2 | 3

// Bump the version when ProjectBrief changes shape, so a draft saved by an older build is dropped instead of misread
const DRAFT_STORAGE_KEY = 'sunsunprint:quote-draft:v1'

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

const isBriefStep = (value: unknown): value is BriefStep => value === 1 || value === 2 || value === 3

// Kept in shared state so a visitor who leaves to browse the works and comes back finds the brief where they left it,
// and as a draft in localStorage so a reload or a closed tab doesn't lose it either, until the brief is sent.
// Storage can be missing or refuse access (private windows, blocked site data), so every access is guarded and the form
// simply works without a draft then
export const useProjectBrief = () => {
  const brief = useState('project-brief', createEmptyBrief)
  const step = useState<BriefStep>('project-brief-step', () => 1)

  // The subtype and material lists belong to the type, so a different type starts them over
  const selectType = () => {
    brief.value.subtype = ''
    brief.value.material = UNSURE_MATERIAL
  }

  const saveDraft = () => {
    try {
      localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify({ brief: brief.value, step: step.value }))
    } catch {
      // Nothing to do: the brief still lives in memory for this visit
    }
  }

  // Missing fields fall back to their empty values, so a draft from before a field was added still loads
  const restoreDraft = () => {
    try {
      const saved = JSON.parse(localStorage.getItem(DRAFT_STORAGE_KEY) ?? 'null')
      if (!saved?.brief) return
      brief.value = { ...createEmptyBrief(), ...saved.brief }
      if (isBriefStep(saved.step)) step.value = saved.step
    } catch {
      // An unreadable draft is ignored and the visitor starts fresh
    }
  }

  const clearDraft = () => {
    try {
      localStorage.removeItem(DRAFT_STORAGE_KEY)
    } catch {
      // Nothing was saved to clear
    }
  }

  const reset = () => {
    brief.value = createEmptyBrief()
    step.value = 1
    clearDraft()
  }

  return { brief, step, selectType, saveDraft, restoreDraft, clearDraft, reset }
}
