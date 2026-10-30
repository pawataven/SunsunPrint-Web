// Shared open state so any LINE link (footer, mobile menu) can open the one dialog mounted in the layout
export const useLineDialog = () => {
  const isOpen = useState('line-dialog-open', () => false)
  return {
    isOpen,
    open: () => (isOpen.value = true),
    close: () => (isOpen.value = false)
  }
}
