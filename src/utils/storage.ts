export function setItem(key: string, token: string) {
  localStorage.setItem(key, token)
}

export function getItem(key: string) {
  return localStorage.getItem(key)
}
export function removeItem(key: string) {
  localStorage.removeItem(key)
}