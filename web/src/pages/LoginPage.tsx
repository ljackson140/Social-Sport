import React, { useState } from 'react'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    try {
      //await login(username, password)
      history.pushState({}, '', '/home')
      window.dispatchEvent(new PopStateEvent('popstate'))
    } catch (err: any) {
      setError(err.message || 'Login failed')
    }
  }

  return (
    <div style={{maxWidth:420,margin:'40px auto',padding:20}}>
      <h2>Sign in</h2>
      <form onSubmit={handleSubmit}>
        <div style={{marginBottom:8}}>
          <label>Username</label>
          <input value={username} onChange={(e)=>setUsername(e.target.value)} />
        </div>
        <div style={{marginBottom:8}}>
          <label>Password</label>
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        </div>
        {error && <div style={{color:'red',marginBottom:8}}>{error}</div>}
        <button type="submit">Sign in</button>
      </form>
      <div style={{marginTop:12}}>
        <a href="/signup">Create an account</a>
      </div>
    </div>
  )
}
