import { useEffect } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { isAuthenticated, logout } from '../services/auth'
import { Box } from '@radix-ui/themes'
import {
  TopNavBar,
  HeroSection,
  LiveGamesSection,
  ValuePropsSection,
  ImageShowcaseSection,
  CallToActionSection,
  Footer
} from '../components'

export default function HomePage() {
  const navigate = useNavigate()
  const authed = isAuthenticated()

  useEffect(() => {
    if (!authed) navigate({ to: '/login' })
  }, [authed, navigate])

  const handleSearch = (filters: { sport: string; location: string }) => {
    console.log('Search initiated:', filters)
  }

  const handleGameAction = (gameId: string) => {
    console.log('Game action:', gameId)
  }

  const handleGetStarted = () => {
    console.log('Get Started clicked')
  }

  const handleExploreSports = () => {
    console.log('Explore Sports clicked')
  }

  if (!authed) {
    return null
  }

  async function handleLogout() {
    await logout()
    navigate({ to: '/login' })
  }

  return (
    <Box style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation */}
      <TopNavBar />

      <div style={{maxWidth:720,margin:'40px auto',padding:20}}>
      <h1>Homepage</h1>
      <p>Welcome — you are signed in.</p>
      <button onClick={handleLogout}>Sign out</button>
    </div>

      {/* Main Content */}
      <main style={{ width: '100%' }}>
        {/* Hero Section */}
        <HeroSection onSearch={handleSearch} />

        {/* Live Games Section */}
        <LiveGamesSection onGameAction={handleGameAction} />

        {/* Value Propositions Section */}
        <ValuePropsSection />

        {/* Image Showcase Section */}
        <ImageShowcaseSection />

        {/* Call to Action Section */}
        <CallToActionSection
          onGetStarted={handleGetStarted}
          onExploreSports={handleExploreSports}
        />
      </main>

      {/* Footer */}
      <Footer />
    </Box>
  )
}
