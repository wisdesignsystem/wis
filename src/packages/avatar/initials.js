function isFullEnglishName(name) {
  return /^[A-Za-z\s]+$/.test(name)
}

function getEnglishInitials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join('')
}

function isFullChineseName(name) {
  return /^[\u4e00-\u9fa5\s]+$/.test(name)
}

function getChineseInitials(name) {
  return name.slice(1, 3)
}

function getSmartInitials(name) {
  if (isFullEnglishName(name)) {
    return getEnglishInitials(name)
  }

  if (isFullChineseName(name)) {
    return getChineseInitials(name)
  }

  return name.charAt(0)
}

export default function getInitials({ name, initials }) {
  if (initials) {
    return initials
  }

  return getSmartInitials(name)
}
