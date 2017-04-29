export const byName = (...names) => names.reduce((selector, name) => (
  `${selector}${selector ? ' ' : ''}[data-name="${name}"]`
), '')

export const byRole = (role) => `[role="${role}"]`
