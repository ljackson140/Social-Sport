import { Theme } from '@radix-ui/themes'
import HomePage from './pages/HomePage'
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
      <HomePage />
    </Theme>
  )
}

export default App
