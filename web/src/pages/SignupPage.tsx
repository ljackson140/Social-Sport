import { useState, type ChangeEvent } from 'react'
import { useMutation } from '@tanstack/react-query'
import { useForm } from '@tanstack/react-form'
import { Link, useNavigate } from '@tanstack/react-router'
import { signupApi } from '../services/auth'
import type { SignupPayload } from '../data/request'
import { Button, TextField } from '@radix-ui/themes'

const required = (value: string) => (!value ? 'This field is required' : undefined)

export default function SignupPage() {
  const navigate = useNavigate()
  const [error, setError] = useState<string | null>(null)

  const mutation = useMutation({
    mutationFn: (payload: SignupPayload) => signupApi(payload),
    // Signup doesn't issue a token, so send the user to the login page.
    onSuccess: () => navigate({ to: '/login' }),
    onError: (err: Error) => {
      setError(err?.message || 'Signup failed')
    },
  })

  const form = useForm({
    defaultValues: {
      FirstName: '',
      LastName: '',
      Username: '',
      Email: '',
      Password: '',
      PhoneNumber: '',
      DOB: '',
    },
    onSubmit: async ({ value }) => {
      setError(null)
      await mutation.mutateAsync(value)
    },
  })

  const { Field, handleSubmit, state } = form
  const submitDisabled = state.isSubmitting || mutation.isPending

  return (
    <div style={{ maxWidth: 420, margin: '40px auto', padding: 20 }}>
      <h2>Create account</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          setError(null)
          handleSubmit()
        }}
      >
        {error && (
          <div style={{ color: 'red', marginBottom: 12 }}>{error}</div>
        )}

        <Field name="FirstName" validators={{ onChange: ({ value }) => required(value) }}>
          {(field) => (
            <div style={{ marginBottom: 16 }}>
              <label htmlFor={field.name} style={{ display: 'block', marginBottom: 6 }}>
                First name
              </label>
              <TextField.Root
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(event: ChangeEvent<HTMLInputElement>) => field.handleChange(event.currentTarget.value)}
                placeholder="Enter first name"
              />
              {field.state.meta.errors?.[0] && (
                <div style={{ color: 'red', marginTop: 6 }}>{field.state.meta.errors[0]}</div>
              )}
            </div>
          )}
        </Field>

        <Field name="LastName" validators={{ onChange: ({ value }) => required(value) }}>
          {(field) => (
            <div style={{ marginBottom: 16 }}>
              <label htmlFor={field.name} style={{ display: 'block', marginBottom: 6 }}>
                Last name
              </label>
              <TextField.Root
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(event: ChangeEvent<HTMLInputElement>) => field.handleChange(event.currentTarget.value)}
                placeholder="Enter last name"
              />
              {field.state.meta.errors?.[0] && (
                <div style={{ color: 'red', marginTop: 6 }}>{field.state.meta.errors[0]}</div>
              )}
            </div>
          )}
        </Field>

        <Field name="Username" validators={{ onChange: ({ value }) => required(value) }}>
          {(field) => (
            <div style={{ marginBottom: 16 }}>
              <label htmlFor={field.name} style={{ display: 'block', marginBottom: 6 }}>
                Username
              </label>
              <TextField.Root
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(event: ChangeEvent<HTMLInputElement>) => field.handleChange(event.currentTarget.value)}
                placeholder="Enter username"
              />
              {field.state.meta.errors?.[0] && (
                <div style={{ color: 'red', marginTop: 6 }}>{field.state.meta.errors[0]}</div>
              )}
            </div>
          )}
        </Field>

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
            <div style={{ marginBottom: 16 }}>
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

        <Field name="PhoneNumber">
          {(field) => (
            <div style={{ marginBottom: 16 }}>
              <label htmlFor={field.name} style={{ display: 'block', marginBottom: 6 }}>
                Phone number
              </label>
              <TextField.Root
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(event: ChangeEvent<HTMLInputElement>) => field.handleChange(event.currentTarget.value)}
                placeholder="Enter phone number (optional)"
              />
            </div>
          )}
        </Field>

        <Field name="DOB" validators={{ onChange: ({ value }) => required(value) }}>
          {(field) => (
            <div style={{ marginBottom: 20 }}>
              <label htmlFor={field.name} style={{ display: 'block', marginBottom: 6 }}>
                Date of birth
              </label>
              <TextField.Root
                id={field.name}
                name={field.name}
                type="date"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(event: ChangeEvent<HTMLInputElement>) => field.handleChange(event.currentTarget.value)}
                placeholder="Select date of birth"
              />
              {field.state.meta.errors?.[0] && (
                <div style={{ color: 'red', marginTop: 6 }}>{field.state.meta.errors[0]}</div>
              )}
            </div>
          )}
        </Field>

        <Button type="submit" disabled={submitDisabled} style={{ width: '100%' }}>
          {submitDisabled ? 'Sending...' : 'Create account'}
        </Button>
      </form>

      <div style={{ marginTop: 12 }}>
        <Link to="/login">Back to sign in</Link>
      </div>
    </div>
  )
}
