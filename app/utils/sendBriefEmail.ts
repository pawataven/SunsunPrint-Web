import { PROJECT_TYPES } from '~/constants/startProject'
import type { ProjectBrief } from '~/types'

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'

// Web3Forms forwards the submission to the inbox its access key was created for. The key is meant to sit in the page;
// Web3Forms uses `email` as the reply-to, so the shop can answer a customer who left one straight from the email
export const sendBriefEmail = async (accessKey: string, brief: ProjectBrief, message: string) => {
  if (!accessKey) throw new Error('Web3Forms access key is not set')

  const typeTitle = PROJECT_TYPES.find(type => type.id === brief.type)?.title ?? 'งานพิมพ์'
  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `ขอใบเสนอราคา: ${typeTitle} — ${brief.name.trim()}`,
      from_name: 'SUNSUN PRINT Website',
      name: brief.name.trim(),
      email: brief.email.trim() || undefined,
      message
    })
  })

  const result: { success?: boolean, message?: string } | null = await response.json().catch(() => null)
  if (!response.ok || !result?.success) throw new Error(result?.message ?? `Web3Forms responded ${response.status}`)
}
