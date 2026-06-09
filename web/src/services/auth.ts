import { SignupPayload } from "../data/request"

const TOKEN_KEY = 'ss_token'


async function parseJsonSafe(res: Response) {
  const txt = await res.text()
  try { return JSON.parse(txt) } catch { return txt }
}

export async function signupApi(payload: SignupPayload) {
  const res = await fetch('/api/user', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  const body = await parseJsonSafe(res)
  if (!res.ok) {
    const message = body?.message || (typeof body === 'string' ? body : 'Signup failed')
    throw new Error(message)
  }
  // backend wraps result in { success:true, data: { user, accessToken } }
  const token = body?.data?.accessToken
  if (!token) throw new Error('No access token returned from server')
  localStorage.setItem(TOKEN_KEY, token)
  return body.data
}

export function logout() {
  localStorage.removeItem(TOKEN_KEY)
}

export function isAuthenticated() {
  return !!localStorage.getItem(TOKEN_KEY)
}
