export const getDirection = (language?: string) => {
  if (!language) return 'ltr'
  return ['ar', 'he', 'fa'].includes(language) ? 'rtl' : 'ltr'
}

export const isRTL = (language?: string) => {
  return getDirection(language) === 'rtl'
}