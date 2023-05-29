export const slugify = (str: string, replace?: string): string =>
  str.replace(/\W{1,}/g, replace ? replace : "").toLowerCase()
