import { Theme } from '@radix-ui/themes'
import Router from './router'
import { AuthProvider } from './providers/authProvider'
import '@radix-ui/themes/styles.css'
import './App.css'

function App() {
  return (
    <Theme
      accentColor="yellow"
      appearance="light"
      radius="medium"
      scaling="100%"
    >
      <AuthProvider>
        <Router />
      </AuthProvider>
    </Theme>
  )
}

export default App
