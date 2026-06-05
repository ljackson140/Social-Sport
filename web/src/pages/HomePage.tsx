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

  return (
    <Box style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation */}
      <TopNavBar />

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
