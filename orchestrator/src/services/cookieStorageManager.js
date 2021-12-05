import { CookieStorage } from 'cookie-storage'

const tokenKey = 'Orcas Token'

const cookieStorage = new CookieStorage()

export const setToken = (token) => {
  const d = new Date();
  d.setMonth(d.getMonth() + 8)
  cookieStorage.setItem(tokenKey, token, {
    expires: d,
    secure: true,
    sameSite: 'Strict'
  })
}

export const getToken = () => {
  return cookieStorage.getItem(tokenKey)
}

export const deleteToken = () => {
  cookieStorage.removeItem(tokenKey)
}
