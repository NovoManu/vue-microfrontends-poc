const tokenKey = 'Orcas Token'

export const setToken = (token) => {
  localStorage.setItem(tokenKey, token)
}

export const getToken = () => {
  return localStorage.getItem(tokenKey)
}

export const deleteToken = () => {
  localStorage.removeItem(tokenKey)
}
