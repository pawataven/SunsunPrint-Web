type CopyState = 'idle' | 'copied' | 'failed'

/*
  `getFallbackContainer` is where the hidden textarea of the fallback route goes. Inside a modal dialog it has to be the
  dialog itself: everything outside an open modal is inert, so a field there can't be selected
*/
export const useCopyText = (getFallbackContainer: () => HTMLElement | null | undefined = () => document.body) => {
  const copyState = ref<CopyState>('idle')
  let resetCopyStateTimer: ReturnType<typeof setTimeout> | undefined

  // The older execCommand route still works where the Clipboard API is refused: non-HTTPS origins and the in-app
  // browsers of LINE and Facebook, which is where many visitors will open this
  const copyWithSelection = (text: string) => {
    const field = document.createElement('textarea')
    field.value = text
    field.setAttribute('readonly', '')
    field.style.position = 'fixed'
    field.style.opacity = '0'
    ;(getFallbackContainer() ?? document.body).append(field)
    field.select()
    const copied = document.execCommand('copy')
    field.remove()
    return copied
  }

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      copyState.value = 'copied'
    } catch {
      // If both routes fail, the text is still on screen and selectable
      copyState.value = copyWithSelection(text) ? 'copied' : 'failed'
    }
    clearTimeout(resetCopyStateTimer)
    resetCopyStateTimer = setTimeout(() => (copyState.value = 'idle'), 2000)
  }

  onBeforeUnmount(() => clearTimeout(resetCopyStateTimer))

  return { copyState, copy }
}
