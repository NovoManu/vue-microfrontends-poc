const BASE_URL = 'https://reqres.in/api'

export const login = async ({ email, password }) => {
  const res = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': 'reqres-free-v1'
    },
    body: JSON.stringify({ email, password })
  })
  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.error || 'Login failed')
  }

  return data.token
}

export const logout = async () => {
  // reqres.in doesn't have a logout endpoint, so we'll just return true
  // In a real app, you might clear local storage or call a logout API
  return true
}
