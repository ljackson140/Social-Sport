const BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '/api'
const TOKEN_KEY = 'ss_token'

export function getToken() {
  return localStorage.getItem(TOKEN_KEY)
}

export function setToken(token: string) {
  localStorage.setItem(TOKEN_KEY, token)
}

export function clearToken() {
  localStorage.removeItem(TOKEN_KEY)
}

interface ApiEnvelope<T> {
  success: boolean
  data?: T
  message?: string
  errors?: { code?: string; details?: string }[]
}

interface RequestOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  body?: unknown
  signal?: AbortSignal
}

export async function apiFetch<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const { method = 'GET', body, signal } = options

  const headers: Record<string, string> = {}
  if (body !== undefined) headers['Content-Type'] = 'application/json'

  const token = getToken()
  if (token) headers['Authorization'] = `Bearer ${token}`

  const res = await fetch(`${BASE_URL}${path}`, {
    method,
    headers,
    body: body !== undefined ? JSON.stringify(body) : undefined,
    signal,
  })

  const text = await res.text()
  let payload: ApiEnvelope<T> | undefined
  try {
    payload = text ? (JSON.parse(text) as ApiEnvelope<T>) : undefined
  } catch {
    payload = undefined
  }

  if (!res.ok || payload?.success === false) {
    throw new Error(extractErrorMessage(payload, text, res.status))
  }

  return payload?.data as T
}

function extractErrorMessage(
  payload: ApiEnvelope<unknown> | undefined,
  rawText: string,
  status: number,
): string {
  const fieldErrors = payload?.errors
    ?.map((e) => e.details)
    .filter(Boolean)
    .join('\n')

  return (
    fieldErrors ||
    payload?.message ||
    (rawText && !rawText.startsWith('<') ? rawText : '') ||
    `Request failed (${status})`
  )
}
