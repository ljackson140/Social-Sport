import { useState, type ChangeEvent } from 'react'
import { useMutation } from '@tanstack/react-query'
import { useForm } from '@tanstack/react-form'
import { Link, useNavigate } from '@tanstack/react-router'
import { Button, TextField } from '@radix-ui/themes'
import { loginApi } from '../services/auth'
import type { LoginPayload } from '../data/request'

const required = (value: string) => (!value ? 'This field is required' : undefined)

export default function LoginPage() {
  const navigate = useNavigate()
  const [error, setError] = useState<string | null>(null)

  const mutation = useMutation({
    mutationFn: (payload: LoginPayload) => loginApi(payload),
    onSuccess: () => navigate({ to: '/home' }),
    onError: (err: Error) => setError(err.message || 'Login failed'),
  })

  const form = useForm({
    defaultValues: { Email: '', Password: '' },
    onSubmit: async ({ value }) => {
      setError(null)
      await mutation.mutateAsync(value)
    },
  })

  const { Field, handleSubmit, state } = form
  const submitDisabled = state.isSubmitting || mutation.isPending

  return (
    <div style={{ maxWidth: 420, margin: '40px auto', padding: 20 }}>
      <h2>Sign in</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          setError(null)
          handleSubmit()
        }}
      >
        {error && <div style={{ color: 'red', marginBottom: 12 }}>{error}</div>}

        <Field name="Email" validators={{ onChange: ({ value }) => required(value) }}>
          {(field) => (
            <div style={{ marginBottom: 16 }}>
              <label htmlFor={field.name} style={{ display: 'block', marginBottom: 6 }}>
                Email
              </label>
              <TextField.Root
                id={field.name}
                name={field.name}
                type="email"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(event: ChangeEvent<HTMLInputElement>) => field.handleChange(event.currentTarget.value)}
                placeholder="Enter email"
              />
              {field.state.meta.errors?.[0] && (
                <div style={{ color: 'red', marginTop: 6 }}>{field.state.meta.errors[0]}</div>
              )}
            </div>
          )}
        </Field>

        <Field name="Password" validators={{ onChange: ({ value }) => required(value) }}>
          {(field) => (
            <div style={{ marginBottom: 20 }}>
              <label htmlFor={field.name} style={{ display: 'block', marginBottom: 6 }}>
                Password
              </label>
              <TextField.Root
                id={field.name}
                name={field.name}
                type="password"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(event: ChangeEvent<HTMLInputElement>) => field.handleChange(event.currentTarget.value)}
                placeholder="Enter password"
              />
              {field.state.meta.errors?.[0] && (
                <div style={{ color: 'red', marginTop: 6 }}>{field.state.meta.errors[0]}</div>
              )}
            </div>
          )}
        </Field>

        <Button type="submit" disabled={submitDisabled} style={{ width: '100%' }}>
          {submitDisabled ? 'Signing in...' : 'Sign in'}
        </Button>
      </form>

      <div style={{ marginTop: 12 }}>
        <Link to="/signup">Create an account</Link>
      </div>
    </div>
  )
}
