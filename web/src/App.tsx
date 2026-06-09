import { Theme } from '@radix-ui/themes'
import Router from './router'
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
      <Router />
    </Theme>
  )
}

export default App
