const BASE_URL = 'https://sennder-sennder.stg.sennder.com'

export const login = async ({ email, password }) => {
  const res = await fetch(`${BASE_URL}/auth/login/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
  const data = await res.json()
  return data.key
}

export const logout = async () => {
  const res = await fetch(`${BASE_URL}/auth/logout/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  return true
}
